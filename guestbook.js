const express=require('express')
const {MongoClient}=require('mongodb')
const cors = require("cors");
const nodemailer=require('nodemailer')
const jwt=require('jsonwebtoken')
const otpgenerator=require('otp-generator')

const url =
  "";
const cluster = new MongoClient(url);
const database = cluster.db("Guestbook");
const users = database.collection("users");
const colleges=database.collection('colleges')
const guests=database.collection('guests')
const feed=database.collection('feedbacks')

const secret_key="qwertyuiop"

const generateOTP=()=>{
    const otp=otpgenerator.generate(6,{upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false})
    return otp;
}
const app=express();
app.use(cors())
app.use(express.json())
app.use(Cookies("krishna"))

const client=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kr4785543@gmail.com",
        pass:"ipumzqnvfddcllxn"
    }
})

const adminOnly=(req,res,next)=>{
    const token=req.body.token;
    const decode=jwt.verify(token,secret_key)
    if(decode.data.usertype==="admin"){
        next();
    }
    else{
        return res.json({"response":"4"})
    }

}

app.post('/userregister',async (req,res)=>{
    try{
        const { name, mobile, email,gender, password, rpassword, dob }=req.body;
    await cluster.connect();
    const response=await users.findOne({"email":email[0]})
    if(password[0]!=rpassword[0]){
        return res.json({"response":"0"})
    }
    if(response===null){
        await users.insertOne({"name":name[0],"mobile":mobile[0],"email":email[0],"gender":gender[0],"password":password[0],"dob":dob[0]})
        await cluster.close()
        client.sendMail({
            from:"Guestbook",
            to:email[0],
            subject:"Registration confirmation",
            text:"Congratulations "+name[0]+" on successful registration in guestbook."
        })
        return res.json({"response":"1"})
    }
    else{
        await cluster.close()
        return res.json({"response":"2"})
    }
    }
    catch(err){
        return res.json({"response":err}) 
    }
})

app.post('/guestregister',adminOnly,async (req,res)=>{
    try{
        const {name,mobile,email,gender,password,rpassword,experience}=req.body;
    await cluster.connect();
    const response=await guests.findOne({"email":email[0]})
    if(password[0]!=rpassword[0]){
        return res.json({"response":"0"})
    }
    if(response===null){
        await guests.insertOne({"name":name[0],"mobile":mobile[0],"email":email[0],"gender":gender[0],"password":password[0],"experience":experience[0]})
        await cluster.close()
        client.sendMail({
            from:"Guestbook",
            to:email[0],
            subject:"Registration confirmation",
            text:"Congratulations "+name[0]+" on successful registration in guestbook."
        })
        return res.json({"response":"1"})
    }
    else{
        await cluster.close()
        return res.json({"response":"2"})
    }
    }
    catch(err){
        return res.json({"response":err}) 
    }
})

app.post('/collegeregister',adminOnly,async (req,res)=>{
    try{
        console.log("collegeregister called")
        const {name,code,email,password,rpassword,address}=req.body;
    await cluster.connect();
    const response=await colleges.findOne({"email":email[0]})
    if(password[0]!=rpassword[0]){
        return res.json({"response":"0"})
    }
    if(response===null){
        await colleges.insertOne({"name":name[0],"code":code[0],"email":email[0],"password":password[0],"address":address[0]})
        await cluster.close()
        client.sendMail({
            from:"Guestbook",
            to:email[0],
            subject:"Registration confirmation",
            text:"Congratulations "+name[0]+" on successful registration in guestbook."
        })
        return res.json({"response":"1"})
    }
    else{
        await cluster.close()
        return res.json({"response":"2"})
    }
    }
    catch(err){
        return res.json({"response":err}) 
    }
})

app.post('/userlogin',async (req,res)=>{
    try{
        const {email,password,token}=req.body;
    await cluster.connect();
    const response=await users.findOne({"email":email})
    await cluster.close();
    if(!response){
        return res.json({"response":"0"})       //user does not exist
    }
    else{
        if(response["password"]===password){
            const payload={
                data:{
                    useremail:email,
                    usertype:"users"
                }
            }
            const token=jwt.sign(payload,secret_key)
            return res.json({"response":"1","token":token})      //password correct
        }
        else{
            return res.json({"response":"2"})       //invalid credentials
        }
    }
    }
    catch(err){
        return res.json({"response":err})
    }
})

