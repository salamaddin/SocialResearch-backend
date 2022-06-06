const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')


const usersort = (users) => {
    const newusers = users.sort((a,b) => {
        if(a['id']<b['id']) return 1
        else if(a['id']>b['id']) return -1
         return;
    })
    return newusers
}
route.post('/', async (req,res)=>{

    const {email,id,action,comment}=req.body
    

    const user = await UserModel.findOne({email:email});

    try{
        let post={};
        let index;
        user.posts.forEach((p,i)=>{

            if(p.id===id){
                post=p
                index=i
            }
        })
        
        
        const i=post.upVote.map(v=>v.uId).indexOf(email)
        const j=post.downVote.map(v=>v.uId).indexOf(email)

        if(action === 'up'){
  
            if(j!==-1){
                user.posts[index].downVote.splice(j,1)
            }
            user.posts[index].upVote.push({uId:email})
        }
        else if(action==='down'){
            if(i!==-1){
                user.posts[index].upVote.splice(i,1)
            }
            user.posts[index].downVote.push({uId:email})
        }
        else{
            const id=user.posts[index].comments.length
            user.posts[index].comments.push({id,uId:email,reply:comment})
        }

       await  UserModel.findByIdAndUpdate(user._id,user);
      
        res.status(200).json({success: true, message: "active Research success", user});

    }catch(err){
        res.status(500).json({ success: false, error: 'falied to post'});
        
        console.log(err);
    }
})

module.exports=route