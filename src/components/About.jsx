import React from 'react'
import john from './images/john.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img width="" src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>This is my altschool second semester Examination project, As altschool Engineering student, specifically At the frontend, We always go beyong our Boundries to get things Done!</p>
                    <p>I am John, a frontend student at altschool africa</p>
                    <a className='button' href='https://altschoolafrica.com/' target='_blank'>Explore Altschool</a>
                </div>
            </div>
        </div>
    )
}

export default About
