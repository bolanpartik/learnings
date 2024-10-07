const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Something'
let users = []

app.use(express.json())
app.use(express.static('public'))

function auth(req, res, next) {
    const token = req.headers.token;
    if(token){
        const verifyToken = jwt.verify(token, JWT_SECRET)
        if (verifyToken.username) {
            req.username = verifyToken.username
            next()
        } else {
            res.send({
                message: 'You are not signed in'
            })
        }
    }else{
        res.status(401).send({
            message: 'Token missing'
        })
    }
}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.send({
        message: 'Signup done'
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username === username && user.password === password)

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.send({
            token: token
        })
    } else {
        res.send({
            message: 'Invalid username or password'
        })
    }
})

app.get('/me', auth, (req, res) => {

    const foundUser = users.find(user => user.username === req.username)

    res.send({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(3000)