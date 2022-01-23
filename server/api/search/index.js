const router = require('express').Router();

const searchController = require('./controller');

router.get('/products', searchController.search);

module.exports = router;
