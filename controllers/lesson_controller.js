const lessonData = require('../assets/lessons.json')

var functions = {

    getAllLessons: (req, res, next) => {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(lessonData));
    }, 
}

module.exports = functions
