const Admin = require('../models/admin_model')
const bcrypt = require('bcryptjs')
const tokenController = require('../controllers/verify_token')

async function register(params, callback) {
    
        Admin.create({
            username: params.username,
            password: params.password    
        })
        .then((data) => {
            const token = tokenController.generateAccessToken(data._id)
            return callback(null, {auth: true, token})
        })
        .catch((error) => {
            return callback(error)
        })
}

async function login({username, password}, callback) {
    const admin = await Admin.findOne({username});

    if (admin != null) {
        if (bcrypt.compareSync(password, admin.password)) {
            const token = tokenController.generateAccessToken(admin._id)
            return callback(null, {...admin.toJSON(), token})
        }
        else {
            return callback({
                auth: false,
                token: null
            })
        }
    } else {
        return callback({
            message: 'The phone doesn`t exist'
        })
    }
}

module.exports = {
    register,
    login,
}