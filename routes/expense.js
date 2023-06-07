const express = require('express');

const router = express.Router();
const { addExpense, getExpense } = require('../controllers/expense')
router.post("/add", addExpense);
router.get("/", getExpense);


module.exports = router;