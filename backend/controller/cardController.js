const cardModel=require('../model/cardSchema')

exports.cardCreate= async(req,res)=>{
    try{
        const{phonenumber,accountnumber,name,email,address,cardtype}=req.body;

        const cardStatus= req.body.status||'Active';
        const existingOne=await cardModel.findOne({accountnumber});
        if(existingOne)
        {
            console.log("card created exists");
            return res.status(400).json({message:'Card already exists'});
        }
        const newCard=new cardModel({
            phonenumber,accountnumber,name,email,address,cardtype,status:cardStatus
        });
        await newCard.save()
        console.log("card created successfullly");
        return res.status(200).json({message:'card created succeesfully',card:newCard});
        
        
        
    }
    catch(err){
        return res.status(500).json({message:'server error',error:err.message});
    }
   
};