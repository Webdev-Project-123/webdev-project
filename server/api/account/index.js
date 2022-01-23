const router = require('express').Router();
const accountController = require('./controller');

router.patch('/update', accountController.update);

module.exports = router;
