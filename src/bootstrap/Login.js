import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault();
      const resp=await axios.post('http://localhost:5000/login',{email,password});
      const responseData=resp.data;
      if(responseData['response']==="1"){
        navigate('/')
      }
      else{
        navigate('/register')
      }
    };
  return (
    <div className='logincontainer'>
    <center><h3 className='display-6'>Login</h3></center>
      <form onSubmit={handleLogin}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
  </div>
  <center><button type="submit" class="btn btn-outline-danger">Login</button></center>
</form><br/>
<div className='container'>
<div className='row'>
    <div className='col-6'>
    <div><p>Don't have an account?  <Link to='/register' id="reglink">Register</Link></p></div>
    </div>
    <div className='col-6'><div><Link to='/forgot' id='forgot'>Forgot password?</Link></div></div>
  </div>
</div>
</div>
  )
}
