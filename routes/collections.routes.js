const router = require('express').Router()
const collectionsController = require('../controllers/collections.controller')

// /api/collections/
router.get('/men', collectionsController.men)
router.get('/women', collectionsController.women)
router.get('/outlet', collectionsController.outlet)
router.get('/accesories', collectionsController.accesories)
router.get('/clothing', collectionsController.clothing)

module.exports = router
