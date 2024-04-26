import User from "../models/user.model.js";
import bcryptjs from 'bcrypt'

export const signup = async(req,res,next)=>{
    const { username,email,password } = req.body;
    const encryptedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({ username,email,password:encryptedPassword});
    try{
        await newUser.save()
        res.status(201).json("User created successfully !!!")
    }
   catch(error){
    next(error)
   }
}