import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', displayName: 'a' });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Us', page: 'about', displayName: 'a' });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Projects', page: 'projects', displayName: 'a' });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Services', page: 'services', displayName: 'a' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: 'a' });
}
