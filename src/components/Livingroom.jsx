import React, { useState } from 'react';
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

const LivingRoom = () => {
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
      image: "https://assets.architecturaldigest.in/photos/600835bbf93542952b66519b/16:9/w_1920,c_limit/dlf-magnolias-gurugram-penthouse-featured-image-1366x768.jpg",
      title: "Lizards",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
    },
    {
      image: "https://www.home-designing.com/wp-content/uploads/2023/01/large-living-room-fireplace.jpg",
      title: "Living Room",
      description: "This is a beautifully designed living room with modern furniture and elegant decor."
    },
    {
      image: "https://media.designcafe.com/wp-content/uploads/2020/03/21012613/luxury-living-room-designs.jpg",
      title: "Modern Living Space",
      description: "A contemporary living space featuring stylish furniture and a cozy atmosphere."
    },
    {
      image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?w=1380&t=st=1721829915~exp=1721830515~hmac=abf670104264a5e0e4fac83c73c55f2390caeab62364558da1b1c43ea5d50fff",
      title: "Cozy Interior",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/BD/SM/SJ/4344814/flat-interior-designing-service-1000x1000.jpg",
      title: "Elegant ",
      description: "A stylish  room with a blend of modern and classic design elements."
    },
    {
      image: "https://media.designcafe.com/wp-content/uploads/2020/03/21012620/metallic-accent-luxury-interior-design-living-room.jpg",
      title: "Cozy ",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2023/05/Luxury-open-living-room-ideas-before-and-after.jpg",
      title: "Design",
      description: "A stylish living room with a blend of  classic design elements."
    },
    {
      image: "https://i0.wp.com/www.melaniejadedesign.com/wp-content/uploads/2024/03/modern-lr-1-1.jpg?resize=1200%2C800&ssl=1",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    }
  ];

  return (
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

export default LivingRoom;
