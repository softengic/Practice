import express from 'express';
const router = express.Router();

// import the controller module
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessRegisterPage, ProcessLogoutPage } from "../Server/Controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);



/* Process the login page. */
router.post('/login', ProcessLoginPage);

/* Process the register page. */
router.post('/register', ProcessRegisterPage);

/* Process the logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;