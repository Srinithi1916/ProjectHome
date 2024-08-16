import React, { useState, useEffect } from 'react';
import { Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Quote = () => {
  const [selectedType, setSelectedType] = useState("1 BHK");
  const [openModal, setOpenModal] = useState(false);
  const [budget, setBudget] = useState("");
  const [quoteBooked, setQuoteBooked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false);

  const types = [
    {

      name: "1 BHK",
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-exposed-bricks-in-exteriors.png",
      size: "600-800 sqft",
      rooms: [
        <Paper key="Living Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/livingroom" className="room-button">Living Room</Button>
        </Paper>,
        <Paper key="Kitchen" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/kitchen" className="room-button">Kitchen</Button>
        </Paper>,
        <Paper key="Bathroom" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bathroom" className="room-button">Bathroom</Button>
        </Paper>,
        <Paper key="Bedroom" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bedroom" className="room-button">Bedroom</Button>
        </Paper>,
        <Paper key="Pooja Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/poojaroom" className="room-button">Pooja Room</Button>
        </Paper>,
        <Paper key="Dining Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/diningroom" className="room-button">Dining Room</Button>
        </Paper>,
        <Paper key="Wardrobe" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/wardrobe" className="room-button">Wardrobe</Button>
        </Paper>,
        <Paper key="Flooring" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/ceramics" className="room-button">Flooring</Button>
        </Paper>,
        <Paper key="Crockery" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/pendant" className="room-button">Lightings</Button>
        </Paper>,
      ],
    },
    {
      name: "2 BHK",
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-bold-expression.png",
      size: "800-1200 sqft",
      rooms: [
        <Paper key="Living Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/livingroom" className="room-button">Living Room</Button>
        </Paper>,
        <Paper key="Kitchen" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/kitchen" className="room-button">Kitchen</Button>
        </Paper>,
        <Paper key="2 Bathrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bathroom" className="room-button">2 Bathrooms</Button>
        </Paper>,
        <Paper key="2 Bedrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bedroom" className="room-button">2 Bedrooms</Button>
        </Paper>,
        <Paper key="Balcony" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Balcony</Button>
        </Paper>,
        <Paper key="Pooja Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/poojaroom" className="room-button">Pooja Room</Button>
        </Paper>,
        <Paper key="Dining Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/diningroom" className="room-button">Dining Room</Button>
        </Paper>,
        <Paper key="Wardrobe" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/wardrobe" className="room-button">Wardrobe</Button>
        </Paper>,
        <Paper key="Flooring" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/granites" className="room-button">Flooring</Button>
        </Paper>,
        <Paper key="Crockery" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/pendant" className="room-button">Lightings</Button>
        </Paper>,
      ],
    },
    {
      name: "3 BHK",
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-design-for-home-elevated-style.png",
      size: "1200-1600 sqft",
      rooms: [
        <Paper key="Living Room" className="quote-room-details-paper" elevation={3} >
          <Button component={Link} to="/livingroom" className="room-button">Living Room</Button>
        </Paper>,
        <Paper key="Kitchen" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/kitchen" className="room-button">Kitchen</Button>
        </Paper>,
        <Paper key="3 Bathrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bathroom" className="room-button">3 Bathrooms</Button>
        </Paper>,
        <Paper key="3 Bedrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bedroom" className="room-button">3 Bedrooms</Button>
        </Paper>,
        <Paper key="Balcony" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/balcony" className="room-button">Balcony</Button>
        </Paper>,
        <Paper key="Office" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/office" className="room-button">Office</Button>
        </Paper>,
        <Paper key="Pooja Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/poojaroom" className="room-button">Pooja Room</Button>
        </Paper>,
        <Paper key="Dining Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/diningroom" className="room-button">Dining Room</Button>
        </Paper>,
        <Paper key="Wardrobe" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/wardrobe" className="room-button">Wardrobe</Button>
        </Paper>,
        <Paper key="Flooring" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/granites" className="room-button">Flooring</Button>
        </Paper>,
        <Paper key="Crockery" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/pendant" className="room-button">Lighting</Button>
        </Paper>,
        <Paper key="Swimming Pool" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Crockery</Button>
        </Paper>,
      ],
    },
    {
      name: "Villa",
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-green-ambience.png",
      size: "2500-3500 sqft",
      rooms: [
        <Paper key="Living Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/livingroom" className="room-button">Living Room</Button>
        </Paper>,
        <Paper key="Kitchen" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/kitchen" className="room-button">Kitchen</Button>
        </Paper>,
        <Paper key="5 Bathrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bathroom" className="room-button">5 Bathrooms</Button>
        </Paper>,
        <Paper key="5 Bedrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bedroom" className="room-button">5 Bedrooms</Button>
        </Paper>,
        <Paper key="2 Balconies" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/balcony" className="room-button">2 Balconies</Button>
        </Paper>,
        <Paper key="Office" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/office" className="room-button">Office</Button>
        </Paper>,
        <Paper key="Pooja Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/poojaroom" className="room-button">Pooja Room</Button>
        </Paper>,
        <Paper key="Dining Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/diningroom" className="room-button">Dining Room</Button>
        </Paper>,
        <Paper key="Wardrobe" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/wardrobe" className="room-button">Wardrobe</Button>
        </Paper>,
        <Paper key="Flooring" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/granites" className="room-button">Flooring</Button>
        </Paper>,
        <Paper key="Lighting" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/pendant" className="room-button">Lighting</Button>
        </Paper>,
        <Paper key="Swimming Pool" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Swimming Pool</Button>
        </Paper>,
      ],
    },


    {
      name: "Penthouse",
      image: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-industrial-aesthetic-1.png",
      size: "3500-5000 sqft",
      rooms: [
        <Paper key="Living Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/livingroom" className="room-button">Living Room</Button>
        </Paper>,
        <Paper key="Kitchen" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/kitchen" className="room-button">Kitchen</Button>
        </Paper>,
        <Paper key="6 Bathrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bathroom" className="room-button">6 Bathrooms</Button>
        </Paper>,
        <Paper key="6 Bedrooms" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/bedroom" className="room-button">6 Bedrooms</Button>
        </Paper>,
        <Paper key="Balcony" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/balcony" className="room-button">Balcony</Button>
        </Paper>,
        <Paper key="Office" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/office" className="room-button">Office</Button>
        </Paper>,
        <Paper key="Pooja Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/poojaroom" className="room-button">Pooja Room</Button>
        </Paper>,
        <Paper key="Dining Room" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/diningroom" className="room-button">Dining Room</Button>
        </Paper>,
        <Paper key="Wardrobe" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/wardrobe" className="room-button">Wardrobe</Button>
        </Paper>,
        <Paper key="Flooring" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/granites" className="room-button">Flooring</Button>
        </Paper>,
        <Paper key="Crockery" className="quote-room-details-paper" elevation={3}>
          <Button component={Link} to="/lighting" className="room-button">Lighting</Button>
        </Paper>,
        <Paper key="Home Theater" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Home Theater</Button>
        </Paper>,
        <Paper key="Gym" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Gym</Button>
        </Paper>,
        <Paper key="Swimming Pool" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Swimming Pool</Button>
        </Paper>,
        <Paper key="Crockery" className="quote-room-details-paper" elevation={3}>
          <Button className="room-button">Crockery</Button>
        </Paper>
      ],
    },
  ];

  const selectedTypeData = types.find(type => type.name === selectedType);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleBookQuote = () => {
    setQuoteBooked(true);
    handleCloseModal();
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", selectedTypeData);
    setOpenModal(true);
  };

  const handleSubmit = () => {
    console.log("Budget submitted:", budget);
    setSubmitted(true);
    handleCloseModal();
    showAlert(); 
  };

  const showAlert = () => {
    setShowCustomAlert(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false); 
    }
  }, [submitted]);

  return (
    <div className='quote'>
      <div className="quote-container">
        <h1>Get a Quote</h1>

        <Paper elevation={3} className="quote-cards-container">
          {types.map(type => (
            <Paper
              key={type.name}
              elevation={3}
              className={`quote-card ${selectedType === type.name ? 'quote-selected' : ''}`}
              onClick={() => setSelectedType(type.name)}
            >
              <img src={type.image} alt={type.name} className="quote-card-image" />
              <div className="quote-card-content">
                <h3>{type.name}</h3>
                <p>{type.size}</p>
              </div>
            </Paper>
          ))}
        </Paper>

        {selectedTypeData && (
          <Paper elevation={3} className="quote-room-details">
            <h2>{selectedType}</h2>
            <img src={selectedTypeData.image} alt={selectedType} className="quote-room-image" />
            <p>Size: {selectedTypeData.size}</p>

            <div className="quote-room-buttons">
              {selectedTypeData.rooms.map((room, index) => (
                <div key={index} className="room-button-container">
                  {room}
                </div>
              ))}
            </div>

            <div className="quote-extra-details">
              <h3>Additional Information:</h3>
              <p>Our designs are tailored to your needs and preferences. Choose the number of rooms and designs that best fit your requirements. We offer personalized solutions to make your space unique and functional.</p>
              <p>If you have any specific requirements or additional features in mind, please let us know so we can provide the best estimate possible.</p>
            </div>

            <Button
              variant="contained"
              color="primary"
              className={`quote-add-to-cart ${quoteBooked ? 'processing' : ''}`}
              onClick={handleAddToCart}
              disabled={quoteBooked}
            >
              {quoteBooked ? "Processing..." : "Add to Cart"}
            </Button>
          </Paper>
        )}

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Your estimate is ready</DialogTitle>
          <DialogContent>
            <p>Meanwhile, could you please share some details to serve you better?</p>
            <TextField
              select
              value={budget}
              onChange={handleBudgetChange}
              SelectProps={{
                native: true,
              }}
              fullWidth
              className="quote-budget-select"
            >
              <option value="">Select Budget</option>
              <option value="₹ 4 - ₹ 8 Lakhs">₹ 4 - ₹ 8 Lakhs</option>
              <option value="₹ 8 - ₹ 12 Lakhs">₹ 8 - ₹ 12 Lakhs</option>
              <option value="₹ 12 - ₹ 20 Lakhs">₹ 12 - ₹ 20 Lakhs</option>
              <option value="₹ 20 Lakhs ">₹ 20 Lakhs </option>
              <option value="₹ 40 Lakhs ">₹ 40 Lakhs </option>
              <option value="₹ 60 Lakhs ">₹ 60 Lakhs </option>
              <option value="₹ 80 Lakhs ">₹ 80 Lakhs </option>
              <option value="₹ 100 Lakhs ">₹ 1 crore</option>
              <option value="₹ 1 crore+">₹ 2 crore+</option>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={showCustomAlert} onClose={() => setShowCustomAlert(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Quote Submitted Successfully</DialogTitle>
          <DialogContent>
            <div style={{ textAlign: 'center' }}>
              <img src="https://img.freepik.com/free-photo/side-view-man-working-as-real-estate-agent_23-2151065015.jpg?t=st=1723437033~exp=1723440633~hmac=4c967d5c2ba8db425e307e2b6a2760c8ae7fbb7685ad7bbae91981149aa6b735&w=1380" alt="Success" style={{ width: '300px', height: '300px' }} />
              <p>Your quote has been submitted successfully!</p>
              <p>Budget: {budget}</p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowCustomAlert(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Quote;