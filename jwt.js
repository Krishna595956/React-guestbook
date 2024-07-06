const jwt = require("jsonwebtoken");
const express = require("express");
const cookies = require("cookie-parser");

const app = express();
app.use(cookies("krishna"));

let secret_key = "akhsdbfsdBjlalsfboajfoal";

const middleware = (req, res, next) => {
  try{
    const encodedToken = req.cookies.token;
  if (encodedToken) {
    const decodedToken = jwt.verify(encodedToken, secret_key);
    if(decodedToken){
        req.user=decodedToken.data;
    next();
    }
    else{
        res.send("Unauthorized user")
    }
    
  }
  else{
    res.send("No cookies")
  }}
  catch{
    res.send("Uauthorized user")
  }
  }
;
app.get("/login", (req, res) => {
  let payload = {
    data: {
      name: "SACET",
      age: 25,
    },
  };
  const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });
  res.cookie("token", token);
  res.json({ Response: token });
});

app.get("/profile", middleware, (req, res) => {
    console.log(req.user['name'],req.user['age'])
  return res.send("This is profile api");
});

app.get('/logout',(req,res)=>{
    res.cookie('token','')
    res.send("Loggedout successfully")
})

app.listen(5000, () => {
  console.log("server started running.........");
});
