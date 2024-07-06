import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:5000/adminlogin", {
      email,
      password,
    });
    const responseData = resp.data;
    if (responseData["response"] === "1") {
      localStorage.setItem('token',responseData.token)
      navigate("/admindashboard");
    } else if (responseData["response"] === "0") {
      setResult("Invalid credentials");
    } else {
      setResult(responseData["response"]);
    }
  };
  return (
    <div className="logincontainer">
      <center>
        <h3 className="display-6">Admin Login</h3>
      </center>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <center>
          <button type="submit" className="btn btn-outline-danger">
            Login
          </button>
        </center>
      </form>
      <br />
      <div className="container">
        <div className="row">
          <center>
            <h6>{result}</h6>
          </center>
        </div>
      </div>
      <br />
    </div>
  );
}
