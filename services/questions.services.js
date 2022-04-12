const Question = require('../models/question_model')
const xlsx = require('xlsx')

async function createQuestionsToeicList(file, callback) {   
  
    var readFile = xlsx.readFile(file)
    var sheets = readFile.SheetNames
        
    var x = 0;
    sheets.forEach(element => {
        var xlData = xlsx.utils.sheet_to_json(readFile.Sheets[sheets[x]])
        Question.insertMany(xlData)
        .then(questions => {
            return callback(null, {questions})
        })
        .catch(error => {
            return callback(error)
        })
        x++;
    })
}

async function getAllQuestionsByExamId(params, callback) {
    Question.find({examId: params})
    .then((questions) => {
        return callback(null, {questions})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllQuestionsByPartOfExamId(examId, part, callback) {
    Question.find({examId: examId, part: part})
    .then((questions) => {
        return callback(null, {questions})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllQuestionsByQuestionGroupByExamId(examId, groupQuestion, callback) {
    Question.find({examId: examId, groupQuestion: groupQuestion})
    .then((questions) => {
        return callback(null, {questions})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    createQuestionsToeicList,
    getAllQuestionsByExamId,
    getAllQuestionsByPartOfExamId,
    getAllQuestionsByQuestionGroupByExamId,
}
