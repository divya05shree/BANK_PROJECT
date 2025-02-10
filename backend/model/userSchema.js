const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userSchema =new mongoose.Schema({
        bankname:{
            type:String,
            required:true,

        },
        phonenumber:{
            type:Number,
            required:true,
            unique:true,
            validate:{
                validator:function(value){
                    return /^\d{10}$/.test(value);
                },
                message:props=>`${props.value} is not valid phonenumber!`
            }
            },
            mail:{
                type:String,
                required:true,
                unique:true,
                validate:{
                    validator:function(value){
                        return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,6})$/.test(value);
                },
                message:props=>`${props.value} is not valid mail!`,
            },
        },
        password:{
            type:String,
            required:true,
            
        },
        accountnumber:{
            type:Number,
            required:true,
            unique:true,
        },
        
});
        userSchema.pre('save',async function(next){
            if(this.isModified('password')){
                this.password=await bcrypt.hash(this.password,10);
            }
            next();
        });

userSchema.methods.generateToken =function(){
    try{
        const payload={
            _id:this._id,
            bankname:this.bankname,
            phonenumber:this.phonenumber,
        };
        const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
        
        console.log("token generated successfully")
        return token;
    }
    catch(err){
        console.error("Token generation failed",err.message);
    }
    }

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;
