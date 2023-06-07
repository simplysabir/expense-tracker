const express = require('express');

const router = express.Router();

const { handleSignIn,handleSignUp } = require('../controllers/user');

router.post("/signup", handleSignUp);
router.post("/login", handleSignIn);

module.exports = router;