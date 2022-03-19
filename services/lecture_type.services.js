const LectureType = require('../models/lecture_type_model')

async function createNewLectureType(params, callback) {
    LectureType.create({
        name: params.name,
    })
    .then((type) => {
        return callback(null, {message: 'Thêm thành công', lectureType: type})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteLectureType(params, callback) {
    LectureType.deleteOne({_id: params})
    .then((msg) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function getIdLectureTypeByName(params, callback) {
    LectureType.findOne({name: params})
    .then((lecture_type) => {
        return callback(null, {id: lecture_type.id})
    })
    .catch((error) => {
        return callback(error) 
    })
}

module.exports = {
    createNewLectureType,
    deleteLectureType,
    getIdLectureTypeByName,
}
