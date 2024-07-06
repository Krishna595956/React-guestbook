import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [result,setResult]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const loginData= async ()=>{
            const response=await axios.post("http://localhost:5000/guestlogin",{email,password})
            const responseData=response.data;
            if(responseData.response==="0"){
                setResult("User does not exist")
            }
            else if(responseData.response==="1"){
              localStorage.setItem("token",responseData.token)
                navigate('/guestdashboard')
            }
            else if(responseData.response==="2"){
                setResult("Invalid credentials")
            }
            else{
                setResult(responseData.response)
            }
        }
        loginData();
    }
  return (
    <div className='logincontainer'>
    <center><h3 className='display-6'>Guest Login</h3></center>
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
  </div>
  <center><button type="submit" className="btn btn-outline-danger">Login</button></center>
</form><br/>
<div className="container">
      <div className="row">
          <center>
            <h6>{result}</h6>
          </center>
      </div>
    </div><br/>
<div className='container'>
<div className='row'>
    <div className='col-6'>
    <div><p>Don't have an account?  <Link to='/guestregister' id="reglink">Register</Link></p></div>
    </div>
    <div className='col-6'><div><Link to='/email' id='forgot'>Forgot password?</Link></div></div>
  </div>
</div>
</div>
  )
}
