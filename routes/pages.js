const express = require('express');

const router = express.Router();
router.get('/',(req,res) =>{
    res.render('index');
});
router.get('/dashboard1',(req,res) =>{
    res.render('dashboard1');
});
module.exports = router;