const express = require('express')
const router = express.Router()
const saleController = require('../controllers/sale.controller')

router.get('/', saleController.all)
router.get('/:id', saleController.find)
router.post('/', saleController.create)
router.put('/:id', saleController.update)
router.delete('/:id', saleController.delete)

module.exports = router