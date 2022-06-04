const express = require('express')
const app = express()

require('dotenv').config({path: './.env'})
const PORT = process.env.PORT

const database = require('./src/config/database')


app.use(require('./src/routes/router'))

app.listen(PORT, console.log(`Listening on port: ${PORT}`))