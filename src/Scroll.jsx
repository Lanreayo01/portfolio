import React from 'react'
import './Scroll.css'
import Scrol from './assets/scroll2.gif'

function Scroll({imgSrc}) {

  return (
    <div className='scroll-content'>
      <div className='scroll-img'><img src={imgSrc} style={{height:"400px"}} alt='Scroll Image' /></div>
    </div>
  )
}

export default Scroll
