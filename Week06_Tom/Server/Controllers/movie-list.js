"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const Util_1 = require("../Util");
function DisplayMovieList(req, res, next) {
    movie_1.default.find().exec()
        .then(moviesCollection => {
        res.render('index', { title: 'Movie List', page: 'movie-list', displayName: (0, Util_1.UserDisplayName)(req), movies: moviesCollection });
    })
        .catch(err => {
        console.error(err);
        res.status(500).send(err.message);
    });
}
exports.DisplayMovieList = DisplayMovieList;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', movie: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
async function DisplayEditPage(req, res, next) {
    try {
        let id = req.params.id;
        let movieToEdit = await movie_1.default.findById(id).exec();
        res.render('index', { title: 'Edit', page: 'edit', movie: movieToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    }
    catch (err) {
        console.error(err);
        res.end(err);
    }
}
exports.DisplayEditPage = DisplayEditPage;
async function ProcessAddPage(req, res, next) {
    try {
        let newMovie = new movie_1.default({
            "Name": req.body.movieName,
            "Director": req.body.movieDirector,
            "Year": req.body.movieYear,
            "Rating": req.body.movieRating
        });
        await movie_1.default.create(newMovie);
        res.redirect('/movie-list');
    }
    catch (err) {
        console.error(err);
        res.end(err);
    }
}
exports.ProcessAddPage = ProcessAddPage;
async function ProcessEditPage(req, res, next) {
    try {
        let id = req.params.id;
        let updatedMovie = new movie_1.default({
            "_id": id,
            "Name": req.body.movieName,
            "Director": req.body.movieDirector,
            "Year": req.body.movieYear,
            "Rating": req.body.movieRating
        });
        await movie_1.default.updateOne({ _id: id }, updatedMovie);
        res.redirect('/movie-list');
    }
    catch (err) {
        console.error(err);
        res.end(err);
    }
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
}
exports.ProcessDeletePage = ProcessDeletePage;
movie_1.default.find().exec();
//# sourceMappingURL=movie-list.js.map