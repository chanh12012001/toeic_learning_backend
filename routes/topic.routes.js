const topicController = require('../controllers/topic_controller')
const express = require('express')
const upload = require("../config/multer.config")
const router = express.Router()

router.post("/createNewTopic", upload.single("image"), topicController.createNewTopic);

router.get("/getAllTopics", topicController.getAllTopics);

router.delete("/deleteTopic/:id", topicController.deleteTopic);

router.put("/updateTopic/:id", upload.single('image'), topicController.updateTopic);

module.exports = router 
