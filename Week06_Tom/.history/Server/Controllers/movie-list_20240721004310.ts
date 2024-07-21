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

export async function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>
{
    try
    {
        let id = req.params.id;
        let movieToEdit = await Movie.findById(id).exec();

        // pass the id to the db and read the movie into the edit page
        res.render('index', { title: 'Edit', page: 'edit', movie: movieToEdit, displayName: UserDisplayName(req) })
    }
    catch (err)
    {
        console.error(err);
        res.end(err);
    }
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    //instantiate a new Movie to Add
    let newMovie = new Movie
    ({
        "Name": req.body.movieName,
        "Director": req.body.movieDirector,
        "Year": req.body.movieYear,
        "Rating": req.body.movieRating
    })
    
    // insert the new Movie object into the db (movie collection)
    Movie.create(newMovie, function (err)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
})
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void
{

    
}

Movie.find().exec()