const router = require('express').Router();

const uploadController = require('./controller');

const upload = require('../../common/cloudinary');
const authorize = require('../../common/authorization');

router.use(authorize.isAdmin);
router.get('/', uploadController.view);
router.delete('/delete', uploadController.delete);
router.post('/add', upload.single('productImage'), uploadController.add);

module.exports = router;
