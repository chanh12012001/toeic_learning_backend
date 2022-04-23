const qaService = require('../services/qa.services')
var functions = {
    createQuestionsQAList: (req, res, next) => {
        var file = req.file.path
        
        qaService.createQuestionsToeicList(file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 
    getAllQuestionQA: (req, res, next) => {
        var file = req.file.path
        
        qaService.getAllQuestionQA(file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 
}

module.exports = functions 