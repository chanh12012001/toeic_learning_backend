const examController = require('../controllers/exam_controller')
const express = require('express')
const router = express.Router()

router.get("/getAllExams", examController.getAllExams);

router.delete("/deleteExam/:id", examController.deleteExam);

module.exports = router 
