const express = require('express')
const dotenv = require('dotenv').config()
const goalsRouter = require('./routes/goalRoutes')

const port = process.env.PORT || 5000
const app = express()


app.use('/api/goals', goalsRouter)


app.listen(port, () => console.log(`server started on ${port}`))