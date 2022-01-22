const router = require('express').Router();

const categoriesController = require('./controller');

router.get('/:category', categoriesController.get);

module.exports = router;
