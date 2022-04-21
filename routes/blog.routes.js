const blogController = require('../controllers/blog_controller')
const express = require('express')
const upload = require("../config/multer.config")
const router = express.Router()

router.post("/createNewBlog", upload.array("image"), blogController.createNewBlog);

// router.delete("/deleteLectureType/:id", lectureTypeController.deleteLectureType);

router.get("/getAllBlogs", blogController.getAllBlogs);

module.exports = router 
