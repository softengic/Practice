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
    passport.authenticate('local', function (err, user, info)
    {
        
    })
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}
