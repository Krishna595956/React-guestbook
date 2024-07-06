import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Userregister from './Guestbook/Userregister';
import Userlogin from './Guestbook/Ulogin'
import Guestregister from './Guestbook/Guestregister';
import Guestlogin from './Guestbook/Guestlogin';
import Collegelogin from './Guestbook/Collegelogin'
import Collegeregister from './Guestbook/Collegeregister'
import Adminlogin from './Guestbook/Adminlogin'
import Reset from './Guestbook/Reset';
import Admindashboard from './Guestbook/Admindashboard';
import Userdashboard from './Guestbook/Userdashboard';
import Collegedasboard from './Guestbook/Collegedasboard';
import Guestdashboard from './Guestbook/Guestdashboard';
import Navbar from './bootstrap/Navbar';
import Home from './Guestbook/Home';
import Contact from './Guestbook/Contact';
import About from './Guestbook/About';
import Confirmation from './Guestbook/Confirmation';
import Email from './Guestbook/Email';
import Otp from './Guestbook/Otp';
import Feedback from './Guestbook/Feedback';
import Feedbacks from './Guestbook/Feedbacks';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/confirm' element={<Confirmation/>}/>
        <Route path='/userregister' element={<Userregister/>}/>
        <Route path='/userlogin' element={<Userlogin/>}/>
        <Route path='/guestlogin' element={<Guestlogin/>}/>
        <Route path='/guestregister' element={<Guestregister/>}/>
        <Route path='/collegeregister' element={<Collegeregister/>}/>
        <Route path='/collegelogin' element={<Collegelogin/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/forgot' element={<Reset/>}/>
        <Route path='/admindashboard' element={<Admindashboard/>}>
          <Route index element={<Feedbacks/>}/>
          <Route path='/admindashboard/collegeregister' element={<Collegeregister/>}/>
          <Route path='/admindashboard/guestregister' element={<Guestregister/>}/>
        </Route>
        <Route path='/userdashboard' element={<Userdashboard/>}>
        <Route index element={<Feedbacks/>}/>
        </Route>
        <Route path='/collegedashboard' element={<Collegedasboard/>}>
          <Route index element={<Feedbacks/>}/>
        </Route>
        <Route path='/guestdashboard' element={<Guestdashboard/>}>
            <Route index element={<Feedback/>}/>
            <Route path='/guestdashboard/feedbacks' element={<Feedbacks/>}/>
        </Route>
        <Route path='/email' element={<Email/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/feedbacks' element={<Feedbacks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
