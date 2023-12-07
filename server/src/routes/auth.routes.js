const express = require('express')
const router = express.Router()

const authControllers = require('../controllers/authControllers')

router.post('/register', authControllers.Register)
router.post('/login', authControllers.Login)

module.exports = router