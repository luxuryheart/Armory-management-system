const express = require('express');
const router = express.Router();

//controllers 
const { login } = require('../controllers/login')

router.post('/login', login);

module.exports = router;