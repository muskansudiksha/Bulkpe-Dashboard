const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    date: Date,
    amount: Number
});

module.exports = mongoose.model('deposit',depositSchema);