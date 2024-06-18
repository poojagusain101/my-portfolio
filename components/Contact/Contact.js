'use client'
import React,  { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 

const Contact = () => {
    const form = useRef();

    const initialState = {
      user_name: '',
      user_email: '',
      message: ''
    };
  
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_mng7trm', 'template_kh8mz8x', form.current, {
          publicKey: 'npWUGa8SFH-aRHxkY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!'); 
            setFormData(initialState);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      }

  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Think we’d make a great team? I’m always open to discussing potential collaborations and how we can create something incredible together. Reach out and let’s make it happen!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <FaEnvelope/><p>poojagusain101@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <FaPhone/><p>+91 9872133996</p>
                    </div>
                    <div className="contact-detail">
                    <FaMapMarkerAlt/><p>Punjab Engineering College, Chandigarh</p>
                    </div>
                </div>
                </div>
                {/* <div className="contact-right"> */}
                    <form ref={form} onSubmit={sendEmail} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input name="user_name" type="text" placeholder='Enter Your Name' value={formData.user_name} onChange={handleChange} required/>
                    <label htmlFor="">Your Email</label>
                    <input name="user_email" type="email" placeholder='Enter your Email' value={formData.user_email} onChange={handleChange} required/>
                    <label htmlFor=""> Write Your Message</label>
                    <textarea name="message" rows='8' placeholder='Enter your Message'  value={formData.message} onChange={handleChange} required/>
                    <button  type="submit" value="Send" className='contact-submit'>Submit Now</button>
                    </form>
                {/* </div> */}
            </div>  
    </div>
  )
}

export default Contact
