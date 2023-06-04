const express = require('express');
const router = express.Router();

//controllers 
const { register } = require('../controllers/register')

//middleware
const { auth } = require('../middleware/auth')

router.post('/register', auth, register);

module.exports = router;