import express from 'express';
import Movie from '../Models/movie'; 
    
const displayName = '';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find().exec()
        .then(moviesCollection => {
            res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName});
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}
Movie.find().exec()