import express, { NextFunction } from 'express';
const router = express.Router();

// import the controller module
import { DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage } from "../Controllers/index";
import { DisplayLoginPage, DisplayRegisterPage } from '../Controllers/auth';

/* Display home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectsPage);

/* Display services page. */
router.get('/services', DisplayServicesPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);

export default router;