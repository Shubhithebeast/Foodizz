const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const {body,validationResult, matchedData} = require('express-validator');

router.post("/createuser",[
    //express have built validation function to chk data is validate or not
    // unknown person can inject html into page even with validation , known as the Cross-Site Scripting vulnerability (XSS).
    // http://localhost:3000/hello?person=<b>John</b>, res = "hello john";
    // for this , express validator use sanitizer mostly escape
    body('name',"Invalid Username").notEmpty().escape(),
    body('location',"Invalid Address").notEmpty().escape(),
    body('email','Invalid email').isEmail().escape(),
    body('password','Invalid Password').isLength({min:8}).escape(),
],
 async(req,res)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({errors:result.array()});
    }
    try{
        // matchedData using repetative use of req.body.name or req.body.email etc...
        const data = matchedData(req);
        await User.create({
            name: data.name,
            password:data.password,
            email : data.email,
            location:data.location
        }).then(res.json({success:true}))
        // console.log(data);
    
    }catch(error){
        console.log(error);
        res.json({success:false});
     
    } 
})

router.post("/loginuser",[
    body('email','Invalid email').isEmail().escape(),
    body('password','Invalid Password').isLength({min:8}).escape()
], async(req,res)=>{

    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({errors: result.array()});
    }
    const data = matchedData(req);
    let email = data.email;

    try{
        let userdata = await User.findOne({email});
        if(!userdata || data.password !== userdata.password){
            return res.status(400).json({error: "Try login with correct credentials..."})
        }
        return res.json({success:true});

    }catch(error){
        console.log(error); 
        res.json({success:false});
    }
})

module.exports = router;