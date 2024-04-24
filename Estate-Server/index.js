import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//database
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("connected to database...")
}).catch((err)=>{
    console.log(err);
})

//server
const app = express();
app.listen(3000,()=>{
    console.log(' Server is running on port 3000!!!')
})