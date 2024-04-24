import React from "react";
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Not found"/>
                    <p>I am a frontend developer from UAE, with multible projects that showoff my abilitity and passion for this field</p>
                </div>
                <div className="footer-top-right">
                    
                <div className="footer-github">
                        <a href="https://github.com/codex909">Github</a></div>
                
                <div className="footer-linkedin">
                    <a href="https://linkedin.com/in/hatem-alsharif">LinkedIn</a>
                </div>
                </div>
            </div>
            <hr/>
            
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Hatem Alsharif. All rights reserved</p>
                
            </div>
            </div>
    )
}

export default Footer