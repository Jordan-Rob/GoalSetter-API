const express = require('express')
const dotenv = require('dotenv').config()
const goalsRouter = require('./routes/goalRoutes')
const userRouter = require('./routes/userRoutes')
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalsRouter)
app.use('/api/users', userRouter)



app.listen(port, () => console.log(`server started on ${port}`))