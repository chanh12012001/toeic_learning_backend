const topicService = require('../services/topics.services')

var functions = {
    createNewLectureType: (req, res, next) => {
        topicService.createNewTopic(req.body, req.file, (error, results) => {
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
        var topicBody = req.body;
        topicService.updateTopic(topicId, topicBody, req.file, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions
