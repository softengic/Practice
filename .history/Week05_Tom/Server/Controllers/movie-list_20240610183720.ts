import express from 'express';
import Movies from '../Models/movie'; 
    
export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
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
Movies.find().exec()