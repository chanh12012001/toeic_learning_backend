const feedbackService = require('../services/feedback.services')

var functions = {

    createNewFeedback: (req, res, next) => {
        var body = req.body
        feedbackService.createNewFeedback(body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllFeedbacks: (req, res, next) => {
        feedbackService.getAllFeedbacks((error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 

    deleteFeedback: (req, res, next) => {
        var feedbackId = req.params.id; 
        feedbackService.deleteFeedback(feedbackId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
    
    updateFeedback: (req, res, next) => {
        var id = req.params.id; 
        feedbackService.updateFeedback(id , (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
       
    }
}

module.exports = functions
