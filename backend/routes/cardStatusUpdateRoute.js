const express=require('express')
const router=express.Router()
const cardstatuscontroller=require('../controller/cardStatusUpdateController')


router.post('/report-card-issue',cardstatuscontroller.reportIssue);

module.exports=router;
