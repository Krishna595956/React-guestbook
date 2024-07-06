import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [result,setResult]=useState('')
    const [otp,setOtp]=useState('')
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const otpData= async ()=>{
            const localotp=localStorage.getItem('otp')
            const response=await axios.post("http://localhost:5000/verifyotp",{otp,localotp})
            const responseData=response.data;
            if(responseData.response==="0"){
                setResult("Incorrect OTP")
            }
            else if(responseData.response==="1"){
                localStorage.removeItem('otp')
                navigate('/forgot')
            }
        }
        otpData();
        
    }
  return (
    <div className='logincontainer'>
    <center><h3 className='display-6'>Enter OTP sent </h3></center>
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">OTP:</label>
    <input type="number" className="form-control"  aria-describedby="emailHelp" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='Enter your OTP'/>
    </div>
  <center><button type="submit" className="btn btn-outline-danger">Verify OTP</button></center>
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
