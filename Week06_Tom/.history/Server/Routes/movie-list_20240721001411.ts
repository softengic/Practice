import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMovieList } from "../Controllers/movie-list";

// Display Movie LIst Page
router.get('/movie-list', AuthGuard, DisplayMovieList);

// Display Add Page
router.get('/add', AuthGuard, DisplayMovieList);

// Display Edit Page
router.get('/edit/:id', AuthGuard, DisplayMovieList);

// Process Add Page
router.post('/add', AuthGuard, DisplayMovieList);

// Process Edit Page
router.post('/edit/:id', AuthGuard, DisplayMovieList);

// Process Delete Page
router.post('/delete/:id', AuthGuard, DisplayMovieList);


export default router;