import React from 'react'
import Note from './assets/anime.gif'
import './Body.css'

function Body() {
  return (
    <div className='body'>
      <div className='img-side'>
        <div><img src={Note} style={{height:"250px"}} /></div>
      </div>
      <div className='content'>
        <h1> Note App</h1>
        <p>While learning front-end development, I wanted to build something useful for myself — so I created a simple, clean notes app. I focused on smooth interactions, a minimal UI, and an easy user experience. It started as a small coding challenge, but I've learned so much about state management, UI structure, and performance along the way.</p>
      </div>
    </div>
  )
}

export default Body
