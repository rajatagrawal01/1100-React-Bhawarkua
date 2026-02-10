import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


export default function Redirect() {
  return (
    <div className='container'>
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}