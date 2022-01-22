const router = require('express').Router();

const uploadController = require('./controller');

router.get('/:userId', uploadController.view);
router.put('/:userId/update', uploadController.update);
router.delete('/:userId/delete', uploadController.delete);

module.exports = router;
