const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts'); 

// GET 4 contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().limit(4);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;