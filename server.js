const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.PORT 

const app=express();

app.listen(port,()=>{
    console.log(`sever running on ${port}`);
})

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(express.json());

