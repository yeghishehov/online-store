const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('config')
const User = require('../models/user')

const jwtStrategyHeaderBearer = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.get('jwtSecret')
    },
    async (payload, done) => {
        try {
            const user = await User.findById(payload.userId).select('id email firstName lastName')
            if(user){
                done(null, user)
            } else {
                done(null, false)
            }
        } catch (error) {
            console.log(`Error passport: ${error}`)
        }
    }  
)

// passport.use(jwtStrategyHeaderBearer)

module.exports = passport => {
    passport.use(jwtStrategyHeaderBearer)
}
