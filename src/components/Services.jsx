import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTwitter } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';

const Services = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    issue: ''
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    
    const formData = new FormData();
    formData.append('access_key', '98e6c59f-a855-488d-9fd7-ef9a6dc605f4');
    formData.append('name', bookingDetails.name);
    formData.append('email', bookingDetails.email);
    formData.append('phone', bookingDetails.phone);
    formData.append('issue', bookingDetails.issue);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('Your service call has been booked successfully!');
        setBookingDetails({
          name: '',
          email: '',
          phone: '',
          issue: ''
        });
      } else {
        console.log('Error', data);
        setResult('There was an issue with your submission.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while submitting the form.');
    }
  };

  return (
    <div className='living'>
      <div className="services-container">
        <h1>Our Services</h1>
        <p>Explore our wide range of services to design your home.</p>
        <div className="services-sections">
          <div className="service-section" style={{background:'#F1EAFF'}}>
            <h2>Fast Delivery</h2>
            <img src="https://st5.depositphotos.com/3116407/67159/i/450/depositphotos_671594164-stock-photo-delivery-concept-illustrated-pictures-background.jpg" style={{width:"590px",height:"250px"}}></img>

            <p>We pride ourselves on providing fast delivery for all our products and services. Our efficient processes ensure that your needs are met promptly and reliably.</p>
          </div>
          <div className="service-section" style={{background:'#F1EAFF'}}>
            <h2>Easy Implementation</h2>
                        <img src="https://www.nerolac.com/sites/default/files/styles/1920x548/public/2023-04/false-ceiling-designs-top-6-types-of-false-ceiling-materials-3_0.jpg.webp?itok=0jt90-ja" style={{width:"590px",height:"250px"}}></img>

            <p>Our solutions are designed for easy implementation, making the process hassle-free for you. We provide clear guidance and support every step of the way.</p>
          </div>
          <div className="service-section" style={{background:'#F1EAFF'}}>
            <h2>Excellent Services</h2>
            <img src="https://img.freepik.com/free-photo/hand-touching-doing-mark-five-yellow-stars-black-background-best-customer-satisfaction-evaluation-good-quality-product-service_616485-33.jpg?w=1480&t=st=1723482573~exp=1723483173~hmac=3ffd073353e59cf4582ee93d302fc62dc02ebba688af1af27302212b8019f365" style={{width:"590px",height:"250px"}}></img>

            <p>We are committed to delivering excellent services to our customers. Our dedicated team works tirelessly to ensure you have the best experience possible.</p>
          </div>
          <div className="service-section" style={{background:'#F1EAFF'}}>
            <h2>Service Call Booking</h2>
            <p>If you need to book a service call for product repair, please fill out the form below:</p>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="issue">Issue:</label>
                <textarea
                  id="issue"
                  name="issue"
                  value={bookingDetails.issue}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Book Service Call</button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
      <footer className="contact-footer" style={{ backgroundColor: '#674188'}}>
        <div className="footer-content">
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{color:"black" , height:'40px', width:'40px'}} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{color:"black" , height:'40px', width:'40px'}} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={{color:"black" , height:'40px', width:'40px'}} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{color:"black" , height:'40px', width:'40px'}} />
            </a>
          </div>
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Address: 123 Design Street, Cityville, ST 12345</p>
            <p>Email: comforthomeinteriorexterior@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="other-locations">
            <h3>Other Locations</h3>
            <p>District 1: 456 Another Street, Districtville, ST 67890</p>
            <p>District 2: 789 Another Road, Districtville, ST 11223</p>
          </div>
          <div className="fast-access">
            <h3>Fast Access</h3>
            <p><a href="#interior" style={{color:'black'}}>Interior Design</a></p>
            <p><a href="#exterior" style={{color:'black'}}>Exterior Design</a></p>
            <p><a href="#cost-efficiency" style={{color:'black'}}>Cost Efficiency</a></p>
            <p><a href="#feedback" style={{color:'black'}}>Feedback</a></p>
          </div>
          <br></br>
        </div>
        <br></br>
      </footer>
    </div>
  );
};

export default Services;