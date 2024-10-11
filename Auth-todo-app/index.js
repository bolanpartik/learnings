const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'jwtsecrethere'

const users = []
app.use(express.json())

function authentication(req, res, next) {
    // authentication using JWT
}

app.post('/signup', (req, res) => {
    // signup user with email pass password

})

app.post('/signin', (req, res) => {
    // signin user and generate JWT for authentication routes/endpoints
})

app.get('/todos', authentication, (req, res) => {
    // show all todos of that specific user
})

app.post('/create', authentication, (req, res) => {
    // create todo with give details
})

app.post('/update', authentication, (req, res) => {
    // find existing todo and update them using todoId
})

app.listen(3000)