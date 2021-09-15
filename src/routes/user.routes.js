const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.all)
router.get('/:id', userController.find)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router