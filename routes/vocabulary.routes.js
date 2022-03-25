const vocabularyController = require('../controllers/vocabulary_controller')
const express = require('express')
const router = express.Router()

router.get("/getAllVocabularies/:id", vocabularyController.getAllvocabularies);

module.exports = router 
