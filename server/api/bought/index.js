const router = require('express').Router();
const boughtController = require('./controller');
const authorize = require('../../common/authorization');

router.get('/:userid', authorize.isValid, boughtController.boughtInfo);

module.exports = router;
