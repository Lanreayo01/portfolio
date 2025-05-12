import React from 'react'
import AnimatedImage from './AnimatedImage'
import Navbar from './Navbar'
import Text from './Text'
import './Holding.css'
import { motion } from 'framer-motion';
import Scroll from './Scroll'
import HeroSection from './HeroSection'
import Learning from './Learning'
import Body from './Body'
import SecondBody from './SecondBody'
import HoldingSroll from './assets/scroll2.gif'


function Holding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      
    >
    <div className='hold'>

    <div className='nav'>
    <Navbar/>
    </div>
    
    <div className='all-body'>
    <div className='anima'>
    <AnimatedImage/>
    </div>
    
    <div className='text'>
    <Text/>
    </div>
    </div>
    
    <div>
      <Scroll imgSrc={HoldingSroll}/>
    </div>
    
    <div>
    <HeroSection/>
    </div>
    
    <div>
      <Learning/>
    </div>
    
    <div>
      <Body/>
    </div>
    
    <div>
      <SecondBody/>
    </div>
        
    </div>    
    </motion.div>
  )
}

export default Holding
