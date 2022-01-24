const router = require('express').Router();
const accountController = require('./controller');

const upload = require('../../common/cloudinary');

router.patch('/update', upload.single('avatar'), accountController.update);
router.get('/profile', accountController.profile);

module.exports = router;
