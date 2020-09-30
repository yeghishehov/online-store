const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.body.token

        if (!token) {
            return res.status(401).json({ message: "Not token"})
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        res.status(401).json({ message: " Error: Not authorized"})
    }
}