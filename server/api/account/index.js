const router = require('express').Router();
const accountController = require('./controller');

const upload = require('../../common/cloudinary');

router.patch('/update', upload.single('avatar'), accountController.update);

module.exports = router;
