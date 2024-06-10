import express, { NextFunction } from 'express';
const router = express.Router();

/* Display home page. */
router.get('/', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/home', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/about', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'About Us', page: 'about' });
});

router.get('/projects', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

router.get('/services', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Services', page: 'services' });
});

router.get('/contact', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});
export default router;