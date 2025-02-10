const mongoose=require('mongoose')
const cardSchema= new mongoose.Schema({
    name:{
        type:String

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
        accountnumber:{
            type:Number,
            required:true,
            unique:true,
        },
        address:{
            type:String,
        },
        cardtype:{
            type:String,
            enum:['Credit Cards','Debit Cards']
        },
        
})
const cardModel=mongoose.model('Cardmodel',cardSchema)
module.exports=cardModel;