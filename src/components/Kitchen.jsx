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

const Kitchen = () => {
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
      image: "https://fabdiz.com/wp-content/uploads/2022/05/Untitled-design-15.jpg",
      title: "Lizards",
      description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
    },
    {
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Living Room",
      description: "This is a beautifully designed living room with modern furniture and elegant decor."
    },
    {
      image: "https://wallpapers.com/images/high/grey-and-white-modular-kitchen-picture-pqhi27k7uzzcivh4.webp",
      title: "Modern Living Space",
      description: "A contemporary living space featuring stylish furniture and a cozy atmosphere."
    },
    {
      image: "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-1643351360-ZAORQ/3d-team-1651477394-vrRr8/jfm-1651477408-yU7HY/2022-05-19-clin320-kt01-op1-v1-mu-01-1653764287-XsXij.jpeg",
      title: "Cozy Interior",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/85/09/93/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    },
    {
      image: "https://www.wakefit.co/guides/wp-content/uploads/2023/01/space-saving-furniture-1.jpg",
      title: "Elegant ",
      description: "A stylish  room with a blend of modern and classic design elements."
    },
    {
      image: "https://wallpapers.com/images/hd/grey-modular-kitchen-with-lights-picture-f9ndjpdmwd8fpy1u.jpg",
      title: "Cozy ",
      description: "An inviting living room setup with comfortable seating and a warm ambiance."
    },
    {
      image: "https://media.designcafe.com/wp-content/uploads/2020/05/09150825/blue-and-white-modular-kitchen-design.jpg",
      title: "Design",
      description: "A stylish living room with a blend of  classic design elements."
    },
    {
      image: "https://www.regalokitchens.com/images/chic-u-shaped-modular-kitchen-design.jpg",
      title: "Elegant Design",
      description: "A stylish living room with a blend of modern and classic design elements."
    }
  ];

  return (
    <div className='kitchen'>

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

export default Kitchen;