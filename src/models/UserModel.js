const mongoose=require('mongoose')
const {Schema}=mongoose

const userDataStructure={
     _id: String,
    name: String,
    email: String,
    password: String,

}
const userSchema=new Schema(userDataStructure)

const UserModel=new mongoose.model("user",userSchema)
module.exports=UserModel