const bcryptjs = require("bcryptjs");
const adminService = require("../services/admins.services")
 
var functions = {

    register: (req, res, next) => {
        const { password } = req.body
        const salt = bcryptjs.genSaltSync(10)
        
        req.body.password = bcryptjs.hashSync(password, salt)
        
        adminService.register(req.body, (error, result) => {
            if (error) {
                return res.json(error)
            }
            return res.status(200).json(result)
        }) 
    },

    login: (req, res, next) => {
        const { username, password } = req.body
    
        adminService.login({username, password}, (error, result) => {
            if (error) {
                return res.status(404).json(error)
            }
            return res.status(200).json(result) 
        })
    },
}

module.exports = functions

