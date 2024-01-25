const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:String,
    contact:String
});

module.exports = mongoose.model('contacts',contactSchema);