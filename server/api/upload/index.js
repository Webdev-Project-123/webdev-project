const router = require('express').Router();

const uploadController = require('./controller');

const authorize = require('../../common/authorization');

router.use('/', authorize.isAdmin);
router.get('/', uploadController.view);
router.put('/update', uploadController.update);
router.delete('/delete', uploadController.delete);

module.exports = router;
