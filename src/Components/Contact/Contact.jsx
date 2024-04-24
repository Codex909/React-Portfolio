import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact=()=>{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7377b210-e196-44d6-a5b5-961e41d70269");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json,
          
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
        else{alert("Message not delivered, alert")}
      }
return(
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="No img" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>I'm currently looking for job opportunities, so feel free to send me a message. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <img src={mail_icon} alt="Not found" />  <p>hatemalsharif333@gmail.com</p>                        
                    </div>
                    <div className="contact-detail">
                     <img src={call_icon} alt="Not found" />  <p>+971 547078507</p>
                    </div>
                    <div className="contact-detail">
                      <img src={location_icon} alt="Not found" /><p>UAE,Dubai</p>
                     </div>
                 </div>    
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                 <label htmlFor=''>Your name</label>
                 <input type="text" placeholder='Enter your name' name='name' />
                 <label htmlFor=''>Your email</label>
            
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor=''>Write your message here</label>
            <textarea name="message" rows="8"placeholder='Enter your mesage'/>
            <button type='submit'className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
)
}

export default Contact