app.post('/collegelogin',async (req,res)=>{
    try{
        const {email,password}=req.body;
    await cluster.connect();
    const response=await colleges.findOne({"email":email})
    await cluster.close();
    if(!response){
        return res.json({"response":"0"})       //user does not exist
    }
    else{
        if(response["password"]===password){
            const payload={
                data:{
                    useremail:email,
                    usertype:'colleges'
                }
            }
            const token=jwt.sign(payload,secret_key)
            return res.json({"response":"1","token":token})
                  //password correct
        }
        else{
            return res.json({"response":"2"})       //invalid credentials
        }
    }
    }
    catch(err){
        return res.json({"response":err})
    }
})

app.post('/guestlogin',async (req,res)=>{
    try{
        const {email,password}=req.body;
    await cluster.connect();
    const response=await guests.findOne({"email":email})
    await cluster.close();
    if(!response){
        return res.json({"response":"0"}).status(200)       //user does not exist
    }
    else{
        if(response["password"]===password){
            const payload={
                data:{
                    useremail:email,
                    usertype:'guests'
                }
            }
            const token=jwt.sign(payload,secret_key)
            return res.json({"response":"1","token":token})       //password correct
        }
        else{
            return res.json({"response":"2"})       //invalid credentials
        }
    }
    }
    catch(err){
        return res.json({"response":err})
    }
})

app.post('/adminlogin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(email==="admin@gmail.com" && password==="1234567890"){
            const payload={
                data:{
                    useremail:email,
                    usertype:'admin'
                }
            }
            const token=jwt.sign(payload,secret_key)
            return res.json({"response":"1","token":token})
        }
        else{
            return res.json({"response":"0"})
        }
    }
    catch(err){
        return res.json({"response":err}).status(500)
    }

})

app.post('/sendotp',async (req,res)=>{
    try{
        const email=req.body.email;
    await cluster.connect()
    const user1=await users.findOne({"email":email})
    const user2=await colleges.findOne({"email":email})
    const user3=await guests.findOne({"email":email})
    const otp=generateOTP()
    const data={
        from:"Guest book",
        to:email,
        subject:"OTP to reset password",
        text:"Your OTP to reset your password is "+otp
    }
    if(user1){
        client.sendMail(data,()=>{console.log("OTP sent successfully")})
        return res.json({"response":"1","usertype":"user","email":email,"otp":otp})
    }
    else if(user2){
        client.sendMail(data,()=>{console.log("OTP sent successfully")})
        return res.json({"response":"1","usertype":"college","email":email,"otp":otp})
    }
    else if(user3){
        client.sendMail(data,()=>{console.log("OTP sent successfully")})
        return res.json({"response":"1","usertype":"guest","email":email,"otp":otp}) 
    }
    else{
        return res.json({"response":"0"})
    }
    }
    catch(err){
        console.log((err))
    }
})

app.post('/verifyotp',(req,res)=>{
    const {otp,localotp}=req.body;
    if(otp===localotp){
        return res.json({"response":"1"})
    }
    else{
        return res.json({"response":"0"})
    }
})

app.post('/resetpassword',async (req,res)=>{
   try{
    const {newpassword,rnewpassword,email,usertype}=req.body;
    if(newpassword!=rnewpassword){
        return res.json({"response":"0"})
    }
    await cluster.connect()
    if(usertype==="user"){
        await users.updateOne({"email":email},{"$set":{"password":newpassword}})
        return res.json({"response":"1"})
    }
    else if(usertype==='college'){
        await colleges.updateOne({"email":email},{"$set":{"password":newpassword}})
        return res.json({"response":"1"})
    }
    else{
        await guests.updateOne({"email":email},{"$set":{"password":newpassword}})
        return res.json({"response":"1"})
    }
   }
   catch(err){
        console.log(err)
   }
    
})

app.post('/subfeedback',async (req,res)=>{
try{
    const {college,category,feedback,token}=req.body;
    const user=jwt.verify(token,secret_key)
    if(user.data.usertype!='guests'){
        return res.json({"response":"0"})       //unauthorized access
    }
    else{
        await cluster.connect()
        await feed.insertOne({"by":user.data.useremail,"college":college,"category":category,"feedback":feedback})
        return res.json({"response":"1"})
    }
}
catch(err){
    console.log(err)
    return res.json({"response":err})
}
})

app.post('/feedbacks',async (req,res)=>{
    const token=req.body;
    const user=jwt.verify(token.token,secret_key)
    await cluster.connect()
    if(user.data.usertype==="colleges"){
        const college=await colleges.findOne({"email":user.data.useremail})
        console.log(college)
        const data=await feed.find({"college":college.name}).toArray()
        return res.json({"response":data})
    }
    if(user.data.usertype==="guests"){
        const data=await feed.find({"by":user.data.useremail}).toArray()
        return res.json({"response":data})
    }
    else{
        const data=await feed.find().toArray()
        return res.json({"response":data})
    }

})

app.listen(5000,()=>{
    console.log("Server started running.........")
})
