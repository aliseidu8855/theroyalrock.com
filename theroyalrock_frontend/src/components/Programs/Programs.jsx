import React from 'react'
import './Programs.css'
import Add from "@mui/icons-material/Add";

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <h4>Training for a Sustainable Future </h4>
                <ul>
                    <li>We offer free Refrigeration and Air-conditioning training for the less
                        privileged in our communities.
                        With 70% being women and 30% of men.
                        We empower individuals with knowledge and resources to
                        promote responsible family planning practices and to bring awareness to
                        possible health issues
                    </li>
                    <li>We aim to offer Job opportunities
                        (both local and international) to individuals
                        who undergo our training to give them a source of income and livelihood.
                    </li>
                </ul>

                <button className='btn'>Read More <Add  style={{ fontSize: 22, color: 'white' }} className='more'/></button>
            </div>
            <div className='program'>
                <h4>Health Outreach Program: Improving Access to Healthcare </h4>
                <ul>
                    <li>Initiative: The Royal Rock, in partnership with local
                        health organizations,
                        is launching an initiative to extend
                        essential healthcare services to underserved rural areas.
                    </li>
                    <li>Focus Areas: This collaborative effort will prioritize primary
                        healthcare services, maternal and child health support,
                        disease prevention strategies, and comprehensive health education initiatives.
                    </li>
                </ul>
                <button className='btn'>Read More <Add style={{ fontSize: 22, color: 'white' }} className='more'/></button>
            </div>
        </div>
    )
}

export default Programs
