import React from 'react'
import './HeroSection.css'
import GeneralButton from './GeneralButton'
import { Link } from 'react-router-dom'
import button from './assets/button.jpg'

function HeroSection() {
  return (
    <div className='hero'>
      <div className='hero-contents'>
      <div className='hero-header'><h1> Let's work together</h1></div>
      <div className='line'><hr/></div>
      <div className='hero-body'>
        <p>From interaction design to scaleable design systems, single-page apps to something more experimental with React. I help awesome people to build ambitious yet accessible web projects - <b>the wilder, the better.</b>
        </p>
      </div>
      <div className='img-side'><Link to='/Home'><GeneralButton className="button" buttonText="About"/></Link></div>
      </div>
    </div>
  )
}

export default HeroSection
