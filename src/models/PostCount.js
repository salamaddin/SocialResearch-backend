const mongoose=require('mongoose')
const {Schema}=mongoose

const userDataStructure={
   count: Number
}
const postCountSchema=new Schema(userDataStructure)

const postCount=new mongoose.model("postcount",postCountSchema)
module.exports=postCount