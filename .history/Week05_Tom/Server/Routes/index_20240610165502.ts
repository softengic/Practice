import express, { NextFunction } from 'express';
const router = express.Router();

// import the controller module
import { DisplayHomePage } from "../Controllers/index";

/* Display home page. */
router.get('/', DisplayHomePage);

router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'About Us', page: 'about' });
});

/* Display projects page. */
router.get('/projects', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* Display services page. */
router.get('/services', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Services', page: 'services' });
});

/* Display contact page. */
router.get('/contact', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});
export default router;