import express from 'express';


export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Us', page: 'about' });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Projects', page: 'projects' });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Services', page: 'services' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact' });
}

/**** temp *****/
import Movies from '../Models/movie'; 
    
export async function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movies.find().exec()
        .then(movieCollection => {
            res.render('index', { title: 'Movie List', page: 'movie-list', movies: movieCollection });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}