import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Guestdashboard() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
                <nav>
                  <li><Link to='/guestdashboard'>Submitfeedback</Link></li>
                  <li><Link to='/guestdashboard/feedbacks'>My Feedbacks</Link></li>
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
