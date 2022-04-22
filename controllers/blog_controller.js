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

    deleteBlog: (req, res, next) => {
        var blogId = req.params.id; 
        blogService.deleteBlog(blogId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

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
