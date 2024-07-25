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

const Bedroom = () => {
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
      image: "https://www.decorpot.com/images/414767619modern-bedroom-design-ideas-for-your-home.jpg",
      title: "Lizards",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg",
      title: "Living Room",
      description: "This is a beautifully designed living room with modern furniture and elegant decor."
    },
    {
      image: "https://w0.peakpx.com/wallpaper/623/935/HD-wallpaper-bedroom-project-stylish-interior-design-bedroom-modern-classic-interior-design-silver-butterflies-on-the-wall-classic-interior-style.jpg",
      title: "Modern Living Space",
      description: "A contemporary living space featuring stylish furniture and a cozy atmosphere."
    },
    {
      image: "https://e0.pxfuel.com/wallpapers/1013/482/desktop-wallpaper-stylish-bedroom-design-brown-wood-in-the-bedroom-bedroom-idea-modern-interior-design-bedroom.jpg",
      title: "Cozy Interior",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://i.pinimg.com/736x/7a/79/f9/7a79f9eb1781a2516d5b9727c095023a.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_1280.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/04/21/01/27/ai-generated-8709663_1280.png",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://www.home-designing.com/wp-content/uploads/2019/02/master-bedroom-design.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    }
  ];

  return (
    <div className='living'>

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
              sx={{ height: 240 }}
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

export default Bedroom;