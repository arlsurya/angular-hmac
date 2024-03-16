const express = require('express');
const router = express.Router(); 
const userController = require('../Controllers/userController');
const validateSignature = require('../Middlewares/validateSignature');
/**
 * Validates the signature of the request body before processing.
 * If the request body is modified externally, the router blocks the request.
 */

router.post('/login',validateSignature, userController.loginUser);

module.exports = router;
