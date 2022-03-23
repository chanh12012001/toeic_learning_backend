const VideoInfo = require('../models/video_info_model')
const videoId = require('get-video-id')
const scrapeYt = require("scrape-yt");

async function createNewVideo(body, callback) {   
    const videoObj = videoId(body.videoUrl)

    const videoInfo = await  scrapeYt.getVideo(`${videoObj.id}`)
 
    let video = new VideoInfo({
        title: body.title,
        time: videoInfo.duration,
        videoUrl: body.videoUrl,
        thumbnail: videoInfo.thumbnail,
        topicId: body.topicId
    })

    VideoInfo.create(video)
    .then((video) => {
        return callback(null, {video})
    })
    .catch((error) => {
        return callback(error)
    }) 
}

async function getAllVideos(params, callback) {
    VideoInfo.find({topicId: params})
    .then((videos) => {
        return callback(null, {videos})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteVideo(params, callback) {
    VideoInfo.deleteOne({_id: params})
    .then((msg) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateVideo(vidId, videoBody ,callback) {

    const videoObj = videoId(videoBody.videoUrl)

    const videoInfo = await  scrapeYt.getVideo(`${videoObj.id}`)

    VideoInfo.findByIdAndUpdate(vidId, {
        title: videoBody.title,
        time: videoInfo.duration,
        videoUrl: videoBody.videoUrl,
        thumbnail: videoInfo.thumbnail,
    }).then((_) => { 
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}


module.exports = {
    createNewVideo,
    getAllVideos,
    deleteVideo,
    updateVideo
}
