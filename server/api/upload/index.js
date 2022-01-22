const router = require('express').Router();

const uploadController = require('./controller');

const authorize = require('../../common/authorization');

router.use('/', authorize.isAdmin);
router.get('/', uploadController.view);
router.put('/:userId/update', uploadController.update);
router.delete('/:userId/delete', uploadController.delete);

module.exports = router;
