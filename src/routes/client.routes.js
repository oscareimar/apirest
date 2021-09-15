const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller')

router.get('/', clientController.all)
router.get('/:id', clientController.find)
router.post('/', clientController.create)
router.put('/:id', clientController.update)
router.delete('/:id', clientController.delete)

module.exports = router