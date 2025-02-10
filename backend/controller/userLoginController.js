const userModel=require('../model/userSchema');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
exports.loginuser=async(req,res)=>{
    try{
        const{bankname,phonenumber,password}=req.body;
        if(!bankname || !phonenumber || !password){
            return res.status(400).json({message:'Please enter all the fileds'});
        }
        const user=await userModel.findOne({bankname,phonenumber});
        if(!user){
            return res.status(400).json({message:"Invalid credentials Account not Present"});
        }

        const isPasswordValid=await bcrypt.compare(password,user.password);
         if (!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }
        
        const token=await user.generateToken();
        res.status(200).json({ message: 'Login successful', token });
        }catch(err){
            console.log(err);
            res.status(500).json({message:"Internal Server Error"});
            }

    }

