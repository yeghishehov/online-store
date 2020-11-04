const router = require('express').Router()
const ordersController = require('../controllers/orders.controller')
const passport = require('passport')

// /api/orders/
router.get('/getOrders', passport.authenticate('jwt', {session: false}), ordersController.getOrders)
router.post('/create', passport.authenticate('jwt', {session: false}), ordersController.create)
router.delete('/remove:id', passport.authenticate('jwt', {session: false}), ordersController.remove)

module.exports = router
