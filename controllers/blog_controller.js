const blogService = require('../services/blogs.services')

var functions = {
    createNewBlog: (req, res, next) => {
        const body = req.body
        const files= req.files

        blogService.createNewBlog(body, files, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    // deleteLectureType: (req, res, next) => {
    //     var typeId = req.params.id; 
    //     lectureTypeService.deleteLectureType(typeId, (error, results) => {
    //         if (error) {
    //             return res.status(500).json(error);
    //         }
    //         return res.status(200).json(results);
    //     });
    // },

    getAllBlogs: (req, res, next) => {
        blogService.getAllBlogs((error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
}

module.exports = functions
