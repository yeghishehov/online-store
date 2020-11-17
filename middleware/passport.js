const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('config')
const User = require('../models/user')

const auth0Strategy = new Auth0Strategy(
    {
        // AUTH0_SECRET=<your secret>
        // AUTH0_CLIENT_ID=<your client id>
        // AUTH0_DOMAIN=<your domain>
        // AUTH0_CALLBACK_URL=http://localhost:3000/auth/callback
        // COOKIE_SECRET=<move your cookie secret here>
        // JWT_SECRET_KEY=secretttttttt // THIS IS ALSO NEW
        domain: 'asd.asd',
        clientID: 55,
        clientSecret: 'fdsadfsadf',
        callbackURL: 'http://localhost:3000/auth/callback',
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        return done(null, profile)
    }
)

const jwtStrategySession = new JwtStrategy(
    {
        jwtFromRequest: (req) => req.session.jwt,
        secretOrKey: config.get('cookieSecret'),
    },
    (payload, done) => {
        return done(null, payload);
    }
)

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

passport.use(auth0Strategy)
passport.use(jwtStrategySession)
passport.use(jwtStrategyHeaderBearer)

module.exports = passport
