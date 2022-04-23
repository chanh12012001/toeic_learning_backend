const qaController = require('../controllers/qa_controller')
const express = require('express')
const router = express.Router()
router.post("/createQuestionsQAList", upload.single("qa"), qaController.createQuestionsQAList);
router.get("/getAllQuestionQA", qaController.getAllQuestionQA);


module.exports = router 