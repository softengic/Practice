import express from 'express';

// need passport functionality
import passport from 'passport';

// include the user model for authentication function
import User from '../Models/user';

// Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: 'a' });
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: 'a' });
}

// Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local', function (err: any, user: any, info: any) {
        //are there server errors? 
        if (err) {
            console.error(err);
            res.end(err);
        }

        //are there login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('login');
        }

        //no problems - i.e. good user name and password
        req.logIn(user, function (err) {
            // are there db errors?
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('movie-list');
        });        
    }) (req, res, next);
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    //instantiate a new user object
    let newUser = new User
        ({
            username: req.body.username,
            EmailAddress: req.body.emailAddress,
            DisplayName: req.body.firstName + " " + req.body.lastName
        })
    
    User.register(newUser, req.body.password, function (err)
    {
        if (err)
        {
            if (err.name == "UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error!');
            }
            else
            {
                console.error(err.name); // other error
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/register');
        }

        //everything is ok - user has been registered

        //automatically login the user
        return passport.authenticate('local')(req, res, function ()
        {
            return res.redirect('/movie-list');
        })
    })
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut((err: any) => {
        if (err)
        {
            return next(err);
        }
        res.redirect('/login');
    });
}
