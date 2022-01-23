const router = require('express').Router();

const authController = require('./controller');

router.post('/login', authController.login);
router.patch('/token', authController.token);
router.post('/sign-up', authController.signup);
router.post('/:resetToken', authController.resetPassword);
router.post('/forget-password', authController.forgetPassword);

module.exports = router;
