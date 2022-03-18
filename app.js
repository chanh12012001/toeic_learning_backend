const express = require("express");
const routes = require('./routes/user.routes')
const routesAdmin = require('./routes/admin.routes')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use('/admin', routesAdmin)

module.exports = app