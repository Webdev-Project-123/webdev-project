const router = require('express').Router();

const auth = require('./auth');
const cart = require('./cart');
const bought = require('./bought');
const search = require('./search');
const upload = require('./upload');
const account = require('./account');
const products = require('./products');
const categories = require('./categories');
const authorize = require('../common/authorization');

router.use('/auth', auth);
router.use('/search', search);
router.use('/products', products);
router.use('/categories', categories);

router.use(['/cart', '/bought', '/upload', '/account'], authorize.isValid);
router.use('/cart', cart);
router.use('/bought', bought);
router.use('/upload', upload);
router.use('/account', account);

module.exports = router;
