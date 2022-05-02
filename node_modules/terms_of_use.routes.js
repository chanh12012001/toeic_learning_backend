const termsOfUseController = require('../controllers/terms_of_use_controller')
const express = require('express')
const router = express.Router()

router.post("/createTermsOfUse", termsOfUseController.createTermsOfUse);

router.get("/getTermsOfUse", termsOfUseController.getTermsOfUse);

router.put("/updateTermsOfUse/:id", termsOfUseController.updateTermsOfUse);

module.exports = router 
