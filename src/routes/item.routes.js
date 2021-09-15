const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item.controller')

router.get('/', itemController.all)
router.get('/:id', itemController.find)
router.post('/', itemController.create)
router.put('/:id', itemController.update)
router.delete('/:id', itemController.delete)

module.exports = router