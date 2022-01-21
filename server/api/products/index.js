const router = require('express').Router();

const productsController = require('./controller');

router.get('/hot', productsController.hot);
router.get('/:id', productsController.get);

module.exports = router;
