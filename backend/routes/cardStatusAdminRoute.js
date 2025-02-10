const express=require('express');
const router=express.Router();
const cardStatusAdminController=require('../controller/cardstatusAdminController');


router.patch('/cardStatusAdmin',cardStatusAdminController.adminDeactivateAccount );


module.exports=router;