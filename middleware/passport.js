const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('config')
const User = require('../models/user')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.get('jwtSecret')
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select('email id')
                if(user){
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (error) {
                console.log(`Error passport: ${error}`)
            }
        })
    )
}
