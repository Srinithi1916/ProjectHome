import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTwitter } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
  
    const data = {
      access_key: '98e6c59f-a855-488d-9fd7-ef9a6dc605f4',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Error', result);
        setResult(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while submitting the form.');
    }
  };
  

  return (
    <div style={{ backgroundColor: '#C8A1E0' }}>
      <div className="contact-container" >
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information about our services.</p>
        <div className="contact-sections" >
          <div className="contact-section" style={{background:'#F1EAFF'}}>
            <h2>Interior Design</h2>
            <center>

            <img src="https://images5.alphacoders.com/134/thumb-1920-1347174.png" style={{width:"330px",height:"250px"}}></img>
            </center>
           
            <p>Our interior design services will transform your living space into a stylish and comfortable haven. We specialize in creating personalized designs that reflect your unique taste and lifestyle.</p>
          </div>
          <div className="contact-section"  style={{background:'#F1EAFF'}}>
            <h2>Exterior Design</h2>
            <center>
              
            <img src="https://image.cdn2.seaart.ai/2023-06-26/38788531155013/29b22a2bd3cfc0dd390815cab0f48a82dc47cef5_high.webp" style={{width:"330px",height:"250px"}}></img>
            </center>

            <p>Enhance the curb appeal of your home with our exterior design services. We focus on creating beautiful and functional outdoor spaces that you can enjoy all year round.</p>
          </div>
          <div className="contact-section"   style={{background:'#F1EAFF'}}>
            <h2>Cost Efficiency</h2>
            <center>
              
            <img src="https://www.fujifilm.com/fbhk/-/media/fbhk/7,-d-,-insights/1027683138_1920x1080.jpg?h=1080&w=1920&la=en&hash=63112B36D84204CA15B5B99BA0781C02" style={{width:"330px",height:"250px"}}></img>
            </center>

            <p>We offer cost-efficient design solutions that maximize the value of your investment. Our team ensures that you receive the best quality services within your budget.</p>
          </div>
        </div>

        <div className="feedback-form"  style={{background:'#F1EAFF'}}>
          <h2>Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          <span>{result}</span>
        </div>

        <footer className="contact-footer" style={{ backgroundColor: '#674188' }}>
          <div className="footer-content">
            <div className="social-media">
              <h3>Follow Us</h3>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ color: "black", height: '40px', width: '40px' }} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon style={{ color: "black", height: '40px', width: '40px' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: "black", height: '40px', width: '40px' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon style={{ color: "black", height: '40px', width: '40px' }} />
              </a>
            </div>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>Address: 123 Design Street, Cityville, ST 12345</p>
              <p>Email: contact@designservices.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="other-locations">
              <h3>Other Locations</h3>
              <p>District 1: 456 Another Street, Districtville, ST 67890</p>
              <p>District 2: 789 Another Road, Districtville, ST 11223</p>
            </div>
            <div className="fast-access">
              <h3>Fast Access</h3>
              <p><a href="#interior" style={{ color: 'black' }}>Interior Design</a></p>
              <p><a href="#exterior" style={{ color: 'black' }}>Exterior Design</a></p>
              <p><a href="#cost-efficiency" style={{ color: 'black' }}>Cost Efficiency</a></p>
              <p><a href="#feedback" style={{ color: 'black' }}>Feedback</a></p>
            </div>
            <br />
          </div>
          <br />
        </footer>
      </div>
    </div>
  );
};

export default Contact;