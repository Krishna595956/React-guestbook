import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Guestregister() {
  const [response,setResponse]=useState('')
    const [data,setData]=useState({
        "name":"",
        "code":"",
        "email":"",
        "password":"",
        "rpassword":"",
        "address":""
    })
    const chaneHandler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const {name,code,email,password,rpassword,address}=data;
    const navigate=useNavigate()
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(name,email,password,rpassword)
      const registerUser=async ()=>{
        const response = await axios.post("http://localhost:5000/collegeregister",data);
        const responseData = response.data;
        console.log(responseData)
        if (responseData.response === "0") {
          setResponse("Passwords do not match");
        } else if (responseData.response === "1") {
          alert('Registration successful')
          navigate("/collegelogin");
        }
        else if(responseData.response==="2"){
          setResponse("Email already exists")
        }
        else{
          setResponse(responseData.response)
        }
      }
      registerUser();
  
    };

  return (
    <div className="logincontainer">
        <center><div className="display-5">College register</div></center>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label  className="form-label">
            College name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            placeholder="Enter college name"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            College code:
          </label>
          <input
            type="number"
            className="form-control"
            value={code}
            name="code"
            placeholder="Enter college code"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            placeholder="Enter college email"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            name="password"
            placeholder="Enter your password"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Re-enter Password
          </label>
          <input
            type="password"
            className="form-control"
            value={rpassword}
            name="rpassword"
            placeholder="Re-enter your password"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            value={address}
            name="address"
            placeholder="Enter college address"
            onChange={chaneHandler}
          />
        </div>
        <center>
        <button type="submit" className="btn btn-outline-success">
          Register
        </button>
        </center>
      </form><br/>
      <div className="container">
      <div className="row">
          <center>
            <h6>{response}</h6>
          </center>
      </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div>
            <p>
              Already have an account? <Link to="/collegelogin" className="loglink">Login</Link>             
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
