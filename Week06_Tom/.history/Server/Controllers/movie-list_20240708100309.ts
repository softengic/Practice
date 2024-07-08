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
Movie.find().exec()