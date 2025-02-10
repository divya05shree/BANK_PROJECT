const mongoose=require('mongoose')

const loanSchema=new mongoose.Schema({
    name:{
        type:String
    },
    accountnumber:{
        type:Number,
        required:true,
        unique:true
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return /^\d{10}$/.test(value);
            },
            message:props=>`${props.value} is not valid phonenumber!`
        }
    },
    loantype:{
        type:String,
        required:true,
        enum:['Education Loan India','Education Loan Abroad','Land Loan', 'Gold loan']
    }
})

const Loanmodel=mongoose.model('Loanmodel',loanSchema)
module.exports=Loanmodel;