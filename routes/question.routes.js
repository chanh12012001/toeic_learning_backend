const questionController = require('../controllers/question_controller')
const express = require('express')
const router = express.Router()
const upload = require("../config/multer.config")

router.post("/createQuestionsToeicList", upload.single("questions"), questionController.createQuestionsToeicList);

router.get("/getAllQuestionsByExamId", questionController.getAllQuestionsByExamId);

router.get("/getAllQuestionsByPartOfExamId", questionController.getAllQuestionsByPartOfExamId);

module.exports = router 
