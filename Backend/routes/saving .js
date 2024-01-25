const express = require('express');

const router = express.Router();

const Saving = require('../models/saving');

//get only 2 
router.get('/',async(req,res)=>{
    try{
        const saving = await Saving.find().limit(2);
        res.json(saving);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;

