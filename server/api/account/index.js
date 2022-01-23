const router = require('express').Router();
const accountController = require('./controller');

router.put('/update', accountController.update);

module.exports = router;
