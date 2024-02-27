const {hashPassword,comparePassword} = require("../helpers/auth.js");
const { User } = require("../models/user.models");
const jwt = require("jsonwebtoken")
const test = (req,res)=>{
    res.json("Jay hind dosto")
}

const registerUser = async(req,res)=>{
    const {Fullname,username,email,password} = req.body;
    if(!Fullname || !username || !email || !password){
        return res.json({error:"Please Enter all the fields"})
    }
    if(password.length<7){
        return res.json({error:"Password should be atleast 8 characters long"})
    }
    const userExist = await User.findOne({$or:[{email},{username}]})
    if(userExist)
    {return res.json({error:"User already exists"})
    }

    const hashedPassword = await hashPassword(password)


    const user = await User.create({
        Fullname,
        username,
        email,
        password:hashedPassword
    })
    const finaluser = await User.findOne({_id:user._id}).select("-password -tokens")
    if(!user){
        return res.json({error:"Failed to register"})
    }
    
    return res.json(finaluser)

}

const loginUser = async(req,res)=>{
    try {
        const {username,password} = req.body;
    if(!username || !password){
        return res.json({error:"Please Enter all the fields"})
    }
    const checkuser = await User.findOne({$or:[{username}]})

    if(!checkuser)
    {
        return res.json({error:"User does not exist"})
    }

    const match = await comparePassword(password,checkuser.password)

    if(!match){
        return res.json({error:"Invalid credentials"})
    }

    const token = jwt.sign({id:checkuser._id},process.env.JWT_SECRET)
    checkuser.tokens = checkuser.tokens.concat({token:token})
    await checkuser.save()


    res.cookie('access_token',token,{
        expires:new Date(Date.now()+24*60*60*1000),
        httpOnly:true
    })

    return res.status(200).json({message:"User logged in successfully",checkuser})
    } catch (error) {
        console.log(error);
    }
}


const getprofile = async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select("-password -tokens")
        if(!user)
        {
            return res.json({error:"User not found"})
        }
        
        return res.status(200).json({message:"User found successfully",user})
    }
    catch (error) {
        console.log(error);
    }
}

module.exports={
    test,
    registerUser,
    loginUser,
    getprofile
}