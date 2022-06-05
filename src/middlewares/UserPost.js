const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')
const PostCount = require('../models/PostCount')

route.post('/', async (req,res)=>{
    const {email,post}=req.body

    try{
        const user = await UserModel.findOne({email:email});
         const postcount = await PostCount.findOne({_id: "629c6fab5a695bc487eae909"})

         const count = postcount.count;
        const newCount = count + 1
        post.id= newCount
        

        user.posts.push(post)
        await  UserModel.findByIdAndUpdate(user._id,user);
        await PostCount.findByIdAndUpdate(postcount._id,{count: newCount}); //update post count
        res.status(200).json({success: true, message: "post success", user});

    }catch(err){
        res.status(500).json({ success: false, error: 'falied to post'});
        console.log(err);
    }
})

module.exports=route