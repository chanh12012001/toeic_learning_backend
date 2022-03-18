const adminController = require('../controllers/admin_controller')
const Token = require('../controllers/verify_token')
const express = require('express')
const router = express.Router()

router.post('/register', adminController.register)

router.post('/login', adminController.login)

module.exports = router