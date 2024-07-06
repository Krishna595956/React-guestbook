import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Userdashboard() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
                <nav>
                  <li><Link to='/admindashboard'>Feedbacks</Link></li>
                  <li><Link to='/admindashboard/collegeregister'>Register college</Link></li>
                  <li><Link to='/admindashboard/guestregister'>Register guest</Link></li>
                  <li><Link to='/'>Logout</Link></li>
                </nav>
            </div>
            <div className='col-8'>
              <Outlet/>
            </div>
        </div>
      </div>
    </>
  )
}
