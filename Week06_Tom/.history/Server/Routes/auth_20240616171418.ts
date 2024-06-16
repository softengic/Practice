import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, DisplayServicesPage, DisplayContactPage } from "../Controllers/auth";

/* Display home page. */
router.get('/', DisplayLoginPage);
router.get('/home', DisplayLoginPage);

/* Display about page. */
router.get('/about', DisplayRegisterPage);

/* Display projects page. */
router.get('/projects', ProcessLoginPage);

/* Display services page. */
router.get('/services', DisplayServicesPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

export default router;