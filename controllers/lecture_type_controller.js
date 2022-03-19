const lectureTypeService = require('../services/lecture_type.services')

var functions = {
    createNewLectureType: (req, res, next) => {
        lectureTypeService.createNewLectureType(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

     deleteLectureType: (req, res, next) => {
        var typeId = req.params.id; 
        lectureTypeService.deleteLectureType(typeId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

    getIdLectureTypeByName: (req, res, next) => {
        var nameLecture = req.headers['name']; 
        lectureTypeService.getIdLectureTypeByName(nameLecture, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
}

module.exports = functions
