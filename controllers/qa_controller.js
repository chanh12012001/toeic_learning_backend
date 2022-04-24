const qaService = require('../services/qa.services')
var functions = {
    createQuestionsQAList: (req, res, next) => {
        var file = req.file.path
        
        qaService.createQuestionsQAList(file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 
    getAllQuestionQA: (req, res, next) => {
    
        qaService.getAllQuestionQA( (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 
    getAllQAByKeyWord: (req, res, next) => {
    
        var keyword = req.headers['keyword']; 
        qaService.getAllQAByKeyWord(keyword, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 
}

module.exports = functions 