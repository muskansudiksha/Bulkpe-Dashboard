const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
    current: Number,
    invested:Number,
    interest:Number,
    daily:Number
});

module.exports = mongoose.model('saving',savingSchema);