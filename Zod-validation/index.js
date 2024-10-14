const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db')
const bcrypt = require('bcrypt')
const { auth, JWT_SECRET } = require('./auth')

// MongoDB cluster connection string here
mongoose.connect('')

app.use(express.json())

app.post('/signup', async (req, res) => {
    const { email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        await UserModel.create({
            email: email,
            password: hashedPassword
        })
        res.status(200).send({
            message: 'Sign up done'
        })
    } catch (error) {
        res.status(409).send({
            message: 'User already exists'
        })
    }

})

app.post('/signin', async (req, res) => {

})

app.get('/todos', auth, async (req, res) => {

})

app.post('/todo', auth, async (req, res) => {

})

app.listen(3000)