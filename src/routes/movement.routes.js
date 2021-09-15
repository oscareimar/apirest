const express = require('express')
const router = express.Router()
const movementController = require('../controllers/movement.controller')

router.get('/', movementController.all)
router.get('/:id', movementController.find)
router.post('/', movementController.create)
router.put('/:id', movementController.update)
router.delete('/:id', movementController.delete)

module.exports = router