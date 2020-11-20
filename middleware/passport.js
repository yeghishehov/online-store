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

// const rememberMeStrategy = new RememberMeStrategy(
//     function(token, done) {
//         Token.findOneAndRemove({ value: token })
//             .populate('user')
//             .exec((err, doc) => {
//                 if (err) { return done(err); }
//                 if(!doc) return done(null,false)
//                 return done(null, doc.user);
//             })
//     },
//     function(user, done) {
//         crypto.randomBytes(64, (err, buf) => {
//             const value = buf.toString('hex');
//             const token = new Token({
//                 value: value,
//                 user: user._id
//             });
//             token.save((err) => {
//                 if (err) return done(err);
//                 console.log(value);
//                 return done(null, value)
//             })
//         })
//     }
//   )

// passport.use(jwtStrategyHeaderBearer)

module.exports = passport => {
    passport.use(jwtStrategyHeaderBearer)
    // passport.use(rememberMeStrategy)
}
