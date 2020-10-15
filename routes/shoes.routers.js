const router = require('express').Router()
const {check} = require('express-validator')
const shoesController = require('../controllers/shoes.controller')

// /api/shoes/add
router.post('/add', shoesController.add)

// /api/shoes/all
router.get('/all', shoesController.all)

module.exports = router