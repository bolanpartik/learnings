const express = require('express')
const app = express()
let users = []
app.use(express.json())

function generateToken() {

    const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let token = ''
    for (let i = 0; i < 30; i++) {
        token += options[Math.floor(Math.random() * options.length)]
    }
    return token
}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: 'User signed up'
    })

    console.log(users)
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let user = users.find(user => user.username == username && user.password == password)

    if (user) {
        const token = generateToken()
        user.token = token
        res.json({
            token
        })
    } else {
        res.json({
            message: 'Incorrect username or password'
        })
    }

    console.log(users)
})

app.get('/me', (req, res) => {

    const token = req.headers.token

    const user = users.find(user => user.token == token)

    if (user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            message: 'Invalid token'
        })
    }

})

app.listen(3000)