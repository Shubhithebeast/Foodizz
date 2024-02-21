
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongodb=require("./db");
const cors = require('cors');

 
mongodb();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
}); 

