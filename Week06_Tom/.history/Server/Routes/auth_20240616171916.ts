import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessRegisterPage, ProcessLogoutPage } from "../Controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);



/* Display projects page. */
router.post('/login', ProcessLoginPage);

/* Display services page. */
router.post('/register', ProcessRegisterPage);

/* Display contact page. */
router.get('/contact', ProcessLogoutPage);

export default router;