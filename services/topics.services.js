const Topic = require('../models/topic_model')
const fs = require('fs')
const cloudinary = require("../config/cloudinary.config")
const { debug } = require('console')

async function createNewTopic(body, file, callback) {   
  
    const result = await cloudinary.uploader.upload(file.path, {folder: "topic-images"})

    let topic = new Topic({
        name: body.name,
        lectureTypeId: body.lectureTypeId,
        image: result.secure_url,
        cloudinaryId: result.public_id,   
    })

    Topic.create(topic)
    .then((topic) => {
        return callback(null, {topic})
    })
    .catch((error) => {
        return callback(error)
    }) 
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
    Topic.findById(params).then((topic) => {
        cloudinary.uploader.destroy(topic.cloudinaryId)
    })
    
    Topic.deleteOne({_id: params})
    .then(() => {
        return callback(null, {message: 'Thao tác thành công'})
    })      
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateTopic(topicId, body, file ,callback) {
    var result;
    if (file != undefined || file != null) {
        result = await cloudinary.uploader.upload(file.path, {folder: "topic-images"})
    }
    Topic.findById(topicId) 
    .then((topic) => {  
        if (file != undefined || file != null) {
            cloudinary.uploader.destroy(topic.cloudinaryId)
            const data = {
                name: body.name || topic.name,
                image: result.secure_url,
                cloudinaryId: result.public_id
            }
            Topic.findByIdAndUpdate(topicId, data, {new: true}).then((topic) => {         
                return callback(null, {message: 'Thao tác thành công', topic})
            })
        } else {
            const data = {
                name: body.name || topic.name,
                image: topic.image,
                cloudinaryId: topic.cloudinaryId,
            }
            Topic.findByIdAndUpdate(topicId, data, {new: true}).then((topic) => {         
                return callback(null, {message: 'Thao tác thành công', topic})
            })
        }
    })
    .catch ((err) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewTopic,
    getAllTopics,
    deleteTopic,
    updateTopic
}
