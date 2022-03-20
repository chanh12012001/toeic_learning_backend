const Topic = require('../models/topic_model')
const fs = require('fs')
  
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

async function getAllTopics(params, callback) {
    Topic.find({lectureTypeId: params})
    .then((topics) => {
        return callback(null, {topics})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteTopic(params, callback) {
    Topic.findOne({_id: params})
    .then((topic) => {
        Topic.deleteOne({_id: topic._id}).then(() =>{})
        fs.unlink(topic.image, (err) => {
            if (err) {
              console.error(err)
              return
            }
        })
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateTopic(paramsId, topicBody, file ,callback) {
    
    if (file != null) {
        Topic.findOne({_id: paramsId}).then((topic) => {
            fs.unlink(topic.image, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
            })
        })
        Topic.findByIdAndUpdate(paramsId, {
            name: topicBody.name,
            image: file.path
        }).then((topic) => {
            return callback(null, {message: 'Thao tác thành công'})
        })
        .catch((_) => {
            return callback({message: 'Lỗi. Vui lòng thử lại!'})
        })
    } else {
        Topic.findByIdAndUpdate(paramsId, {
            name: topicBody.name,
        }).then((topic) => {
            return callback(null, {message: 'Thao tác thành công'})
        })
        .catch((_) => {
            return callback({message: 'Lỗi. Vui lòng thử lại!'})
        })
    }
    
}

module.exports = {
    createNewTopic,
    getAllTopics,
    deleteTopic,
    updateTopic
}
