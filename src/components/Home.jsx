import React, { useState } from 'react';
import video from '../components/background1.mp4';
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

const Home = () => {


  const [open, setOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleOpen = (image) => {
    setImageSrc(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardData = [
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2021/6/QW/LL/NO/30373493/executive-office-desk-1000x1000.jpeg",
      title: "Lizards",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
    },
    {
      image: "https://media.designcafe.com/wp-content/uploads/2019/11/17054906/home-decor-trends.jpg",
      title: "Living Room",
      description: "This is a beautifully designed living room with modern furniture and elegant decor."
    },
    {
      image: "https://adhunikinteriors.com/wp-content/uploads/2020/09/interior-9.jpg",
      title: "Modern Living Space",
      description: "A contemporary living space featuring stylish furniture and a cozy atmosphere."
    },
    {
      image: "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/26/modenese-luxury-interiors-classic-sitting-room-design-housing-archello.1653586896.581.jpg",
      title: "Cozy Interior",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/26/modenese-luxury-interiors-classic-sitting-room-design-housing-archello.1653586897.5434.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/26/modenese-luxury-interiors-classic-sitting-room-design-housing-archello.1653586898.0231.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/BD/SM/SJ/4344814/flat-interior-designing-service-1000x1000.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/26/modenese-luxury-interiors-classic-sitting-room-design-housing-archello.1653586896.581.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/BD/SM/SJ/4344814/flat-interior-designing-service-1000x1000.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    }
  ];

  return (
    <div>
      <div className='video-container'>
        <video className='video-background' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        
        <div className='video-content'>
          <h1>Welcome to HomeScape </h1>
        </div>
      </div>
      <br />
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">
            <img src="https://st3.depositphotos.com/1688079/15989/i/450/depositphotos_159896808-stock-photo-free-delivery-truck-icon-elegant.jpg" alt="Delivery in 45 days or we pay rent*" />
            <p>Delivery in 45 days or we pay rent*</p>
          </div>
          <div className="marquee-item">
            <img src="https://static.thenounproject.com/png/3255209-200.png" alt="No Hidden Costs" />
            <p>No Hidden Costs</p>
          </div>
          <div className="marquee-item">
            <img src="https://st4.depositphotos.com/3779649/20180/v/450/depositphotos_201807938-stock-illustration-years-warranty-icon-stamp-badge.jpg" alt="Flat 10 Year Warranty" />
            <p>Flat 10 Year Warranty</p>
          </div>
          <div className="marquee-item">
            <img src="https://seeklogo.com/images/E/EMI-logo-9EE5A80152-seeklogo.com.gif" alt="Easy EMIs" />
            <p>Easy EMIs</p>
          </div>
          <div className="marquee-item">
            <img src="https://www.shutterstock.com/image-vector/house-logo-template-design-vector-600nw-741515455.jpg" alt="600+ In-House Designers" />
            <p>600+ In-House Designers</p>
          </div>
          <div className="marquee-item">
            <img src="https://thumbs.dreamstime.com/b/express-delivery-icon-black-white-emblem-symbol-fast-mail-easy-to-read-sign-downsizing-vector-illustration-173585138.jpg" alt="35,000+ Homes Delivered" />
            <p>35,000+ Homes Delivered</p>
          </div>
          <div className="marquee-item">
            <img src="https://img.freepik.com/premium-vector/black-white-city-icon-white-background_925480-91.jpg" alt="50+ Cities" />
            <p>50+ Cities</p>
          </div>

          <div className="marquee-item">
            <img src="https://st3.depositphotos.com/1688079/15989/i/450/depositphotos_159896808-stock-photo-free-delivery-truck-icon-elegant.jpg" alt="Delivery in 45 days or we pay rent*" />
            <p>Delivery in 45 days or we pay rent*</p>
          </div>
          <div className="marquee-item">
            <img src="https://static.thenounproject.com/png/3255209-200.png" alt="No Hidden Costs" />
            <p>No Hidden Costs</p>
          </div>
          <div className="marquee-item">
            <img src="https://st4.depositphotos.com/3779649/20180/v/450/depositphotos_201807938-stock-illustration-years-warranty-icon-stamp-badge.jpg" alt="Flat 10 Year Warranty" />
            <p>Flat 10 Year Warranty</p>
          </div>
          <div className="marquee-item">
            <img src="https://seeklogo.com/images/E/EMI-logo-9EE5A80152-seeklogo.com.gif" alt="Easy EMIs" />
            <p>Easy EMIs</p>
          </div>
          <div className="marquee-item">
            <img src="https://t3.ftcdn.net/jpg/02/93/53/16/360_F_293531639_RTec7iO5kBTQRGDYQBXdaoWQY9hY2KpJ.jpg"  />
            <p>600+ In-House Designers</p>
          </div>
          <div className="marquee-item">
            <img src="https://thumbs.dreamstime.com/b/express-delivery-icon-black-white-emblem-symbol-fast-mail-easy-to-read-sign-downsizing-vector-illustration-173585138.jpg" alt="35,000+ Homes Delivered" />
            <p>35,000+ Homes Delivered</p>
          </div>
          <div className="marquee-item">
            <img src="https://img.freepik.com/premium-vector/black-white-city-icon-white-background_925480-91.jpg" alt="50+ Cities" />
            <p>50+ Cities</p>
          </div>
        </div>
        </div>

     
      <div className='backgroundcolor'>

<div className="projects-container">
  <div className="cards-container">
    {cardData.map((card, index) => (
        <Card
        key={index}
        className="card"
        sx={{
            backgroundColor: '#f9f9f9',
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
          <Button size="small" onClick={() => handleOpen(card.image)}>Learn More</Button>
        </CardActions>
        
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
</div>
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
  justifyContent: 'center',
  alignItems: 'center',
};

export default Home;