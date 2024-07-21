import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Server/Util';

import { DisplayMovieList } from "../Server/Controllers/movie-list";

router.get('/movie-list', AuthGuard, DisplayMovieList);

export default router;