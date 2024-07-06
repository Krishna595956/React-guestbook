import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Guestregister() {
  const [response,setResponse]=useState('')
    const [data,setData]=useState({
        "name":"",
        "mobile":"",
        "email":"",
        "gender":'',
        "password":"",
        "rpassword":"",
        "experience":""
    })
    const navigate=useNavigate();
    const chaneHandler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const {name,mobile,email,gender,password,rpassword,experience}=data
    console.log(gender)
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(name,email,password,rpassword)
      const registerUser=async ()=>{
        const response = await axios.post("http://localhost:5000/guestregister",data);
        const responseData = response.data;
        console.log(responseData)
        if (responseData.response === "0") {
          setResponse("Passwords do not match");
        } else if (responseData.response === "1") {
          alert('Registration successful')
          navigate("/guestlogin");
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
        <center><div className="display-5">Guest register</div></center>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Mobile:
          </label>
          <input
            type="number"
            className="form-control"
            value={mobile}
            name="mobile"
            placeholder="Enter your mobile number"
            onChange={chaneHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={chaneHandler}
          />
        </div>
        <label htmlFor="gender" className="form-label">
            Gender:
          </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value='male'
            onChange={chaneHandler}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value='female'
            onChange={chaneHandler}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="mb-3">
          <label  className="form-label">
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
            Experience:
          </label>
          <input
            type="number"
            className="form-control"
            value={experience}
            name="experience"
            placeholder="Enter your experience in years"
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
    </div><br/>
      <div className="container-fluid">
        <div className="row">
          <div>
            <p>
              Already have an account? <Link to="/guestlogin" className="loglink">Login</Link>
              
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
