const router = require('express').Router()
const ordersController = require('../controllers/orders.controller')

// /api/orders/
router.get('/getOrders', ordersController.getOrders)
router.post('/create', ordersController.create)
router.delete('/remove:id', ordersController.remove)

module.exports = router
