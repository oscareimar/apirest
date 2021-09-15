const express = require('express')
const router = express.Router()
const purchaseController = require('../controllers/purchase.controller')

router.get('/', purchaseController.all)
router.get('/:id', purchaseController.find)
router.post('/', purchaseController.create)
router.put('/:id', purchaseController.update)
router.delete('/:id', purchaseController.delete)

module.exports = router