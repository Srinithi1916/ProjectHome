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

const Diningroom = () => {
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
      image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/modern-contemporary-asian-paints-nilaya-4-seater-dining-table-in-cane-and-wood-finish/dining-table-set-4-seater-with-wooden-table.jpg",
      title: "Gourmet Hall",
      description: "An elegant dining space designed for savoring fine meals and hosting memorable gatherings."
    },
    {
      image: "https://cdn.decorilla.com/images/6e06b3a3-f5ed-46af-b2ac-e6bb88a1b559-750x560g.jpg?cv=1",
      title: "Dining Retreat",
      description: "A stylish, comfortable space perfect for enjoying meals and intimate gatherings with loved ones."
    },
    {
      image: "https://cdn.decorilla.com/images/c186c58f-b664-43dc-8f71-ca04c7fb7532-760g.jpg?cv=1",
      title: "Culinary Chamber",
      description: "A refined dining area designed for enjoying gourmet meals and culinary experiences with elegance."
    },
    {
      image: "https://cdn.decorilla.com/images/b1550ed2-bec3-418d-8ff1-a712d37ec51e-760g.jpg?cv=1",
      title: "Feast Haven",
      description: " A welcoming dining space designed for indulging in delicious meals and lively gatherings."
    },
    {
      image: "https://cdn.decorilla.com/images/10039d97-24d0-4797-b937-77f831c1850a-760g.jpg?cv=1",
      title: "Eating Alcove",
      description: "A cozy, intimate dining nook perfect for enjoying meals and creating warm, personal moments."
    },
    {
      image: "https://cdn.decorilla.com/images/9152b085-d4d9-4858-8ed7-500710bd0c0d-760g.jpg?cv=1",
      title: "Meal Manor",
      description: "A sophisticated dining space designed for enjoying meals, hosting events, and creating cherished memories."
    },
    {
      image: "https://cdn.decorilla.com/images/69057c68-5f49-441c-a8c3-caeeb81d2f1e-760g.jpg?cv=1",
      title: "Tasteful Table",
      description: "A refined dining area designed for elegant meals, socializing, and creating memorable dining experiences."
    },
    {
      image: "https://cdn.decorilla.com/images/60e3001f-b531-4daa-af7d-d613e1661a17-760g.jpg?cv=1",
      title: "Savory Space",
      description: "A delightful dining area designed for enjoying flavorful meals and fostering enjoyable culinary experiences."
    },
    {
      image: "https://cdn.decorilla.com/images/bac512f9-2629-46dd-8d09-e63d552febe0-760g.jpg?cv=1",
      title:  "Dining Nook",
      description: "A charming, cozy space perfect for intimate meals and casual, relaxed dining experiences."
    }
  ];

  return (
    <div className='living'>


<br></br>

<center>
        <h1>Diningroom Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.decorilla.com/images/6e06b3a3-f5ed-46af-b2ac-e6bb88a1b559-750x560g.jpg?cv=1" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.decorilla.com/images/c186c58f-b664-43dc-8f71-ca04c7fb7532-760g.jpg?cv=1" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.decorilla.com/images/bac512f9-2629-46dd-8d09-e63d552febe0-760g.jpg?cv=1" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.decorilla.com/images/10039d97-24d0-4797-b937-77f831c1850a-760g.jpg?cv=1" style={{ width: '100%', maxHeight: '500px' }} />
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

export default Diningroom;