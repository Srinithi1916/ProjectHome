import React, { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Paper } from '@mui/material';


const Kitchen = () => {
  const [open, setOpen] = useState(false);
  const [book, setBookOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    whatsappUpdates: false,
  });

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let i;
      let slides = document.getElementsByClassName('mySlides');
     
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
     
      slides[slideIndex - 1].style.display = 'block';
    
      setTimeout(showSlides, 2000); 
    };
    showSlides();
  }, []);

  const handleOpen = (image) => {
    setImageSrc(image);
    setOpen(true);
  };

  const handleOpen1 = (image) => {
    setImageSrc(image);
    setBookOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloser = () => {
    setBookOpen(false);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      whatsappUpdates: e.target.checked,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const cardData = [
    
    {
      image: "https://fabdiz.com/wp-content/uploads/2022/05/Untitled-design-15.jpg",
      title: "Culinary Haven",
      description: "A well-equipped, inspiring space where cooking becomes an art, blending functionality with creativity for delightful meals."
    },
    {
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Recipe Room",
      description: "A functional, inviting space designed for creating delicious dishes, with ample storage and tools for culinary exploration."
    },
    {
      image: "https://wallpapers.com/images/high/grey-and-white-modular-kitchen-picture-pqhi27k7uzzcivh4.webp",
      title: "Cooking Nook",
      description: "A cozy, well-organized corner ideal for preparing meals, with efficient storage and a warm, welcoming atmosphere."
    },
    {
      image: "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-1643351360-ZAORQ/3d-team-1651477394-vrRr8/jfm-1651477408-yU7HY/2022-05-19-clin320-kt01-op1-v1-mu-01-1653764287-XsXij.jpeg",
      title: "Chef’s Corner",
      description: "A stylish, efficient workspace designed for culinary creativity, featuring top-notch tools and a sleek, organized layout."
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/85/09/93/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.jpg",
      title: "Kitchen Retreat",
      description: "A relaxing, well-appointed space where cooking becomes a pleasure, offering comfort and functionality for enjoyable meal preparation."
    },
    {
      image: "https://www.wakefit.co/guides/wp-content/uploads/2023/01/space-saving-furniture-1.jpg",
      title: "Flavor Factory",
      description: "A vibrant, dynamic kitchen designed for experimenting with spices and ingredients, turning every meal into a flavorful experience."
    },
    {
      image: "https://wallpapers.com/images/hd/grey-modular-kitchen-with-lights-picture-f9ndjpdmwd8fpy1u.jpg",
      title: "Kitchen Oasis",
      description: "A tranquil, well-organized space where cooking and dining become a serene experience, blending comfort with functionality."
    },
    {
      image: "https://media.designcafe.com/wp-content/uploads/2020/05/09150825/blue-and-white-modular-kitchen-design.jpg",
      title: "Epicurean Space",
      description: "A refined kitchen designed for culinary exploration, blending elegance with practicality for gourmet creations."
    },
    {
      image: "https://www.regalokitchens.com/images/chic-u-shaped-modular-kitchen-design.jpg",
      title: "The Cookery",
      description: "A stylish kitchen designed for culinary creativity, featuring modern tools and a welcoming atmosphere."
    }
  ];

  return (
    <div className='living'>

<br></br>

<center>
        <h1>Kitchen Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://t4.ftcdn.net/jpg/05/85/09/93/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://media.designcafe.com/wp-content/uploads/2020/05/09150825/blue-and-white-modular-kitchen-design.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://www.wakefit.co/guides/wp-content/uploads/2023/01/space-saving-furniture-1.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
        </div>
      </center>
      <br />
      

  </Paper>
      </center>









      <div className="projects-container">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="card"
              sx={{
                backgroundColor: '#F1EAFF',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                width: '30%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(card.image)} style={{color:"#674188",fontSize:"15px"}}><b>Learn More</b></Button>
              </CardActions>
              <div className='leo'>
                <Button>
                  <b style={{color:"#674188",fontSize:"15px"}} onClick={() => handleOpen1(card.image)}>Book For Free Consultant</b>
                </Button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
           
                <a href="/quote" target="_blank"><Button>Get Quote</Button> </a>
                
              </div>
            </Card>
          ))}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <img src={imageSrc} alt="Detailed view" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Modal>

        <Modal
          open={book}
          onClose={handleCloser}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleCloser}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img src={imageSrc} alt="Consultant view" style={{ width: '100%', height: '100%' }} />
              <form onSubmit={handleFormSubmit} style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '900px', 
                transform: 'translate(-50%, -50%)',
                width: '400px', 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                padding: '20px', 
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <Typography variant="h6" component="h2">
                  Talk to a designer
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Property Name"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleInputChange}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.whatsappUpdates}
                      onChange={handleCheckboxChange}
                      name="whatsappUpdates"
                    />
                  }
                  label="Get updates on WhatsApp"
                />
                <Button type="submit" variant="contained" style={{backgroundColor:"#ac844d",color:"white"}}>
                  Submit
                </Button>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
};

export default Kitchen;