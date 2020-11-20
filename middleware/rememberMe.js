const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('config')


const checkRemember = (req, res, next) => {
    if(req.cookies.remember_me) {
        jwt.verify(req.cookies.remember_me, config.get('cookieSecret'), async (err, verifiedJwt) => {
            if (err) {
                res.clearCookie('remember_me')
                next()
            }

            // const user = await User.findById(verifiedJwt.userId)
            // console.log(req.headers.authorization.split(' ')[1])


            const token = jwt.sign(
                { userId: verifiedJwt.userId },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )
            
            req.headers.authorization = `Bearer ${token}`

            const rememberToken = jwt.sign({ userId: verifiedJwt.userId }, config.get('cookieSecret'))
            res.cookie('remember_me', rememberToken, { maxAge: 3 * 24 * 60 * 60 * 1000 })
            User.findByIdAndUpdate({ _id : verifiedJwt.userId  }, { token: rememberToken}, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('user token updated')
                }
            })
            next()
          })
    }
    next()
}

module.exports = checkRemember