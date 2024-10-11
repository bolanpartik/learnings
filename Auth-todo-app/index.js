const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'jwtsecrethere'

const users = []
app.use(express.json())

function genUserId() {
    const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let id = ''
    for (let i = 0; i < 21; i++) {
        id += options[Math.floor(Math.random() * options.length)]
    }
    return id;
}

function authentication(req, res, next) {
    // authentication using JWT
}

app.post('/signup', (req, res) => {
    // signup user with email pass password
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).send({
            message: 'Username and password must be provided'
        })
    }

    const id = genUserId()
    users.push({
        username: username,
        password: password,
        userId: id,
        todos: []
    })
    res.send({
        message: 'Sign up done'
    })

})

app.post('/signin', (req, res) => {
    // signin user and generate JWT for authentication routes/endpoints
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).send({
            message: 'Username or password must be provided'
        })
    }

    const foundUser = users.find(user => user.username === username && user.password === password)
    if (!foundUser) {
        return res.status(401).send({
            message: 'Username or password incorrect'
        })
    }

    const token = jwt.sign({ username }, JWT_SECRET)
    foundUser.token = token
    res.send({
        message: 'Sign in done',
        token: token
    })
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