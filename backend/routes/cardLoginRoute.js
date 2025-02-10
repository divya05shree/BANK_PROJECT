const cardController=require('../controller/cardController')
const express=require('express')
const router=express.Router()
router.post('/card',cardController.cardCreate)

module.exports=router;