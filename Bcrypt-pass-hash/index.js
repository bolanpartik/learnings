const express = require('express')
const app = express()
const { UserModel, TodoModel } = require('./db')
const mongoose = require('mongoose')

// MongoDB cluster connection string here
mongoose.connect('')

app.use(express.json())

app.post('/signup', async (req, res) => {

})

app.post('/signin', async (req, res) => {

})

app.get('/todos', async (req, res) => {

})

app.post('/todo', async (req, res) => {

})

app.listen(3000)