const Exam = require('../models/exam_model');
const examService = require('../services/exams.services')

var functions = {
    getAllExams: (req, res, next) => {
        examService.getAllExams( (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 

    deleteExam: (req, res, next) => {
        var examId = req.params.id; 
        examService.deleteExam(examId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
}

module.exports = functions
