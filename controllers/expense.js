const Expense = require('../models/expense');

const addExpense = async (req,res) => {
    try {
        const { expense_name, total_spent } = req.body;
        await Expense.create({expense_name, total_spent})

        return res.status(200).json({success : true, message : "expense added"});
    } catch (error) {
        return res.status(502).json(error);
    }
}

const getExpense = async (req,res) => {
    try {
        const answer = await Expense.find({});

        res.status(200).json(answer);
    } catch (error) {
        return res.status(502).json(error);
    }
}

module.exports = {
    addExpense,
    getExpense
}