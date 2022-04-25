const vocabularyController = require('../controllers/vocabulary_controller')
const express = require('express')
const router = express.Router()
const upload = require("../config/multer.config")

router.post("/createVocabulariesList", upload.single("vocabularies"), vocabularyController.createVocabulariesList);

router.get("/getAllVocabularies/:id", vocabularyController.getAllvocabularies);

module.exports = router 
