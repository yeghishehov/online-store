const router = require('express').Router()
const collectionsController = require('../controllers/collections.controller')

// /api/collections/
router.post('/men', collectionsController.men)
router.get('/women', collectionsController.women)
router.get('/outlet', collectionsController.outlet)
router.get('/flat-rate-46', collectionsController.flatRate46)
router.get('/accesories', collectionsController.accesories)
router.get('/women-textile', collectionsController.womenTextile)
router.get('/summer-special-selection', collectionsController.summerSpecialSelection)

module.exports = router
