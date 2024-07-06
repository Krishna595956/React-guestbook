const express=require("express")
const cookieParser=require('cookie-parser');
const url=require('url')
const cors=require('cors')

const app=express();
app.use(cookieParser("krishna"))
app.use(express.json())
app.use(cors())

app.get('/hello',(req,res)=>{
    res.json({"res":"helo"})
})

app.get('/login',(req,res)=>{
    const username="krishna"
    res.json({"resp":username})
    res.cookie('username',username)
})

app.get('/profile',(req,res)=>{
    const username=req.cookies.username;
    console.log(username)
    res.json({"to":username})
})

app.get('/log',(req,res)=>{
    urldata=url.parse(req.url,true)
    const email=urldata.query.email;
    const password=urldata.query.password;
    console.log(email,password)
    res.json({"res":"hello"})
})

app.get('/storage',(req,res)=>{
    const name=req.body.name;
    return res.send({"resp":name})
})

app.listen(5000,()=>{
    console.log("server started")
})