const Score = require('../models/score_model')

async function addNewScore(body, callback) {   
  
    let score = new Score({
        scoreRecord: body.scoreRecord,
        examId: body.examId,
        part: body.part,
        userId: body.userId,
    })

    Score.create(score)
    .then((score) => {
        return callback(null, {score})
    })
    .catch((error) => {
        return callback(error)
    }) 
}
async function getScoreByExamIdAndPart(examId, part, callback) {
    Score.find({examId: examId, part: part})
    .then((scores) => {
        return callback(null, {scores})
    })
    .catch((error) => {
        return callback(error)
    })
}
module.exports = {
    addNewScore,
    getScoreByExamIdAndPart,
}