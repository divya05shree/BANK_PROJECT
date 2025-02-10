const mongoose=require('mongoose')
const cardIssueSchema= new mongoose.Schema({
    name:{
        type:String

    },
    phonenumber:{
        type:Number,
        required:true,
        unique:false,
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
            unique:false,
        },
        cardtype:{
            type:String,
            enum:['Credit Cards','Debit Cards']
        },
        Issuereason: {  
            type: String
        },
        status: { 
            type: String,
            enum: ['Active', 'Deactivated'], 
            default: 'Active',
        },
})
const cardIssueModel=mongoose.model('cardIssueModel',cardIssueSchema)
module.exports=cardIssueModel;