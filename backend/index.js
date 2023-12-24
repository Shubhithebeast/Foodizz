
const express = require('express');
const app = express();
const port = 8000;
const mongodb=require("./db");
 
mongodb();

app.get('/',(req,res)=>{
    res.send("Hello");
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
}); 