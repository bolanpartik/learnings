const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secret'

function auth(req, res, next) {
    const { token } = req.headers
    if(!token){
        res.send({
            message: 'Token required'
        })
        return
    }
    try{
        const verifyData = jwt.verify(token,JWT_SECRET)
        req.userId = verifyData.userId
        next()
    }catch(error){
        res.send({
            message: 'Invalid token'
        })
    }
}

module.exports={
    auth,
    JWT_SECRET
}