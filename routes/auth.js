const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
router.post('/dashboard1',authController.dashboard1); 
module.exports = router;