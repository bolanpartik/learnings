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
    const { email, password } = req.body
    try {
        await UserModel.create({
            email: email,
            password: password
        })
        res.send({
            message: 'Sign up done'
        })
    } catch (error) {
        res.send({
            message: 'User already signed up'
        })
    }
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET)
        res.send({
            message: 'Sign in successful',
            token: token
        })
    } else {
        res.send({
            message: 'Incorrect credentials'
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.send({
            message: 'Please provide token'
        })
        return
    }

    try {
        const verifyToken = jwt.verify(token, JWT_SECRET)
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId

    const user = await UserModel.findOne({
        _id: userId
    })

    if (user) {
        const todos = await TodoModel.find({
            userId: user._id
        })
        res.send({ todos })
    } else {
        res.send({
            message: 'User not found'
        })
    }
})

app.post('/todo', auth, async (req, res) => {
    const userId = req.userId
    const { title, isDone } = req.body
    const user = await UserModel.find({
        _id: userId
    })
    if (user) {
        await TodoModel.create({
            title,
            isDone,
            userId
        })
        res.send({
            message: 'Todo created successfully'
        })
    } else {
        res.send({
            message: 'User not found'
        })
    }
})

app.listen(3000)