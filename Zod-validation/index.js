const express = require('express')
const app = express()
const mongoose = require('mongoose')

// MongoDB cluster connection string here
mongoose.connect('')

app.use(express.json())

app.post('/signup', async (req, res) => {

})

app.post('/signin', async (req, res) => {

})

app.get('/todos', auth, async (req, res) => {

})

app.post('/todo', auth, async (req, res) => {

})

app.listen(3000)