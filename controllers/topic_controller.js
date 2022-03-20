const Topic = require('../models/topic_model');
const topicService = require('../services/topics.services')
const cloudinary = require("../config/cloudinary.config")
const path = require('path')

var functions = {

    createNewTopic: async (req, res, next) => {
        var body = req.body
        var file = req.file
        topicService.createNewTopic(body, file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllTopics: (req, res, next) => {
        var lectureTypeId = req.headers['lecturetypeid']; 
        topicService.getAllTopics(lectureTypeId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 

    deleteTopic: (req, res, next) => {
        var topicId = req.params.id; 
        topicService.deleteTopic(topicId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
    
    updateTopic: (req, res, next) => {
        var topicId = req.params.id; 
        var body = req.body
        var file = req.file
        topicService.updateTopic(topicId, body, file, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
       
    }
}

module.exports = functions
