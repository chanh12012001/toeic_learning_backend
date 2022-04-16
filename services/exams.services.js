const Exam = require('../models/exam_model')
const Question = require('../models/question_model')


async function getAllExams(callback) {
    Exam.find({}).sort({'exam': 1})
    .then((exams) => {
        return callback(null, {exams})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteExam(id, callback) {
    const exam = await Exam.findOne({_id: id});

    Exam.deleteOne({_id: id})
    .then(() => {  
        Question.deleteMany({examId: exam.exam}).then((_) => {     
            return callback(null, {message: 'Thao tác thành công'})
        })    
    })      
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    getAllExams,
    deleteExam,
}
