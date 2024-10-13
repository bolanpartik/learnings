const express = require('express')
const app = express()
const { UserModel, TodoModel } = require('./db')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

})

app.get('/todos', async (req, res) => {

})

app.post('/todo', async (req, res) => {

})

app.listen(3000)