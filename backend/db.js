import mongoose from "mongoose";
mongoose.connect("mongodb+srv://nijpadariya:Nij125909%40%40%40@cluster0.w6nczc3.mongodb.net/todos")
const todoSchema =  mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
completed:boolean

},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)

