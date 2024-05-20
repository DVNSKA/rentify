import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js';
import flatRouter from './routes/flat.js';
import cors from 'cors'
const app = express(); 

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',flatRouter)

const port =3000;

mongoose.connect("mongodb+srv://abhiram20bcn7065:lHxYTsqrSaf581LX@cluster0.kpf9upk.mongodb.net/").then(()=>{console.log(" connected")});

app.listen(port,()=>{
    console.log("server is running in 3000");
})

//abhiram20bcn7065
//lHxYTsqrSaf581LX