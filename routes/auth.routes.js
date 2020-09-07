const { Router } = require('express')
const bcryptjs = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/user')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'not correct email').isEmail(),
        check('password', 'minimal 6 symbol\'s for password')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect registration data'
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'User is not existed' })
            }

            const hashedPasswors = await bcryptjs.hash(password, 12)
            const user = new User({ email, password: hashedPasswors })

            await user.save()

            res.status(201).join({ message: 'User is created'})

        } catch (error) {
            res.status(500).json({message: 'error...'})
        }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'not correct email').normalizeEmail().isEmpty(),
        check('password', 'Enter password').exists()
    ],
    async (reg, res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect login data'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({ email })

            if(!user) {
                return res.status(400).json({ message: 'user is not existed'})
            }

            const isMatch = await bcryptjs.compare(password, user.password)

            if(!!isMatch) {
                return res.status(400).json({ message: 'incorrect password'})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })
            
        } catch (error) {
            res.status(500).json({message: 'error...'})
        }
})

module.exports = router