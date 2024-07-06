import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [result,setResult]=useState('')
    const [email,setEmail]=useState('')
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const otpData= async ()=>{
            const response=await axios.post("http://localhost:5000/sendotp",{email})
            const responseData=response.data;
            if(responseData.response==="0"){
                setResult("Invalid email")
            }
            else if(responseData.response==="1"){
                localStorage.setItem('otp',responseData.otp)
                localStorage.setItem('email',responseData.email)
                localStorage.setItem("usertype",responseData.usertype)
                navigate('/otp')
            }
        }
        otpData();
        
    }
  return (
    <div className='logincontainer'>
    <center><h3 className='display-6'>Send OTP to Email</h3></center>
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
    </div>
  <center><button type="submit" className="btn btn-outline-danger">Send OTP</button></center>
</form><br/>
<div className="container">
      <div className="row">
          <center>
            <h6>{result}</h6>
          </center>
      </div>
    </div>
</div>
  )
}
