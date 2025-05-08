import React from 'react'
import './Navbar.css'
import GeneralButton from './GeneralButton'
import Head from './assets/header.jpeg'
import RightHead from './assets/hire1.jpeg'
import X from './assets/X.png'
import Insta from './assets/instagram.jpeg'
import Git from './assets/git.png'
import Email from './assets/email.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  const [isDisplayHeader, setisDisplayHeader] = useState(false)

  function handleDisplay() {
    setisDisplayHeader(!isDisplayHeader)
  }

  return (
    <div className='header'>
     <div className='left-side' >
        <span className='header-image'><img src={Head} style={{height:'70px'}} alt='header'/></span>
        <button className='header-text icon-button' onClick={handleDisplay}>{!isDisplayHeader? "Menu" : "Close"} </button>
        <div className='header-content' style={{ display: isDisplayHeader ? 'block' : 'none' }}>
          <div className='Header-Icons'><span> <img src={X} className='icon-button' style={{ height: '30px' }} /> </span>
            <span> <img src={Insta} className='icon-button' style={{ height: '30px' }} /> </span>
            <span> <img src={Git} className='icon-button' style={{ height: '30px' }} /> </span>
            <span> <img src={Email} className='icon-button' style={{height: '30px'}} /> </span>
          </div>
          <div className='grouplinks'>
            <div className='headerlinks'>
              <Link className='t' to="Home"> Home</Link>
              <Link className='t' to="Work"> Work</Link>
              <Link className='t' to="About"> About</Link>
              <Link className='t' to="Writing"> Writing</Link>
            </div>
            <div className='grouplinks-contents'><span className='letter'> Back to home page</span>
              <span className='letter'> My approach to development</span>
              <span className='letter'> A little about my background</span>
              <span className='letter'> My latest writing on tech and language</span>
            </div>
          </div>
        </div>
     </div>
     <div className='right-side'>
        <span className='rightheader-image'><img src={RightHead} style={{ height: '40px' }} /> </span>
        <Link to="mailto:alfreddacosta75@gmail.com"> <button  className='rightheader-text icon-button' > Hire me </button></Link>
     </div>
    </div>
  )
}
export default Navbar
