import React from 'react'
import './Hero.css'
import hero from '../../assets/images/hero.jpg'

const Hero = () => {
  return (
    <div className="hero container">
      <div className='hero-text'>
        <h1>Empowring Communities Through Innovation and Education</h1>
        <button className='btn'>Learn More
          <span class="material-symbols-outlined">
            arrow_forward
          </span>

        </button>
      </div>

    </div>
  )
}

export default Hero
