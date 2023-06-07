const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    expense_name: {
        type : String,
        required : true
    },
    total_spent: {
        type : Number,
        required : true,
    },
    CreatedAt: Date.now()
})

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = {
    Expense
}