import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

//database
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("connected to database...")
}).catch((err)=>{
    console.log(err);
})

//server
const app = express();
app.use(express.json())
app.listen(3000,()=>{
    console.log(`Server is running on 3000!!!`)
})

app.use("/Estate-Server/user",userRouter);
app.use("/Estate-Server/auth",authRouter);

//middleware-error handling
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
})