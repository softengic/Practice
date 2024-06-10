import express, { NextFunction } from 'express';
const router = express.Router();
import { DisplayMovieList } from "../Controllers/index";

router.get('/movie-list', DisplayMovieList);

export default router;