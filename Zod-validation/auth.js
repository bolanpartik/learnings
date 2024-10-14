const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secret'

function auth(req, res, next) {
    const { token } = req.headers
    if (!token) {
        return res.status(401).send({
            message: 'Token required'
        })

    }
    try {
        const verifyData = jwt.verify(token, JWT_SECRET)
        req.userId = verifyData.userId
        next()
    } catch (error) {
        res.status(401).send({
            message: 'Invalid token'
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}