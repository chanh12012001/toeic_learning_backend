const topicController = require('../controllers/topic_controller')
const express = require('express')
const router = express.Router()

const multer=require('multer')

var storage = multer.diskStorage({    
    destination: function (req, file, callback) {      
        callback(null, 'uploads')    
    },        
    filename: function (req, file, callback) {      
        callback(null, new Date().toISOString()+file.originalname)    
    }  
})

var upload = multer({ storage: storage })

router.post("/createNewTopic",  upload.single('image'), topicController.createNewLectureType);

module.exports = router 
