import 'babel-polyfill';
import express from 'express';
import categoriesRouter  from './routs/categoriesRouter';
import goodsRouter  from './routs/goodsRouter';

const router = express.Router();

router.get('/test', (req, res, next) => {
	res.send("Hello world");
});

module.exports = router;

