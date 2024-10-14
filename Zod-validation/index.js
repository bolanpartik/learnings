const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { UserModel, TodoModel } = require('./db')
const bcrypt = require('bcrypt')
const { auth, JWT_SECRET } = require('./auth')
const { z } = require('zod')

// MongoDB cluster connection string here
mongoose.connect('')

app.use(express.json())

// Email validation
const emailValidation = z.string()
    .email('Not a valid email format')
    .min(10, 'email should contain more than 10 characters')
    .max(50, 'max length reached')

// Password validation
const passwordValidation = z.string()
    .min(8, 'Password must contain at least 8 characters')
    .max(50, 'Max length reached')
    .regex(/^(?=.*[0-9])/, 'assword must contain one digit')
    .regex(/^(?=.*[a-z])/, 'Password must contain one lowercase char')
    .regex(/^(?=.*[A-Z])/, 'Password must contain one uppercase char')
    .regex(/^(?=.*\W)/, 'Password must contain one special char')
    .regex(/^(?!.*\s)/, 'Password should not contain space')

// Validation schema
const userValidationSchema = z.object({
    email: emailValidation,
    password: passwordValidation
})

app.post('/signup', async (req, res) => {
    const { success, error } = userValidationSchema.safeParse(req.body)

    if (error) {
        return res.status(400).send({
            message: error.issues.map(issue => issue.message).join(', ')
        })

    }
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