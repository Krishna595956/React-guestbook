import React from "react";
import '../css/Confirm.css'
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <>
      <div className="buttons-container">
        <center><h1>Select user</h1></center>
        <button className="confirmButton"  ><Link to='/userlogin' id='btn-lks'>User</Link></button>
        <br />
        <button className="confirmButton"><Link to="/collegelogin" id='btn-lks'>College</Link></button>
        <br />
        <button className="confirmButton"><Link to='/guestlogin' id='btn-lks'>Guest</Link></button>
        <br />
        <button className="confirmButton"><Link to='/adminlogin' id='btn-lks'>Admin</Link></button>
        <br />
      </div>
    </>
  );
}
