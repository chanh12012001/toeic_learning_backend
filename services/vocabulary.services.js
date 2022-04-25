const Vocabulary = require('../models/vocabulary_model')
const Exam = require('../models/exam_model')

const xlsx = require('xlsx')

async function createVocabulariesList(file, callback) {   

    Vocabulary.deleteMany({}).then(_ => {
        console.log('removed all record')
    })
  
    var readFile = xlsx.readFile(file)
    var sheets = readFile.SheetNames
        
    var x = 0;
    sheets.forEach(element => {
        var xlData = xlsx.utils.sheet_to_json(readFile.Sheets[sheets[x]])
        Vocabulary.insertMany(xlData)
        .then(vocabularies => {
            return callback(null, {vocabularies})
        })
        .catch(error => {
            return callback(error)
        })
        x++;
    })
}

async function getAllVocabularies(lessionId, callback) {
    Vocabulary.find({lessonId: lessionId})
    .then((vocabularies) => {
        return callback(null, {vocabularies})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    createVocabulariesList,
    getAllVocabularies,
}
