import React from 'react'
import SocialMedia from './SocialMedia'
import '../../App.css';
import './ContactStyle.css';
import { HashLink } from 'react-router-hash-link';
function ContactMe() {
  return (
    <div className='containerConnect' id="connect">
      <h2 className='letsConnect'>Connect</h2>
                
                <p className='textConnect'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</p>
                <a href='mailto:sarawork.m@gmail.com' className="button"><span>Let’s Connect</span></a>
                <div className='ContainerIcons'>
                  <SocialMedia />
                </div>
             
    </div>

    
  )
}

export default ContactMe