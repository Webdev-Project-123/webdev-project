const multer = require('multer');

const {
  CloudinaryStorage,
} = require('multer-storage-cloudinary');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dfhbhw84b',
  api_key: '875565733773493',
  api_secret: 'wQzQClmC5-co-fbztBKFL2d0aJM',
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'DEV',
  },
});

const upload = multer({ storage });

module.exports = upload;
