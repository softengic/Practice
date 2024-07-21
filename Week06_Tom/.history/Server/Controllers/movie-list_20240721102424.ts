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

export async function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    try
    {
        // instantiate a new Movie to Add
        let newMovie = new Movie
            ({
                "Name": req.body.movieName,
                "Director": req.body.movieDirector,
                "Year": req.body.movieYear,
                "Rating": req.body.movieRating
            });
    
        // insert the new Movie object into the db (movie collection)
        await Movie.create(newMovie)
    
        //new movie has been added -> refresh the movie-list
        res.redirect('/movie-list');
    } 
    catch(err)
    {
        console.error(err);
        res.end(err);
    }
}

export async function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    try
    {
        let id = req.params.id;

        // calling the movie to edit
        let updatedMovie = new Movie
        ({
            "_id": id,
            "Name": req.body.movieName,
            "Director": req.body.movieDirector,
            "Year": req.body.movieYear,
            "Rating": req.body.movieRating
        });

        // update the movie in the database
        await Movie.updateOne({ _id: id }, updatedMovie);

        // edit was successful -> go to the movie-list page
        res.redirect('/movie-list');
    }   
    catch (err)
    {
        console.error(err);
        res.end(err);   
    } 
}

export async function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void>
{
    try
    {
        let id = req.params.id;

        // pass the id to the database and delete the movie
        await Movie.deleteOne({ _id: id });

    }
    catch (err)
    {
        console.error(err);
        res.end(err);
    }
    res.redirect('/movie-list');
}

Movie.find().exec()