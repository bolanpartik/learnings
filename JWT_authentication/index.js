const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Something'
let users = []

app.use(express.json())

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

    const user = users.find(user => user.username == username && user.password == password)

    if (user) {
        const jwtToken = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.send({
            jwtToken
        })
    } else {
        res.send({
            message: 'Invalid username or password'
        })
    }
})

app.get('/me', (req, res) => {
    const token = req.headers.authorization

    if (token) {
        const userDetails = jwt.verify(token, JWT_SECRET)
        const username = userDetails.username
        const user = users.find(user => user.username == username)

        if (user) {
            res.send({
                username: user.username,
                password: user.password
            })
        } else {
            res.send({
                message: 'Invalid token'
            })
        }
    } else {
        res.send({
            message: 'JWT must be provided'
        })
    }
})

app.listen(3000)