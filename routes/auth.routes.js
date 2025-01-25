const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/signup', authController.getSignup ); //for serving signup page
router.get('/login', authController.getLogin ); //for serving login page




module.exports = router;