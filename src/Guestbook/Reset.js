import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Reset() {
  const [result,setResult]=useState("")
  const [password, setPassword] = useState({
    newpassword: "",
    rnewpassword: "",
  });
  const navigate=useNavigate();

  const changeHandler = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(newpassword)
    const resetPass=async ()=>{
      const email=localStorage.getItem('email')
      const usertype=localStorage.getItem('usertype')
       const response=await axios.post('http://localhost:5000/resetpassword',{newpassword,rnewpassword,email,usertype})
       const responseData=response.data;
       if(responseData.response==="0"){
        setResult("passwords do not match")
       }
       else{
        localStorage.removeItem('usertype')
        localStorage.removeItem('email')
        navigate('/')
       }
    }
    resetPass();
  }
  const { newpassword, rnewpassword } = password;
  return (
    <>
      <div className="logincontainer">
        <center>
          <h3 className="display-6">Reset password</h3>
        </center>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              value={newpassword}
              onChange={changeHandler}
              name="newpassword"
              placeholder="Enter your new password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Re-enter new Password
            </label>
            <input
              type="password"
              className="form-control"
              value={rnewpassword}
              onChange={changeHandler}
              name="rnewpassword"
              placeholder="Re-enter your new password"
            />
          </div>
          <center>
            <button type="submit" className="btn btn-outline-danger">
              Reset
            </button>
          </center>
        </form><br/>
        <div className="container">
      <div className="row">
          <center>
            <h6>{result}</h6>
          </center>
      </div>
    </div><br/>
      </div>
    </>
  );
}
