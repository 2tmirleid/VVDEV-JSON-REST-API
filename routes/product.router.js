const {Router} = require('express');
const router = new Router();
const productController = require('../controllers/product.controller');

router.get('/all', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/add', productController.addNewProduct);
router.post('/photo', productController.uploadPhoto);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;