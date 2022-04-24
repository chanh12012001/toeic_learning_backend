const express = require("express");
const routes = require('./routes/user.routes')
const routesAdmin = require('./routes/admin.routes')
const routesLectureType = require('./routes/lecture_type.routes')
const routesTopic = require('./routes/topic.routes')
const routesVideoInfo = require('./routes/video_info.routes')
const routesLesson = require('./routes/lesson.routes')
const routesVocabulary = require('./routes/vocabulary.routes')
const routesQuestionsToeic = require('./routes/question.routes')
const routesExam = require('./routes/exam.routes')
const routesBlog = require('./routes/blog.routes')
const routesTermsOfUse = require('./routes/terms_of_use.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/admin', routesAdmin)
app.use('/admin', routesLectureType)

app.use('/uploads', express.static(__dirname +'/uploads'));
app.use('/', routesTopic)

app.use('/', routesVideoInfo)

app.use('/', routesVideoInfo)

app.use('/', routesLesson)

app.use('/', routesVocabulary)

app.use('/', routesQuestionsToeic)

app.use('/', routesExam)

app.use('/', routesBlog)

app.use('/', routesTermsOfUse)

module.exports = app 