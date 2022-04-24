const termsOfUseService = require('../services/terms_of_user.services')

var functions = {

    createTermsOfUse: (req, res, next) => {
        var content = req.body.content
        termsOfUseService.createTermsOfUse(content, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getTermsOfUse: (req, res, next) => {
        termsOfUseService.getTermsOfUse((error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 
    
    updateTermsOfUse: (req, res, next) => {
        var id = req.params.id; 
        var body = req.body
        termsOfUseService.updateTermsOfUse(id, body , (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
       
    }
}

module.exports = functions
