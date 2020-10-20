const router = require('express').Router()
const passport = require('passport')
const upload = require('../middleware/upload')
const shoesController = require('../controllers/shoes.controller')

// /api/shoes/add
router.post('/add',
    passport.authenticate('jwt', {session: false}),
    upload.array('image'),
    shoesController.add
)

// /api/shoes/all
router.get('/all', shoesController.all)

module.exports = router
