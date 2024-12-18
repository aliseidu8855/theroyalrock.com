import React from 'react'
import "./About.css"
import logo from "../../assets/images/The-Royal-Rock-Logo.png"

const About = () => {
    return (
        <div className='about'>
            <div className='about-content-left'>
                <img src={logo} alt='The Royal Rock Foundation' loading="lazy" />
            </div>
            <div className='about-content-right'>
                <h3>The Royal Rock Foundation</h3>
                <h2>Our Mission</h2>
                <p>At The Royal Rock Foundation, we are more than just an NGO; we are a beacon of empowerment, dedicated to revolutionizing communities through knowledge and innovation. Founded on the principles of compassion and progress, we specialize in three core areas: training in refrigeration/air-conditioning, promoting health and population control, and fostering safety consciousness.</p> <br />
                <p>Our commitment to education is unwavering. Through comprehensive training programs, we equip individuals with the skills and expertise needed to excel in the dynamic fields of refrigeration and air-conditioning. By providing these opportunities free of charge, we break down barriers to entry and pave the way for economic empowerment and sustainable livelihoods.</p>
            </div>
        </div>
    )
}

export default About
