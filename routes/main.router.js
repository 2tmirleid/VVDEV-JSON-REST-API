const {Router} = require('express');
const productRouter = require('./product.router');
const router = new Router();

router.use('/products', productRouter);

module.exports = router;