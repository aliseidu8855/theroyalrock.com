import React, { useRef } from 'react'
import './Gallery.css'
import photo1 from "../../assets/images/gallery/photo1.jpg"
import photo2 from "../../assets/images/gallery/photo2.jpg"
import photo3 from "../../assets/images/gallery/photo3.jpg"
import photo4 from "../../assets/images/gallery/photo4.jpg"
import photo5 from "../../assets/images/gallery/photo5.jpg"
import photo6 from "../../assets/images/gallery/photo6.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircle from '@mui/icons-material/PlayCircle';

const Gallery = () => {

    const slider = useRef();
    let tx = 0;



    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }







    return (
        <div className='gallery-container'>
            <ArrowBackIcon style={{ fontSize: 50, color: 'white' }} className='back-btn' onClick={slideBackward} />
            <ArrowForwardIcon style={{ fontSize: 50, color: 'white' }} className='next-btn' onClick={slideForward} />


            <div className='gallery-photos-slider'>

                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <img src={photo1} alt='photo1' />
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <img src={photo2} alt='photo1' />
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <img src={photo3} alt='photo1' />
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <img src={photo4} alt='photo1' />
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <img src={photo5} alt='photo1' />
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <img src={photo6} alt='photo1' />
                        </div>
                    </li>
                </ul>
            </div>

            <button className='btn dark-btn'>
                See more here <PlayCircle />
            </button>
        </div>
    )
}

export default Gallery
