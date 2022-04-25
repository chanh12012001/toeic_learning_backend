const bcryptjs = require("bcryptjs");
const userService = require("../services/users.services")

var phoneNumber = null
 
var functions = {
    otpRegister: (req, res, next) => {
        userService.createNewOTP(req.body, (error, results) => {
          if (error) {
            return res.status(406).json(error);
          }
          return res.status(200).send({
            message: "Success",
            data: results,
          });
        });
    },
      
    verifyOTP: (req, res, next) => {
        userService.verifyOTP(req.body, (error, results) => {
          if (error) {
            return res.status(400).json(error);
          } else {
              phoneNumber = req.body.phone
              res.json({message: 'success'})
          }
        });
    },

    register: (req, res, next) => {
        if (phoneNumber === null) {
            return res.status(400).json({message: "Unverified phone number"})
        } else {
            const { password } = req.body
            const salt = bcryptjs.genSaltSync(10)
        
            req.body.password = bcryptjs.hashSync(password, salt)
        
            userService.register(req.body, phoneNumber, (error, result) => {
                if (error) {
                    return res.json(error)
                }
                phoneNumber = null;
                return res.status(200).json(result)
            }) 
        }   
    },

    login: (req, res, next) => {
        const { phoneNumber, password } = req.body
    
        userService.login({phoneNumber, password}, (error, result) => {
            if (error) {
                return res.status(404).json(error)
            }
            return res.status(200).json(result) 
        })
    },

    forgotPassword: (req, res, next) => {
        const { phoneNumber } = req.body
    
        userService.forgotPassword(phoneNumber, (error, result) => {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json(result) 
        })
    },

    logout: (req, res) => {
        res.status(200).send({ auth: false, token: null })
    },

    getInfo: (req, res, next) => {  
        return res.send({id: req.id})
    },

    updateAvatar: (req, res, next) => {
        var {userId} = req.body; 
        var file = req.file
        userService.updateAvatar(userId, file, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
       
    },

    updateUserInfo: (req, res, next) => {
        var body = req.body; 
        userService.updateUserInfo(body, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
       
    }
}

module.exports = functions

