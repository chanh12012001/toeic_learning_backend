const authController = require('../controllers/auth_controller')
const Token = require('../controllers/verify_token')
const express = require('express')
const router = express.Router()
const upload = require("../config/multer.config")

router.post("/otpRegister", authController.otpRegister);

router.post("/verifyOTP", authController.verifyOTP);

router.post('/register', authController.register)

router.post('/login', authController.login)

router.put('/forgotPassword', authController.forgotPassword)

router.get('/logout', authController.logout)

router.get('/get-info', Token.verifyToken ,authController.getInfo)

router.put('/updateAvatar', upload.single("avatar") ,authController.updateAvatar)

router.put('/updateUserInfo' ,authController.updateUserInfo)

module.exports = router