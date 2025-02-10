const express=require('express');
const router=express.Router();
const userLoginController=require('../controller/userLoginController');

router.post('/login',userLoginController.loginuser);

module.exports=router;