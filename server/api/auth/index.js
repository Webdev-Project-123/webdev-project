const router = require('express').Router();

const authController = require('./controller');

router.post('/sign-up', authController.signup);
router.post('/login', authController.login);
router.delete('/token', authController.token);

module.exports = router;
