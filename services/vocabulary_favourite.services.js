const VocabularyFavourite = require('../models/vocabulary_favourite_model')

async function createNewVocabularyFavourite(vocaId, userId, callback) {   
    VocabularyFavourite.create({
        vocabularyId: vocaId,
        userId: userId
    })
    .then((vocabularyFavourite) => {
        return callback(null, {vocabularyFavourite})
    })
    .catch((error) => {
        return callback(error)
    }) 
}

async function getAllVocabularyFavourites(userId, callback) {
    VocabularyFavourite.aggregate([
        { "$addFields": { "vocabularyId": { "$toString": "$_id" }}},
        { "$lookup": {
          "from": "vocabularies",
          "localField": "vocabularyId",
          "foreignField": "vocabularyId",
          "as": "output"
        }}
      ])
    .then((vocabularies) => {
        return callback(null, {vocabularies})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteVocabularyFavourite(id, callback) {
    VocabularyFavourite.deleteOne({_id: id})
    .then((msg) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewVocabularyFavourite,
    deleteVocabularyFavourite,
    getAllVocabularyFavourites,
}
