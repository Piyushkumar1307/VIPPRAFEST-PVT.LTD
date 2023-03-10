import React from 'react'
import Header from '../../Header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
          <Header/>
          <div className='the-best-ad '>
            <div></div>
            <span>We believe in your dream</span>
          </div>

          <div className='hero-text'>
            <div>
              <span className='stroke-text'>VIPPRAFEST</span>
            <span>PVT.LTD</span>
            </div>
            <div><span>Hello there!</span></div>
          </div>
        </div>
        <div className="right-h"></div>
        </div>
  )
}

export default Hero