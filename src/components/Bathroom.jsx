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


const Bathroom = () => {
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
      image: "https://goodhomes.wwmindia.com/content/2021/dec/maximise-bathroom-resized-azure-31640876561.jpg",
      title: "Refreshment Room",
      description: "A clean, rejuvenating space designed for personal care, relaxation, and daily refreshment."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-bathroom-with-green-vanity-unit-and-asian-paints-tiles-and-bath-fixtures/modern-bathroom-with-vanity-unit.jpg",
      title: "Bathing Sanctuary",
      description: "A serene, spa-like space designed for relaxation and rejuvenation during bath time."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/boho-bathroom-with-white-teak-lights/boho-bathroom-accessories.jpg",
      title: "Tranquil Tides",
      description: "A peaceful, calming bathroom space designed for relaxation and soothing personal care routines."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/bathroom-walls-with-white-marble-and-olive-green-3d-tiles/white-marble-bathroom.jpg",
      title: "Serenity Spa",
      description: " A luxurious, tranquil bathroom designed for ultimate relaxation and pampering."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/simple-grey-and-white-bathroom-with-wall-niche/grey-and-white-bathroom-with-niche-in-bathroom-wall.jpg",
      title: "Cleansing Cove",
      description: "A cozy, inviting bathroom space designed for thorough, refreshing personal care and relaxation."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/dark-grey-bathroom-with-white-framed-mirror-and-wall-wardrobe/dark-grey-bathroom-tiles.jpg",
      title: "Aqua Retreat",
      description: "A refreshing, serene bathroom space designed for relaxation and rejuvenation through water therapy."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/simple-bathroom-with-seamless-grey-wall-tiles-and-wooden-finish-flooring/grey-bathroom-wall-tiles.jpg",
      title: "Lavish Lavatory",
      description: "A luxurious, elegant bathroom space featuring high-end fixtures and a spa-like ambiance."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/grey-and-white-luxury-bathroom-with-marble-wall-tiles-and-printed-floor-tiles/grey-and-white-bathroom.jpg",
      title: "Blissful Bath",
      description: "A serene, indulgent bathroom designed for ultimate relaxation and rejuvenation."
    },
    {
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/marble-bathroom-with-shower-cubicle-and-wall-niches/marble-tile-bathroom-with-bathroom-niche.jpg",
      title: "Pamper Place",
      description: "A luxurious, comforting bathroom space dedicated to relaxation, self-care, and rejuvenation."
    }
  ];

  return (
    <div className='living'>
      <br></br>

      <center>
        <h1>Bathroom Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-bathroom-with-green-vanity-unit-and-asian-paints-tiles-and-bath-fixtures/modern-bathroom-with-vanity-unit.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/boho-bathroom-with-white-teak-lights/boho-bathroom-accessories.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/marble-bathroom-with-shower-cubicle-and-wall-niches/marble-tile-bathroom-with-bathroom-niche.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text">Caption Three</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/simple-bathroom-with-seamless-grey-wall-tiles-and-wooden-finish-flooring/grey-bathroom-wall-tiles.jpg" style={{ width: '100%', maxHeight: '500px' }} />
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

export default Bathroom;