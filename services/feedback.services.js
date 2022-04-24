const Feedback = require('../models/feedback_model')

async function createNewFeedback(body, callback) {   
  
    let feedback = new Feedback({
        createAt: Date.now(),
        content: body.content,
        userId: body.userId,
        state: false
    })

    Feedback.create(feedback)
    .then((feedback) => {
        return callback(null, {feedback})
    })
    .catch((error) => {
        return callback(error)
    }) 
}

async function getAllFeedbacks(callback) {
    Feedback.find().sort({'createAt': -1})
    .then((feedbacks) => {
        return callback(null, {feedbacks})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteFeedback(id, callback) {
    Feedback.deleteOne({_id: id})
    .then(() => {
        return callback(null, {message: 'Thao tác thành công'})
    })      
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}


async function updateFeedback(id ,callback) {
 
    Feedback.findByIdAndUpdate(id, {
        state: true
    }).then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewFeedback,
    getAllFeedbacks,
    deleteFeedback,
    updateFeedback,
}
