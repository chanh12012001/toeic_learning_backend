CLOUDINARY_CLOUD_NAME='chanhpham'
CLOUDINARY_API_KEY='479611322752383'
CLOUDINARY_API_SECRET='0Nct7F1jtKIlRkhuYQYuXtPGCgA'

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
})

module.exports = cloudinary

