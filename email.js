const nodemailer=require('nodemailer')

const client=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"",
        pass:""
    }
})

let content={
    from:"kr4785543@gmail.com",
    to:"kr4785543@gmail.com",
    subject:"Test mail",
    text:"This is a mail from node mailer"
}

client.sendMail(content,(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
        console.log("Mail sent successfully")
    }
})
