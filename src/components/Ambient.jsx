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

const Ambient = () => {
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
      image: "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Productivity Hub",
      description: "A dynamic, organized space designed to enhance focus, efficiency, and effective work performance."
    },
    {
      image: "https://www.loxone.com/enus/wp-content/uploads/sites/13/2016/10/PH_Loxone-Showhome-Living-Room-blue.jpg",
      title: "Work Oasis",
      description: "A tranquil, inspiring space designed to boost productivity and provide a comfortable work environment."
    },
    {
      image: "https://blisslights.com/cdn/shop/articles/2020_11_2.jpg?v=1650323319&width=760",
      title: "Creative Corner",
      description: "A stimulating, well-organized space designed to inspire innovation and enhance artistic and productive endeavors."
    },
    {
      image: "https://www.digitaltrends.com/wp-content/uploads/2022/01/game-room-full-color.jpg?resize=625%2C417&p=1",
      title: "Focus Zone",
      description: "A dedicated, distraction-free area designed to optimize concentration and productivity for achieving work goals."
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0512/3489/8105/articles/6d2f5476-34fc-4b6c-a74c-a2e515e90393.jpg?v=1695182860&width=1600&height=750&crop=center",
      title: "Efficiency Suite",
      description: "A streamlined, well-organized workspace designed to maximize productivity and streamline work processes."
    },
    {
      image: "https://www.loxone.com/enus/wp-content/uploads/sites/13/2023/06/PH-Header-Blog-Carefree@2x-1024x576.jpg.webp",
      title: "Innovation Station",
      description: "A dynamic, creative workspace designed to foster brainstorming, new ideas, and breakthrough solutions."
    },
    {
      image: "https://www.loxone.com/enus/wp-content/uploads/sites/13/2016/10/PH_Lighting-Party-Scene.jpg",
      title: "Business Nook",
      description: "A compact, functional space designed for efficient work, meetings, and focused professional activities."
    },
    {
      image: "https://i.redd.it/do-you-think-that-led-interior-lightning-is-a-must-have-or-v0-wlu53h2jvrn81.jpg?width=1000&format=pjpg&auto=webp&s=b22db3f86476842a8c3c76c6d0bd7e0cba0cd08e",
      title: "Professional Space",
      description: "A sleek, organized area designed for efficient work, meetings, and maintaining a polished business environment."
    },
    {
      image: "https://www.tech-wonders.com/wp-content/uploads/2019/05/RGB-Lit-Kitchen.jpg",
      title: "Executive Enclave",
      description: "A sophisticated, private workspace designed for high-level decision-making, meetings, and executive functions."
    }
  ];

  return (
    <div className='living'>


   
<br></br>

<center>
        <h1>Ambient Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://www.loxone.com/enus/wp-content/uploads/sites/13/2016/10/PH_Loxone-Showhome-Living-Room-blue.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://blisslights.com/cdn/shop/articles/2020_11_2.jpg?v=1650323319&width=760" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://www.digitaltrends.com/wp-content/uploads/2022/01/game-room-full-color.jpg?resize=625%2C417&p=1" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://cdn.shopify.com/s/files/1/0512/3489/8105/articles/6d2f5476-34fc-4b6c-a74c-a2e515e90393.jpg?v=1695182860&width=1600&height=750&crop=center" style={{ width: '100%', maxHeight: '500px' }} />
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

export default Ambient;