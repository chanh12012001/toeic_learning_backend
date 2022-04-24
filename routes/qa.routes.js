const qaController = require('../controllers/qa_controller')
const express = require('express')
const router = express.Router()
const upload = require("../config/multer.config")

router.post("/createQuestionsQAList", upload.single("qas"), qaController.createQuestionsQAList);
router.get("/getAllQuestionQA", qaController.getAllQuestionQA);
router.get("/getAllQAByKeyWord", qaController.getAllQAByKeyWord);


module.exports = router 