const questionService = require('../services/questions.services')

var functions = {
    createQuestionsToeicList: (req, res, next) => {
        var file = req.file.path
        
        questionService.createQuestionsToeicList(file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 

    getAllQuestionsByExamId: (req, res, next) => {
        var examId = req.headers['examid']; 
        questionService.getAllQuestionsByExamId(examId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllQuestionsByPartOfExamId: (req, res, next) => {
        var examId = req.headers['examid']; 
        var part = req.headers['part']; 
        questionService.getAllQuestionsByPartOfExamId(examId, part, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
    
}

module.exports = functions 