const feedbackController = require('../controllers/feedback_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewFeedback", feedbackController.createNewFeedback);

router.get("/getAllFeedbacks", feedbackController.getAllFeedbacks);

router.delete("/deleteFeedback/:id", feedbackController.deleteFeedback);

router.put("/updateFeedback/:id", feedbackController.updateFeedback);

module.exports = router 
