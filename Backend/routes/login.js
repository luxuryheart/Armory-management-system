const express = require('express');
const router = express.Router();

//controllers 
const { login } = require('../controllers/login')

//middleware
const { auth } = require('../middleware/auth')

router.post('/login', auth, login);

module.exports = router;