const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    name: String,
    status: Boolean,
    date: String,
    type:Boolean,
    amount:Number
});

module.exports = mongoose.model('transaction',transactionSchema);

