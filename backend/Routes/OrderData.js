const express = require("express");
const Order = require("../models/Orders");
const router = express.Router();

router.post('/orderData', async(req,res)=>{
    let data = req.body.order_data;
    // creating new object order_data in data arr at 0ind, removing 0ele storing val of req data
    await data.splice(0,0, {order_date: req.body.order_date});

    // agr email db me exist krti h to insert othwise create
    let eId = await Order.findOne({'email':req.body.email});
    // console.log("email found in db: "+eId);
    // means user ka phla order h, to hm create krnge uska data
    if(eId===null){
        try{
            await Order.create({ 
                email:req.body.email,
                order_data:[data]
            }).then(()=>{res.json({success:true})})
        }catch(error){
            console.log(error.message);
            res.send("Server error ",error.message);
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email: req.body.email},
                {$push:{order_data:data}}).then(()=>{res.json({success:true})})
                // we have to push the new orderdata in prev existing data of user
        }catch(error){
            console.log(error.message);
            res.send("Server error ",error.message);
        }
    
    }
})

router.post('/myOrderData',async (req,res)=>{
    try{
        console.log("my order email: ",req.body.email)
        let myData= await Order.findOne({"email":req.body.email});
        res.json({order_data:myData})
    }catch(error){
        res.send("Error: ",error.message)
    }
})
module.exports=router;