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

const Beachhouse = () => {
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
      image: "https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_761,h_585,dpr_1.5/f_auto,q_auto/v1640999675/wordpress_assets/26477-CoastalBungalow-Aged-Pewter-a-ok.jpg?_i=AA",
      title: "Lizards",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
    },
    {
      image: "https://cdn.onekindesign.com/wp-content/uploads/2020/03/Modern-Zen-House-Brandon-Architects-01-1-Kindesign.jpg",
      title: "Living Room",
      description: "This is a beautifully designed living room with modern furniture and elegant decor."
    },
    {
      image: "https://media.architecturaldigest.com/photos/56ab9f582f0677ce5b668c2c/master/w_2580%2Cc_limit/marc-anthony-03.jpg",
      title: "Modern Living Space",
      description: "A contemporary living space featuring stylish furniture and a cozy atmosphere."
    },
    {
      image: "https://media.architecturaldigest.com/photos/56bbc3cfd33292707c633212/master/w_2580%2Cc_limit/tropical-retreats-02.jpg",
      title: "Cozy Interior",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://media.architecturaldigest.com/photos/56bbc3d0a254b168296a93b5/master/w_2580%2Cc_limit/tropical-retreats-04.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://media.architecturaldigest.com/photos/56bbc3d3a254b168296a93bd/master/w_2580%2Cc_limit/tropical-retreats-08.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/4/15/0/HUHH2020-Beachfront_Kihei-HI-13.JPG.rend.hgtvcom.791.527.suffix/1586973887499.jpeg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/4/16/1/HUHH2020-Beachfront_EWA-Beach-HI_013.jpg.rend.hgtvcom.791.527.suffix/1587077530056.jpeg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/22/1/HUHH2019-Waterfront_Lahaina-HI_6.jpg.rend.hgtvcom.791.527.suffix/1555948214925.jpeg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    }
  ];

  return (
    <div className='living'>
         
<br></br>

<center>
        <h1>Beachhouse Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.onekindesign.com/wp-content/uploads/2020/03/Modern-Zen-House-Brandon-Architects-01-1-Kindesign.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://media.architecturaldigest.com/photos/56ab9f582f0677ce5b668c2c/master/w_2580%2Cc_limit/marc-anthony-03.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/4/15/0/HUHH2020-Beachfront_Kihei-HI-13.JPG.rend.hgtvcom.791.527.suffix/1586973887499.jpeg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/4/22/1/HUHH2019-Waterfront_Lahaina-HI_6.jpg.rend.hgtvcom.791.527.suffix/1555948214925.jpeg" style={{ width: '100%', maxHeight: '500px' }} />
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

export default Beachhouse;