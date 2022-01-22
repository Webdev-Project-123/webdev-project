const router = require('express').Router();

const auth = require('./auth');
const cart = require('./cart');
const bought = require('./bought');
const search = require('./search');
const upload = require('./upload');
const products = require('./products');
const categories = require('./categories');
const authorize = require('../common/authorization');

router.use('/auth', auth);
router.use('/', authorize.isValid);
router.use('/cart', cart);
router.use('/bought', bought);
router.use('/search', search);
router.use('/upload', upload);
router.use('/products', products);
router.use('/categories', categories);

module.exports = router;
