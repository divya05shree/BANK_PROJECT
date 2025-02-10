const loanmodel=require('../model/loanSchema')

exports.loanapply =async(req,res)=>{
    try{
        const{accountnumber,phonenumber,loantype}=req.body;
        const existingLoan = await loanmodel.findOne({ accountnumber });
        if (existingLoan) {
            return res.status(400).json({ message: `${loantype} not applied, account already exists.` });
        }
        const newLoan = new loanmodel({
            accountnumber,
            phonenumber,
            loantype,
        });
        await newLoan.save();
        
        console.log("Loan applied")
        return res.status(200).json({message:`${loantype}applied successfully`})
    }
    catch(err){
        console.log("loan not applied")
        return res.status(500).json({message:err.message})
    }
    

};

