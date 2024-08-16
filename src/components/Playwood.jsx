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

const Playwood = () => {
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
      image: "https://image.architonic.com/pro2-3/20269516/19-wall-cladding-bruag-oak-plywood-18mm-perforation-koblenz-bank-raiffeisen-heimberg-2-pro-b-arcit18.jpg",
      title: "Sacred Sanctuary",
      description: "A serene, devoted space designed for spiritual practices, meditation, and reverent worship."
    },
    {
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/teak-wood-main-door-carving-designs.png",
      title: "Divine Nook",
      description: "A tranquil, sacred space designed for spiritual reflection, meditation, and personal devotion."
    },
    {
      image: "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Glazed_door_design_18029339b3.webp",
      title: "Spiritual Space",
      description: "A peaceful, dedicated area designed for meditation, reflection, and personal spiritual growth."
    },
    {
      image: "https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Jali_Door_Design_90d916cef7.webp",
      title: "Faithful Haven",
      description: "A serene, sacred space designed for worship, meditation, and deep spiritual connection."
    },
    {
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/burma-teak-wood-main-door-design.png",
      title: "Holy Alcove",
      description: "A serene, intimate space crafted for prayer, meditation, and spiritual reflection."
    },
    {
      image: "https://s.alicdn.com/@sc04/kf/H7e172b042f034210ab25f9f72178f2206.jpg",
      title: "Reverence Room",
      description: " A tranquil, dedicated space for deep prayer, meditation, and spiritual contemplation."
    },
    {
      image: "https://s.alicdn.com/@sc04/kf/H8d8f0f1556d64b9896f9d5e9dc5e6d7fV.jpg",
      title: "Blessing Chamber",
      description: " A serene, sacred space designed for prayer, reflection, and receiving spiritual blessings."
    },
    {
      image: "https://s.alicdn.com/@sc04/kf/H7c786360b35743c0a481f5f45e82f65fF.jpg_720x720q50.jpg",
      title: "Serenity Shrine",
      description: "A peaceful, sacred space dedicated to meditation, prayer, and spiritual tranquility."
    },
    {
      image: "https://s.alicdn.com/@sc04/kf/H6b6a7b0894c347b699bf9ede72178828f.jpg",
      title: "Meditation Corner",
      description: "A calm, secluded space designed for focused meditation, relaxation, and inner peace."
    }
  ];

  return (
    <div className='living'>
         
<br></br>

<center>
        <h1>Playwood Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://image.architonic.com/pro2-3/20269516/19-wall-cladding-bruag-oak-plywood-18mm-perforation-koblenz-bank-raiffeisen-heimberg-2-pro-b-arcit18.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cms.interiorcompany.com/wp-content/uploads/2023/11/teak-wood-main-door-carving-designs.png" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Glazed_door_design_18029339b3.webp" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/Jali_Door_Design_90d916cef7.webp" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
        </div>
      </center>
      <br />
      {/* <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}

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
                <a href="/quote"><Button>Get Quote</Button> </a>
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

export default Playwood;