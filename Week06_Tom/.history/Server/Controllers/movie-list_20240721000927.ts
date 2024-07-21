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

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{


}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

    
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

    
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

    
}



Movie.find().exec()