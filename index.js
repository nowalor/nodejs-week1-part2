const express = require("express")

const app = express()

app.use('', require('./router.js'))

app.listen('5002')