const express = require('express');

const router = express.Router();


const Transaction = require('../models/transaction'); 

// GET latest 4 transactions 
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({date:-1}).limit(4);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;