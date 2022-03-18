const jwt = require("jsonwebtoken");
const config = require('../config/db.config');

var functions = {
    verifyToken: (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null) {
            return res.sendStatus(401).send({ auth: false, message: 'No token provided' })
        }
    
        jwt.verify(token, config.secret, (err, user) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.id = user.id
            return next()
        })
    },

    generateAccessToken: (id) => {
        return jwt.sign({id: id}, config.secret, {
            expiresIn: '1h'
        }) 
    }
}

module.exports = functions