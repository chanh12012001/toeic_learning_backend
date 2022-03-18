const topicService = require('../services/topics.services')
     
// app.get('/image',async(req, res)=>{   
//     const image = await model.find()   
//     res.json(image)     
// })

var functions = {
    createNewLectureType: (req, res, next) => {

        topicService.createNewTopic(req.body, req.file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results); 
        });
    },
}

module.exports = functions
