const express = require('express')
const router = express.Router()
const {check} = require('express-validator')
const authController = require('../controllers/auth.controller')
const remember = require('../middleware/rememberMe')
const passport = require('passport')

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'not correct email').isEmail(),
        check('password', 'minimal 6 symbol\'s for password').isLength({min: 6}),
        check('firstName', 'First Name is required').notEmpty(),
        check('lastName', 'Last Name is required').notEmpty(),
    ],
    authController.registration
)

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    authController.login
)

// /api/auth/isAuthorized
router.get('/isAuthorized', remember,  passport.authenticate('jwt', {session: false}), authController.isAuthorized)

module.exports = router