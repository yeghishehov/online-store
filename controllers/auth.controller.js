const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
// const crypto = require('crypto')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const RefreshToken = require('../models/refreshToken')
    
module.exports.registration = async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'incorrect registration data'
            })
        }

        const {email, password, firstName, lastName} = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'Your email address is already registered' })
        }

        const hashedPasswors = await bcryptjs.hash(password, 12)
        const user = new User({ email, password: hashedPasswors, firstName, lastName })

        await user.save()

        res.status(201).json({ message: 'User is created'})

    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.login = async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'incorrect login data'
            })
        }

        const {email, password, remember} = req.body

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ message: 'user is not existed'})
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ message: 'incorrect password'})
        }

        if(remember) {
            // req.session.jwt = jwt.sign({ userId: user.id }, config.get('cookieSecret'));
            // res.cookie('sdfasdfasdf23453rf', jwt.sign({ userId: user.id }, config.get('cookieSecret')))
            const rememberToken = jwt.sign({ userId: user.id }, config.get('cookieSecret'))
            // const rememberTokenName = crypto.randomBytes(40).toString('hex')
            res.cookie('remember_me', rememberToken, { maxAge: 3 * 24 * 60 * 60 * 1000 })

            User.findByIdAndUpdate({ _id : user.id  }, { token: rememberToken}, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('user token updated')
                }
            })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        // const refreshToken = new RefreshToken({
        //     user: user.id,
        //     token: crypto.randomBytes(40).toString('hex'),
        //     expires: new Date(Date.now() + 7*24*60*60*1000),
        //     createdByIp: req.ip
        // });
        
        // await refreshToken.save();

        res.json({
            token: `Bearer ${token}`,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }
        })
        
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.isAuthorized = async (req, res) => {
    try {
        res.json({
            token: req.headers.authorization,
            user: req.user
        })
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}