const videoService = require('../services/video_info.services')

var functions = {

    createNewVideo: async (req, res, next) => {
        var body = req.body
        videoService.createNewVideo(body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            } 
            return res.status(200).json(results);
        });
    },

    getAllVideos: (req, res, next) => {
        var topicId = req.headers['topicid']; 
        videoService.getAllVideos(topicId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }, 

    deleteVideo: (req, res, next) => {
        var videoId = req.params.id; 
        videoService.deleteVideo(videoId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

    updateVideo: (req, res, next) => {
        var videoId = req.params.id; 
        var videoBody = req.body;
        videoService.updateVideo(videoId, videoBody, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions
