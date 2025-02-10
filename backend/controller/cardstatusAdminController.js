const cardIssueModel=require('../model/cardIssueSchema');
exports.adminDeactivateAccount =async(req,res)=>{
    try{
        const{Issuereason,accountnumber,phonenumber}=req.body;
        const existingRecord = await cardIssueModel.findOne({ accountnumber, phonenumber });
        if (!existingRecord) {
            return res.status(404).json({ message: "Account or phone number not found" });
        }
        
        const cardStatus = req.body.status || 'Deactivated';
        existingRecord.status = cardStatus;
        await existingRecord.save();
        return res.status(200).json({
            message: `Account status updated to '${cardStatus}' successfully`,
            Issuereason: Issuereason,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
};
   