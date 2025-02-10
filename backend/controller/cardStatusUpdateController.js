const cardModel=require('../model/cardIssueSchema')

exports.reportIssue= async(req,res)=>{
    try{
        const{name,accountnumber,phonenumber,Issuereason,cardtype}=req.body;
        const existingIssue=await cardModel.findOne({Issuereason,accountnumber,phonenumber});
        if(existingIssue){
            console.log("Issue already reported")
             return res.status(409).json({message:"Issue already reported"})
        }
        const newIssue=new cardModel
        ({
            name,
            accountnumber,
            phonenumber,
            Issuereason,
            cardtype
        });
        await newIssue.save()
        return res.status(201).json({message:"Issue reported Successfully"});
    }
    catch(err){
        return res.status(500).json({ error: err.message });
    }
}