const Topic = require('../models/topic_model')

async function createNewTopic(body, file, callback) {   
    if (!file) {      
        const error = new Error('Please upload a file')     
        error.httpStatusCode = 400      
        return next("hey error")    
    }   
    Topic.create({
        name: body.name,
        lectureTypeId: body.lectureTypeId,   
        image: file.path   
    })
    .then((data) => {
        return callback(null, {message: 'Thêm thành công', topic: data})

    }).catch((err) => {
        return callback(error)
    });
}

module.exports = {
    createNewTopic
}
