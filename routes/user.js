const express = require('express');

const router = express.Router();

const { handleSignIn,handleSignUp, getAllUsers } = require('../controllers/user');

router.post("/signup", handleSignUp);
router.post("/login", handleSignIn);
router.get("/all", getAllUsers);

module.exports = router;