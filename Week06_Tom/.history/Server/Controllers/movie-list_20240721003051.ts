import express from 'express';
import Movie from '../Models/movie'; 
import moviesCollection from '../Models/movie'; 
import { UserDisplayName } from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find().exec()
        .then(moviesCollection => {
            res.render('index', { title: 'Movie List', page: 'movie-list', displayName: UserDisplayName(req), movies: moviesCollection});
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    res.render('index', { title: 'Add', page: 'edit', movie: '', displayName: UserDisplayName(req) })
}

export async function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void></void>
{
    let id = req.params.id;
    
    // pass the id to the db and read the movie into the edit page
    Movie.findById(id, {}, function(err: any, movieToEdit: any)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }

        // Show the edit view with the data
        res.render('index', { title: 'Edit', page: 'edit', movie: movieToEdit, displayName: UserDisplayName(req) })
    });

}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    
}

Movie.find().exec()