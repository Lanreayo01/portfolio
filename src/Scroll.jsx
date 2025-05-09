import React from 'react'
import './Scroll.css'
import Scrol from './assets/scroll2.gif'

function Scroll() {

  return (
    <div className='scroll-content'>
      <div className='scroll-img'><img src={Scrol} style={{height:"400px"}} /></div>
    </div>
  )
}

export default Scroll
