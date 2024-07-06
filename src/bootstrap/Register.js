import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [result,setResult]=useState('')
  const navigate=useNavigate()
  const [data,setData]=useState({
    "email":'',
    "password":''
  })
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]}) 
  }
const {email,password}=data
  const submitHandler =async (e) => {
    e.preventDefault();
    const response=await axios.post('http://localhost:5000/register',{email,password});
    const rData=response.data;
    console.log(rData)
    if(rData['response']==="0"){
      setResult('User already exists.')
    }
    else{
      navigate('/login')
    }
  };
  return (
    <div className="logincontainer">
      <center>
        <h3 className="display-6">Register</h3>
      </center>
      <form onSubmit={submitHandler} method="post">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            value={data.email}
            placeholder="Enter your email"
            name="email"
            onChange={(changeHandler)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={data.password}
            placeholder="Enter your password"
            onChange={(e)=>{
              setData({...data,[e.target.name]:[e.target.value]})}}
            name="password"
          />
        </div>
        <center>
          <button type="submit" class="btn btn-outline-danger">
            Register
          </button>
        </center>
        <center>{result}</center>
      </form>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div>
            <p>
              Already have an account?
              <Link to="/login" id="reglink">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
