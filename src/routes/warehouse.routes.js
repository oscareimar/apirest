const express = require('express')
const router = express.Router()
const warehouseController = require('../controllers/warehouse.controller')

router.get('/', warehouseController.all)
router.get('/:id', warehouseController.find)
router.post('/', warehouseController.create)
router.put('/:id', warehouseController.update)
router.delete('/:id', warehouseController.delete)

module.exports = router