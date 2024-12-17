import React from 'react'
import './Gallary.css'
import photo1 from "../../assets/images/gallary/photo1.jpg"
import photo2 from "../../assets/images/gallary/photo2.jpg"
import photo3 from "../../assets/images/gallary/photo3.jpg"

const Gallary = () => {
  return (
    <div className='gallary-photos'>
        <div className='gallary-photo'>
            <img src={photo1} alt='photo1' />
        </div>
        <div className='gallary-photo'>
            <img src={photo2} alt='photo2' />
        </div>
        <div className='gallary-photo'>
            <img src={photo3} alt='photo3' />
        </div>
      
    </div>
  )
}

export default Gallary
