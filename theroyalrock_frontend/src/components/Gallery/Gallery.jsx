import React from 'react'
import './Gallery.css'
import photo1 from "../../assets/images/gallery/photo1.jpg"
import photo2 from "../../assets/images/gallery/photo2.jpg"
import photo3 from "../../assets/images/gallery/photo3.jpg"

const Gallery = () => {
    return (
        <div className='gallery-photos'>
            <div className='gallery-photo'>
                <img src={photo1} alt='photo1' />
                <div className='caption'>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                    <p>View More</p>
                </div>
            </div>
            <div className='gallery-photo'>
                <img src={photo2} alt='photo2' />
                <div className='caption'>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                    <p>View More</p>
                </div>
            </div>
            <div className='gallery-photo'>
                <img src={photo3} alt='photo3' />
                <div className='caption'>
                    <span class="material-symbols-outlined">
                        arrow_forward
                    </span>
                    <p>View More</p>
                </div>
            </div>

        </div>
    )
}

export default Gallery
