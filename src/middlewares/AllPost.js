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

route.get('/', async (req,res)=>{

    try{
        let users = await UserModel.find();
        users= users.map(user => {
            return user.posts
        })

        users = users.flat(2)
        users = usersort(users)
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users, null, 3));

    }catch(err){
        res.json({ success: false});
        console.log(err);
    }
})

module.exports=route