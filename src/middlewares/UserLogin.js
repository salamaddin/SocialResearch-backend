const express=require('express')
const route=express.Router()
const UserModel=require('../models/UserModel')


route.post('/', async (req,res)=>{
    try {
        const {email,password}=req.body
      const user = await UserModel.findOne({ email, password })
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        res.status(200).json({
          success: true,
          message: "Login successful",
          user,
        })
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "An error occurred",
        error: error.message,
      })
    }
  })

  module.exports = route;