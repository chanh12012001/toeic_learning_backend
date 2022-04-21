const Blog = require('../models/blog_model')
const Image = require('../models/image_blog_model')
const cloudinary = require("../config/cloudinary.config")
const fs = require('fs')

async function createNewBlog(body, files, callback) {

    Blog.create({
        createdAt: Date.now(),
        title: body.title,
        content: body.content,
        images: []
    })
    .then(async (blog) => {
        const uploader = async (path) => await cloudinary.uploader.upload(path, {folder: "blog"})
        const imagesArr = [];
        for (const file of files) {
            const { path } = file 
         
            const newPath = await uploader(path)
                    
            const image = Image({         
                imageUrl: newPath.secure_url,
                cloudinaryId: newPath.public_id,   
            })
    
            imagesArr.push(image)
        
            fs.unlinkSync(path)
        }
        Blog.findByIdAndUpdate(blog.id, {images: imagesArr}).then((blog1) => {
            return callback(null, {message: 'Thêm thành công', blog: blog1})
        })
    })
    .catch((error) => {
        return callback(error)
    })
}

// async function deleteLectureType(params, callback) {
//     LectureType.deleteOne({_id: params})
//     .then((msg) => {
//         return callback(null, {message: 'Thao tác thành công'})
//     })
//     .catch((error) => {
//         return callback({message: 'Lỗi. Vui lòng thử lại!'})
//     })
// }

async function getAllBlogs(callback) {
    Blog.find({})
    .then((blogs) => {
        return callback(null, {blogs: blogs})
    })
    .catch((error) => {
        return callback(error) 
    })
}

module.exports = {
    createNewBlog,
    getAllBlogs,
}
