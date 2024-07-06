import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Nav.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">GUEST BOOK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>        <li className="nav-item">
          <Link className="nav-link" to="/feedbacks">Feedbacks</Link>
        </li>
        <li>
          <Link to='/confirm'><button className='btn btn-danger' id='loginbutton'>Login</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
