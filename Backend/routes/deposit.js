const express = require('express');
const router = express.Router();

const Deposit = require('../models/deposit');

//get only 2
router.get('/',async(req,res)=>{
    try{
        const deposit = await Deposit.find().limit(2);
        res.json(deposit);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

module.exports = router;