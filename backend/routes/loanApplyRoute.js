const express=require('express')
const router=express.Router()
const LoanController=require('../controller/loanController')

router.post('/loanapply',LoanController.loanapply);
module.exports=router