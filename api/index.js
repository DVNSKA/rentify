import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js';
import flatRouter from './routes/flat.js';
import cors from 'cors'
const app = express(); 

app.use(bodyParser.json())
const allowedOrigins = ['https://example.com', 'https://anotherdomain.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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