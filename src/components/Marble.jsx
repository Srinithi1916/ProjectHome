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

const Marble = () => {
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
      image: "https://img.freepik.com/premium-photo/white-brown-marble-with-brown-tan-pattern_644690-74662.jpg?w=1060",
      title: "Productivity Hub",
      description: "A dynamic, organized space designed to enhance focus, efficiency, and effective work performance."
    },
    {
      image: "https://www.thoughtco.com/thmb/ewvWYDu-le35-FjCD5Qm2yBTsKU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marble-941374788-5b16eaa4fa6bcc00369692c7.jpg",
      title: "Work Oasis",
      description: "A tranquil, inspiring space designed to boost productivity and provide a comfortable work environment."
    },
    {
      image: "https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg?w=1480",
      title: "Creative Corner",
      description: "A stimulating, well-organized space designed to inspire innovation and enhance artistic and productive endeavors."
    },
    {
      image: "https://www.stonehubindia.com/public/uploads/product/335790499_19_06_2023_01_16_38.jpg",
      title: "Focus Zone",
      description: "A dedicated, distraction-free area designed to optimize concentration and productivity for achieving work goals."
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2021/4/IJ/NR/MP/125511449/007-1000x1000.jpg",
      title: "Efficiency Suite",
      description: "A streamlined, well-organized workspace designed to maximize productivity and streamline work processes."
    },
    {
      image: "https://cdn-dlcfk.nitrocdn.com/oMTGnrwiKeIGZuQDmkdCbtDtFQMdLRjC/assets/images/optimized/rev-ae36f5d/www.slique.com.au/wp-content/uploads/2021/08/How-Clean-Yellow-Stains-White-Marble-Floors-1000x480.jpg",
      title: "Innovation Station",
      description: "A dynamic, creative workspace designed to foster brainstorming, new ideas, and breakthrough solutions."
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/026/282/950/non_2x/brown-marble-texture-background-brown-marble-floor-and-wall-tile-natural-granite-stone-ai-generated-photo.jpg",
      title: "Business Nook",
      description: "A compact, functional space designed for efficient work, meetings, and focused professional activities."
    },
    {
      image: "https://img.freepik.com/premium-photo/marble-texture-background_1191492-21381.jpg?w=1380",
      title: "Professional Space",
      description: "A sleek, organized area designed for efficient work, meetings, and maintaining a polished business environment."
    },
    {
      image: "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?w=1480&t=st=1722364127~exp=1722364727~hmac=750aebe381ce572b53211809d3350fc0a1accd3a7374d19baba3ab06a2f6f933",
      title: "Executive Enclave",
      description: "A sophisticated, private workspace designed for high-level decision-making, meetings, and executive functions."
    }
  ];

  return (
    <div className='living'>

   
<br></br>

<center>
        <h1>Marble Designs</h1>

  <Paper style={{width:"1200px",backgroundColor:'#F1EAFF'}}>
      <br></br>

<center>


        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://img.freepik.com/premium-photo/white-brown-marble-with-brown-tan-pattern_644690-74662.jpg?w=1060" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://www.thoughtco.com/thmb/ewvWYDu-le35-FjCD5Qm2yBTsKU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marble-941374788-5b16eaa4fa6bcc00369692c7.jpg" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://img.freepik.com/premium-photo/white-marble-with-gold-grey-veins-abstract-background_107173-27386.jpg?w=1480" style={{ width: '100%', maxHeight: '500px' }} />
            <div className="text"></div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <img src="https://img.freepik.com/premium-photo/marble-texture-background_1191492-21381.jpg?w=1380" style={{ width: '100%', maxHeight: '500px' }} />
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

export default Marble;