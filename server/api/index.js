const router = require('express').Router();

const auth = require('./auth');
const cart = require('./cart');
const bought = require('./bought');
const upload = require('./upload');
const products = require('./products');
const categories = require('./categories');

router.use('/auth', auth);
router.use('/bought', bought);
router.use('/cart', cart);
router.use('/categories', categories);
router.use('/products', products);
router.use('/upload', upload);

module.exports = router;
