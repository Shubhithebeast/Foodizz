const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const {body,validationResult, matchedData} = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = "asdfghjkmnbvc$by^%$&nhgkjwlkjh)))";

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

    // matchedData using repetative use of req.body.name or req.body.email etc...
    const matchdata = matchedData(req);

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(matchdata.password,salt);

    try{
        await User.create({
            name: matchdata.name,
            password:secPassword,
            email : matchdata.email,
            location:matchdata.location
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
    const matchdata = matchedData(req);
    let email =matchdata.email;

    try{
        let userdata = await User.findOne({email});
        const pwdCompare = await bcrypt.compare(matchdata.password,userdata.password);
        if(!userdata || !pwdCompare){
            return res.status(400).json({error: "Try login with correct credentials..."})
        }

        const data = {
            user:{
                id:userdata.id
            }
        }
 

        const authToken = jwt.sign(data,jwtsecret);
        return res.json({success:true, authToken:authToken});
 
    }catch(error){
        console.log(error); 
        res.json({success:false});
    }
})

module.exports = router;