const scoreService = require('../services/score.services')

var functions = {

    addNewScore: (req, res, next) => {
        var body = req.body
        scoreService.addNewScore(body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getScoreByExamIdAndPart: (req, res, next) => {
        var examId = req.params.examid; 
        var part = req.headers['part']; 
        scoreService.getScoreByExamIdAndPart(examId,part,(error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 
}
module.exports = functions