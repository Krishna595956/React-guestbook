const express=require("express")
const cookieParser=require('cookie-parser');
const url=require('url')
const cors=require('cors')      //CORS-cross origin resource sharing

const app=express();
app.use(cookieParser("krishna"))
app.use(express.json())
app.use(cors())

app.post("/hello",(req,res)=>{
    res.json({"response":"hello"})
})

app.post('/login',(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        console.log(email,password)
        if(email==="krishna@gmail.com"){
        res.json({"response":"1"})}
        else{
            res.json({"response":"0"})
        }
    }
    catch{
        console.log("Internal server error")
    }
})

app.get('/hell',(req,res)=>{
    res.json({"r":"hell"})
})

app.listen(5000,()=>{
    console.log("Integration server running")
})