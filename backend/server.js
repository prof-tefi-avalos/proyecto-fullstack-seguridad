const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/authRoutes')
const taskRoutes = require('./routes/tasks')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/taskboard')

app.use('/api/auth', routes)
app.use('/api/tasks', taskRoutes)

app.listen(5001, () => console.log('Corriendo en 5001'))