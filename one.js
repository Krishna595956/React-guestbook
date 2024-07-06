const jwt=require('jsonwebtoken')
const express=require('express');
const cookieParser = require('cookie-parser');

const app=express();
app.use(express.json())
app.use(cookieParser("krishna"))

const middleware=(req,res,next)=>{
    try{
        let token=req.cookies.token;
        console.log("middleware")
        let payload=jwt.verify(token,"krishna")
        if(payload){
        console.log(payload.data)
        req.user=payload.data;
        next();
        }
        else{
            res.json({"Response":"Internal server error"})
        }
    }
    catch(err){
        res.json({"Response":"Unauthorized access"})
    }

}

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password)
    let payload={
        data:{
        "email":email,
        "password":password}
    }
    let token=jwt.sign(payload,"krishna",{expiresIn:"1h"})
    res.cookie("token",token)
    return res.json({auth:true,authToken:token})
})

app.post('/profile',middleware,(req,res)=>{
    // const token=req.cookies.token;
    console.log(req.user.email)
    res.send({"name":"hello"})
})

app.get('/logout',(req,res)=>{
    res.cookie('token','')
    return res.send("Logged out successfully")
})

app.listen(5000,()=>{
    console.log("sever started....")
})