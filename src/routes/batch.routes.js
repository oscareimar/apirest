const express = require('express')
const router = express.Router()
const batchController = require('../controllers/batch.controller')

router.get('/', batchController.all)
router.get('/:id', batchController.find)
router.post('/', batchController.create)
router.put('/:id', batchController.update)
router.delete('/:id', batchController.delete)

module.exports = router