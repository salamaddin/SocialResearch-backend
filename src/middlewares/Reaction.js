const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')

route.post('/', async (req,res)=>{
    const {email,id,action}=req.body

    try{
        const user = await UserModel.findOne({email:email});
        if(action === 'up'){
            user.post[id].upvote += 1
        }else{
            user.post[id].downvote -= 1
        }
       
        
        // let result = user.post.find(obj => {
        //     return obj.id === id
        //   })

     //   user.activeResearch.push(data)

        await  UserModel.findByIdAndUpdate(user._id,user);
       
        res.status(200).json({success: true, message: "active Research success", user});

    }catch(err){
        res.status(500).json({ success: false, error: 'falied to post'});
        
        console.log(err);
    }
})

module.exports=route