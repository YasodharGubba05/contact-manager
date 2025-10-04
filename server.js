const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv=require('dotenv').config();
const port=process.env.PORT 
const connectDb=require("./config/dbConnection")
connectDb();
const app=express();
app.use(express.json()); 

app.listen(port,()=>{
    console.log(`sever running on ${port}`);
})

app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)


