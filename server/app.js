const express = require('express')
const cors = require('cors')

const app = express()

const entryRouter = require('./routers/entries')

//Middleware
app.use(cors())
app.use(express.json())

app.use('/entries', entryRouter)

module.exports = app