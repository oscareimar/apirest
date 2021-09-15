const express = require('express')
const router = express.Router()
const providerController = require('../controllers/provider.controller')

router.get('/', providerController.all)
router.get('/:id', providerController.find)
router.post('/', providerController.create)
router.put('/:id', providerController.update)
router.delete('/:id', providerController.delete)

module.exports = router