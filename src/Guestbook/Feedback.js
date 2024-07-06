import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [result, setResult] = useState("");
  const [college, setCollege] = useState("");
  const [category, setCategory] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handled")
    const submitResponse = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:5000/subfeedback", {
        college,
        category,
        feedback,
        token,
      });
      const responseData = response.data;
      if (responseData.response === "0") {
        setResult("Unauthorized access");
      } else if (responseData.response === "1") {
        alert("Feedback submitted successfully")
        navigate('/guestdashboard')
      } else {
        setResult(responseData.response);
      }
    };
    submitResponse();
  };
  return (
    <div className="logincontainer">
      <center>
        <h3 className="display-6">Guest Login</h3>
      </center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="college">College:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        >
          <option value="">College</option>
          <option value="SACET">SACET</option>
          <option value="JNTUK">JNTUK</option>
        </select>
        <br />
        <label htmlFor="category">Category:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Events">Events</option>
          <option value="Events">Students</option>
        </select>
        <br />
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "150px" }}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <label for="floatingTextarea2">Write your feedback</label>
        </div>
        <center>
          <button type="submit" className="btn btn-outline-danger my-4 ">
            Submit Feedback
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
    </div>
  );
}
