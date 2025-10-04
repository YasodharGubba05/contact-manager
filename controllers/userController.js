const asyncHandler=require("express-async-handler")

const registerUser= asyncHandler(async (req,res)=>{
    const {username,email,password} =req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new error("all fields are mandatory")
    }
    res.json({message:"Register the user"})
})

const loginUser= asyncHandler(async (req,res)=>{
    res.json({message:"login user"});
})

const currentUser= asyncHandler(async (req,res)=>{
    res.json({message:"current user information "});
})






module.exports={registerUser,loginUser,currentUser}