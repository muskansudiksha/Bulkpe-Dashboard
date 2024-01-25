const express = require('express');
const router = express.Router();
const Account = require('../models/account'); 

// GET 3 accounts
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.find().limit(3);
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;