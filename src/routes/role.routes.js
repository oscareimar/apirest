const express = require('express')
const router = express.Router()
const roleController = require('../controllers/role.controller')

router.get('/', roleController.all)
router.get('/:id', roleController.find)
router.post('/', roleController.create)
router.put('/:id', roleController.update)
router.delete('/:id', roleController.delete)

module.exports = router