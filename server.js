const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.PORT 

const app=express();

app.listen(port,()=>{
    console.log(`sever running on ${port}`);
})

app.get('/api/contacts',(req,res)=>{
    res.send("Get all contacts")
})


