import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTwitter } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';

const Projects = () => {
  return (
    <div className="rio">

    <div className="projects-container">
      <h1>Our Projects</h1>
      <b>Our Dream Projects</b>
      <div className="cards-container" >
        <div className="card" style={{background:'#F1EAFF'}}>
          <img src='https://cdn.spark.app/media/housingcom/image/curated.gif'/>
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
        </div>
        <div className="card" style={{background:'#F1EAFF'}}>
          <img src='https://cdn.spark.app/media/housingcom/image/lighting2.gif'></img>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div className="card" style={{background:'#F1EAFF'}}>
          <img src='https://cdn.decorilla.com/imgp/gif/a4b66c54-42f9-4068-8965-4dc42a3bcd28/Online-interior-design-process-3D-renderings.gif'/>
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>






        
      </div>
      <br></br>



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



    
    </div>
  );
};

export default Projects;