const lectureTypeController = require('../controllers/lecture_type_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewLectureType", lectureTypeController.createNewLectureType);

router.delete("/deleteLectureType/:id", lectureTypeController.deleteLectureType);

module.exports = router 
