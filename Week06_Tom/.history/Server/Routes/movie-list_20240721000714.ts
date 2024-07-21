import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayMovieList } from "../Controllers/movie-list";

// Display Movie LIst Page
router.get('/movie-list', AuthGuard, DisplayMovieList);

// Display Add Page


// Display Edit Page

// Process Add page


// Process Edit Page


// Process Delete Page

export default router;