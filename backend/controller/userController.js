const userModel=require('../model/userSchema');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

exports.registerUser= async(req,res)=>{
    try{
        const newUser=new userModel(req.body);
        await newUser.save();
        console.log("Account created successfully")
        res.status(201).json
        ({
            message:"user created successfully!"
        });
    }
    catch(err)
    {
        res.status(400).json({error:err.message})
    };
}
