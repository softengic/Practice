import express, { NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/home', function (req: express.Request, res: express.Response, next: NextFunction)
{
  res.render('index', { title: 'Home', page: 'home' });
});


export default router;