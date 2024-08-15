import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg'
import locatation_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
       <div className="contact-left">
        <h1>Let's Talk</h1>
        <p>i am currently avaliable to take on new projecs , so feel free</p>
       </div>
       <div className="contact-details">
        <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>atulranjan164@gmail.com</p>
        </div>
        <div className="contact-detail">
           <img src={locatation_icon} alt="" />
        </div>
        <div className="contact-detail">
          <img src={call_icon} alt="" />
          <p>7324086918</p>
        </div>
       </div>
       
      <form action=" " className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter Your Name" name="name "/>
        <label htmlFor="">Your Email</label>
        <input type="email"  placeholder="Enter Your Email" name="email"/>
        <label htmlFor="">Write Your massage here</label>
        <textarea name="" id=""  rows="8" placeholder="Enter Your message"></textarea>
        <button type="submit" className="contact-submit">
          Submit Now
        </button>

      </form>
      </div>
    </div>
  );
}

export default Contact;
