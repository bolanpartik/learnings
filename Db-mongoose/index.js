const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'JwtSecretHere'
const { UserModel, TodoModel } = require('./db')
const mongoose = require('mongoose')
// Mongodb connection string
mongoose.connect('')
app.use(express.json())

app.post('/signup', async (req, res) => {

})

app.post('/signin', async (req, res) => {
 
})

function auth(req, res, next) {
    
}
app.get('/todos', auth, async (req, res) => {

})

app.post('/todo', auth, async (req, res) => {

})

app.listen(3000)