const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')

route.post('/', async (req,res)=>{
    const user={}
    const {name,email,password}=req.body
    user._id=email
    user.name=name
    user.email=email
    user.password=password

    if (password.length < 6) {
        return res.json({ message: "Password less than 6 characters" })
      }
    
    try{
        const userExist = await UserModel.findOne({email:email});
        
        if(userExist){
            return res.status(200).json({success: false, error: "Email already exist"});
        }

        const doc=new UserModel(user)
        await doc.save()

        res.status(200).json({success: true, message: "user registered successful", user});

    }catch(err){
        res.json({ success: false, error: 'falied to register'});
        console.log(err);
    }
})

module.exports=route