const express=require('express')
const app=express()
const cors = require('cors')
const parser = require('body-parser')
app.use(parser.json())
app.use(cors())

app.use('/signup', require('../middlewares/UserSignup'))
app.use('/login', require('../middlewares/UserLogin'))

module.exports = app;