import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About=()=>{
    return(
        <div id='about' className='about'>
            
            <div className="about-title">
            <h1>About me</h1>
             <img src={theme_pattern} style={{fill:"#FFFFF"}} alt="Theme" />
            </div>
           <div class className="about-sections">
            <div className="about-left">
            
            </div>
             
                <div className=" about-right">
                    <div classname="about-para">
                        <p>My fascination with web development stems from its dynamic nature and its potential to reach a global audience. I have hands-on experience with front-end technologies such as HTML, CSS, and JavaScript, which I have used to build responsive and visually appealing user interfaces. Additionally, I am proficient in popular libraries and frameworks like React.js, which I leverage to create interactive and feature-rich web applications.</p>
                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Html & CSS</p><hr style={{width:"53%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Graphic Design</p><hr style={{width:"50%"}}/></div>
                        
                    
                    </div>
                </div>
                
           </div>
           
           <br></br><br></br>
        
        </div>
    )


}

export default About