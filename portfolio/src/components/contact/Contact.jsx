import React from 'react'
import { useState } from "react";
import "./contact.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
          <div className="links">
          <a href="https://www.linkedin.com/in/praveen-kumar-b14381187/"><LinkedInIcon fontSize="large"/></a>
          <a href="https://github.com/praveen420coder"><GitHubIcon fontSize="large"/></a>
          <a href="https://www.linkedin.com/in/praveen-kumar-b14381187/"><TwitterIcon fontSize="large"/></a>


        </div>
        </div>
        
      </div>
    );

};

export default Contact
