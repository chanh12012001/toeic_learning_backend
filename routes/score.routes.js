const scoreController = require('../controllers/score_controller')
const express = require('express')
const router = express.Router()

router.post("/addNewScore", scoreController.addNewScore);
router.get("/getScoreByExamIdAndPart/:examid", scoreController.getScoreByExamIdAndPart);

module.exports = router 
