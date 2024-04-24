import React from 'react'
import { Link as AnchorLink, animateScroll as scroll } from 'react-scroll'; // Import AnchorLink from react-scroll
import './Hero.css'
import hatem_img from '../../assets/hatem_img.svg'
import resume from '../../assets/HatemAlsharifResume.pdf'
const Hero = () => {

    return (
        <div id='home' className='hero'>
            <img src={hatem_img} alt='My Image'></img>
            <h1><span>I'm Hatem Alsharif,</span> frontend developer based in UAE.</h1>
            <p>Hey there! I'm a front-end developer with a passion for creating captivating user experiences. I'm on a journey to master the art of Front-End development. With a knack for crafting sleek interfaces and a hunger for learning, I'm ready to take on new challenges and contribute to exciting projects. Let's build something amazing together!</p>
            <div className="hero-action">
            <div>
                <AnchorLink to="contact" smooth className="hero-connect">Connect with me</AnchorLink>
            </div>
                 <div className="hero-resume">
        <a href={resume} download>My resume</a>
    </div>
            </div>
            
        </div>
        
        
    )
}

export default Hero