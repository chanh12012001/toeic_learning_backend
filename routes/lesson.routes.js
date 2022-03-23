const lessonController = require('../controllers/lesson_controller')
const express = require('express')
const router = express.Router()

router.get("/getAllLessons", lessonController.getAllLessons);

module.exports = router 
