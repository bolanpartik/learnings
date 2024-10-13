const express = require('express')
const app = express()
const { UserModel, TodoModel } = require('./db')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { auth, JWT_SECRET } = require('./auth')

// MongoDB cluster connection string here
mongoose.connect('')

app.use(express.json())

app.post('/signup', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.send({
            message: 'Please provide email and password'
        })
        return
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 7)
        await UserModel.create({
            email: email,
            password: hashedPassword
        })
        res.send({
            message: 'Sign up done'
        })
    } catch (error) {
        res.send({
            message: 'User already exists'
        })
    }
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.send({
            message: 'Please provide email and password'
        })
        return
    }
    const user = await UserModel.findOne({
        email: email,
    })

    const matchPass = await bcrypt.compare(password, user.password)

    if (matchPass) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET)
        res.send({
            message: 'Sign in done',
            token
        })
    } else {
        res.send({
            message: 'Incorrect credentials'
        })
    }
})

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId
    try {
        const todos = await TodoModel.find({
            userId
        })
        res.send({
            todos
        })
    } catch (error) {
        res.send({
            message: error.message
        })
    }
})

app.post('/todo', auth, async (req, res) => {

})

app.listen(3000)