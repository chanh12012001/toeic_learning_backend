const express = require("express");
const routes = require('./routes/user.routes')
const routesAdmin = require('./routes/admin.routes')
const routesLectureType = require('./routes/lecture_type.routes')
const routesTopic = require('./routes/topic.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/admin', routesAdmin)
app.use('/admin', routesLectureType)

app.use('/uploads', express.static(__dirname +'/uploads'));
app.use('/', routesTopic)


module.exports = app 