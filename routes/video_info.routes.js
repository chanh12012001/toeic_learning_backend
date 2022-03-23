const videoController = require('../controllers/video_info_controller')
const express = require('express')
const router = express.Router()

router.post("/createNewVideo", videoController.createNewVideo);

router.get("/getAllVideos", videoController.getAllVideos);

router.delete("/deleteVideo/:id", videoController.deleteVideo);

router.put("/updateVideo/:id", videoController.updateVideo);

module.exports = router 
