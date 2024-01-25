const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    type:String,
    amount:Number,
    accountNumber:Number,
    ifsc:String
});

module.exports = mongoose.model('account',accountSchema);