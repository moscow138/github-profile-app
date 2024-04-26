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
                    <p>This is my AltSchool second semester Examination project, As an AltSchool Engineering student, specifically At the front end, We always go beyond our Boundaries to get things Done!</p>
                    <p>I am John, a Front-end Engineering student at altschool africa</p>
                    <a className='button' href='https://altschoolafrica.com/' target='_blank'>Explore Altschool</a>
                </div>
            </div>
        </div>
    )
}

export default About
