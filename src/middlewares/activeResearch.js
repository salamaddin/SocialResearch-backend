const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')
const PostCount = require('../models/PostCount')

route.post('/', async (req,res)=>{
    const {email,data}=req.body
    try{
    
        const user = await UserModel.findOne({email:email});
        
       user.activeResearch = data
    

         await  UserModel.findByIdAndUpdate(user._id,user);
       
         res.status(200).json({success: true, message: "active Research success", user});

    }catch(err){
        res.status(500).json({ success: false, error: 'falied to post'});
        
        console.log(err);
    }
})

module.exports=route