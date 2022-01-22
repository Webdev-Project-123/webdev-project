const router = require('express').Router();

const auth = require('./auth');
// const cart = require('./cart');
const bought = require('./bought');
// const upload = require('./upload');
const products = require('./products');
const categories = require('./categories');

router.use('/auth', auth);
// router.use('/cart', cart);
router.use('/bought', bought);
// router.use('/upload', upload);
router.use('/products', products);
router.use('/categories', categories);

module.exports = router;
