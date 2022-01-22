const router = require('express').Router();

const productsController = require('./controller');

router.get('/hot', productsController.hot);
router.get('/:prodId', productsController.get);

module.exports = router;
