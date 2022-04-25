const wordsData = require('../assets/vocabularies.json')
var fs = require('fs');
const vocabularyService = require('../services/vocabulary.services')

var functions = {

    createVocabulariesList: (req, res, next) => {
        var file = req.file.path
        
        vocabularyService.createVocabulariesList(file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        })
    }, 

    // getAllvocabularies: (req, res, next) => {
    //     var id = req.params.id; 
    //     var lib = JSON.parse(fs.readFileSync('assets/vocabularies.json', 'utf8'));
    //     var words = lib.vocabularies

    //     var arrayFound = words.filter(function(word) {
    //         return word.lessonId == id;
    //     })
            
    //     // find user from users using .find method        
    //     res.send(arrayFound)    
    // }

    getAllvocabularies: (req, res, next) => {
        var id = req.params.id; 
        vocabularyService.getAllVocabularies(id, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
}
module.exports = functions
