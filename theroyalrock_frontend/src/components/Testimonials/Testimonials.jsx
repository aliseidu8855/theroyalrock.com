import React, { useRef } from 'react'
import './Testimonials.css'
import logo from "../../assets/images/The-Royal-Rock-Logo.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -100) {
            tx -= 50;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 50;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='testimonials-container'>
            <div className='left'>
                <img src={logo} alt='logo' loading="lazy" />
            </div>
            <div className='right'>
                <h3>Testimonials</h3>
                <div className='testimonials'>
                    <ul ref={slider}>
                        <li>
                            <div className='testimonial'>
                                <p>
                                    &quot;
                                    The air-conditioning and refrigeration training provided by
                                    The Royal Rock Foundation has been truly tranformative for our team.
                                    The comprehensive curriculum and hands-on training approach have equqipped
                                    us with the skills and knowledge needed to excel in our field.
                                    &quot;
                                </p>
                                <h4> Client Testimonial </h4>
                            </div>
                        </li>

                        <li>
                            <div className='testimonial'>
                                <p>
                                    &quot;
                                    Working with The Royal Rock on health outreach programs has been tranformative
                                    for our organization. Together, we have reached remote communities and made a tangible
                                    impact on improving healthcare access and outcomes.
                                    &quot;
                                </p>
                                <h4> Partner Feedback</h4>
                            </div>
                        </li>
                    </ul>





                </div>
                <div className='test-buttons'>
                <ArrowBackIcon style={{ fontSize: 50, color: 'white' }} className='test-back' onClick={slideBackward} />
                <ArrowForwardIcon style={{ fontSize: 50, color: 'white' }} className='test-next' onClick={slideForward} />
                </div>
            </div>

        </div>
    )
}

export default Testimonials
