const wordsData = require('../assets/vocabularies.json')
var fs = require('fs');

var functions = {

    getAllvocabularies: (req, res, next) => {
        var id = req.params.id; 
        var lib = JSON.parse(fs.readFileSync('assets/vocabularies.json', 'utf8'));
        var words = lib.vocabularies

        var arrayFound = words.filter(function(word) {
            return word.lessonId == id;
        })
            
        // find user from users using .find method        
        res.send(arrayFound)
        
        
    }
}
module.exports = functions
