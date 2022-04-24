const TermsOfUse = require('../models/term_of_use_model')

async function createTermsOfUse(content, callback) {   
  
    let termsOfUse = new TermsOfUse({
        content: content,
    })

    TermsOfUse.create(termsOfUse)
    .then((termsOfUse) => {
        return callback(null, {termsOfUse})
    })
    .catch((error) => {
        return callback(error)
    }) 
}

async function getTermsOfUse(callback) {
    TermsOfUse.findOne()
    .then((termsOfUse) => {
        return callback(null, {termsOfUse})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function updateTermsOfUse(id, body ,callback) {
 
    const data = {
        content: body.content,
    }
    TermsOfUse.findByIdAndUpdate(id, data, {new: true})
    .then((termsOfUse) => {         
        return callback(null, {message: 'Thao tác thành công', termsOfUse})
    })
    .catch ((err) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createTermsOfUse,
    getTermsOfUse,
    updateTermsOfUse,
}
