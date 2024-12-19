import React from 'react'
import './Hero.css'
import hero from '../../assets/images/hero.jpg'
import SlideshowIcon from '@mui/icons-material/Slideshow';


const Hero = ({ header, subheader, heroBg }) => {
  return (
    <div
      className="hero container"
      style={{
        background: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-text">
        <h1>{header}</h1>
        <p>{subheader}</p>
      </div>
    </div>
  )
}

export default Hero
