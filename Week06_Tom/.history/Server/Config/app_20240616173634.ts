import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// import db package mongoose
import mongoose from 'mongoose';

// Step 1: for auth, import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// modules for JWT support
import cors from 'cors';

// Step 2: for auth, define our auth objects
let localStrategy = passportLocal.Strategy; //alias

// Step 3: for auth, import user model
import User from '../Models/user';

// import the router data
import indexRouter from '../Routes/index';
import movieListRouter from '../Routes/movie-list';
import authRouter from '../Routes/auth';

const app = express();

// Complete the DB Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI);
const db = mongoose.connection;  //alias for the mongoose connection

// Listen for Connections or Error
db.on("open", function ()
{
    console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

db.on("error", function ()
{
    console.log(`Connection Error`);    
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors()); //adds CORS (cross-origin resource sharing) to the config

// user routes
app.use('/', indexRouter);
app.use('/', movieListRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response , next: NextFunction) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  
});

export default app;
