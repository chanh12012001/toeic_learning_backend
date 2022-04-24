const QA = require('../models/qa_model')

const xlsx = require('xlsx')

async function createQuestionsQAList(file, callback) {   
  
    var readFile = xlsx.readFile(file)
    var sheets = readFile.SheetNames
        
    var x = 0;
    sheets.forEach(element => {
        var xlData = xlsx.utils.sheet_to_json(readFile.Sheets[sheets[x]])
        QA.insertMany(xlData)
        .then(qa => {
                return callback(null, {qa}) 
        })
        .catch(error => {
            return callback(error)
        })
        x++;
    })
}

async function getAllQuestionQA(callback) {
    QA.find({}).sort({'qas': 1})
    .then((qas) => {
        return callback(null, {qas})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllQAByKeyWord(params, callback) {
    QA.find({keyword: params})
    .then((qas) => {
        return callback(null, {qas})
    })
    .catch((error) => {
        return callback(error)
    })
}
module.exports = {
    createQuestionsQAList,
    getAllQuestionQA,
    getAllQAByKeyWord,
}