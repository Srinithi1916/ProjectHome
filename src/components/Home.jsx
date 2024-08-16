import React, { useState } from "react";
import video from "../components/background1.mp4";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTwitter } from "react-icons/fa6";

import { FaHome, FaSearch } from "react-icons/fa";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [book, setBookOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyName: "",
    whatsappUpdates: false,
  });

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

    const { name, email, phone, propertyName, whatsappUpdates } = formData;

    const message = `
    Hello, I am ${name}.
    Email: ${email}
    Phone: ${phone}
    Property Name: ${propertyName}
    ${whatsappUpdates ? "I would like to receive updates on WhatsApp." : ""}
  `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/9361986500?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  const cardData = [
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/QW/LL/NO/30373493/executive-office-desk-1000x1000.jpeg",
      title: "Lizards",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://media.designcafe.com/wp-content/uploads/2019/11/17054906/home-decor-trends.jpg",
      title: "Living Room",
      description:
        "An inviting living room setup with comfortable seating and a warm ambiance.",
    },
    {
      image:
        "https://adhunikinteriors.com/wp-content/uploads/2020/09/interior-9.jpg",
      title: "Modern Living Space",
      description:
        "An inviting living room setup with comfortable seating and a warm ambiance.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/green-balcony-with-a-swing-and-glass-railing/house-balcony-design.jpg",
      title: "Cozy Interior",
      description:
        "An inviting living room setup with comfortable seating and a warm ambiance.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-outdoor-wall-plants/modern-style-glass-railing-design-for-balcony-and-wall-mounted-planters.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/balcony-design/balcony-with-glass-railing-and-vertical-garden-planter/glass-railing-design-for-balcony-with-vertical-garden-planter.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-style-pooja-unit-design-with-wooden-finish/modern-style-pooja-unit-design-with-wooden-finish.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/mandir-design-with-intricate-tile-work-and-hand-painted-mural/mandir-tiles-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/pooja-room/modern-puja-room-with-grey-wallpaper-and-wooden-open-cabinets/stylish-modern-mandir-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/flooring-design/italian-marble-flooring-with-blue-veins-for-bedroom/flooring-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/flooring-design/seamless-marble-flooring-for-living-room/marble-floor-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/flooring-design/granite-flooring-for-a-modern-kitchen/granite-floor-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/contemporary-beige-dining-room-with-black-pendant-lights/dining-table-set-6-seater.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/modern-contemporary-dining-room-with-nilaya-dining-table-and-crockery-unit/modern-dining-table-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/dining-room/wooden-dining-table-with-white-upholstered-chairs-and-golden-metal-frame/dining-table-set-6-seater.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bed-designs/low-height-bed-design-with-hanging-pendant-lights/simple-bed-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bed-designs/modern-bed-design-in-off-white-upholstery-and-beige-bedding/modern-bed-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bed-designs/wooden-bed-design-for-master-bedroom/wooden-bed-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/u-shaped-kitchen-design-with-herringbone-backsplash,-beige-kitchen-cabinets---wooden-ceiling/u-shaped-kitchen-design-with-modular-kitchen-cabinets.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/beige-kitchen-wardrobe-with-white-countertop-and-white-wall-tiles/kitchen-wardrobe-with-dado-tiles.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/modular-kitchen/contemporary-u-shaped-grey-kitchen-with-white-countertop/u-shaped-kitchen-design.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/sliding-wardrobe-shutter-with-laminate-and-mirror-finish/sliding-wardrobe-design-with-mirror.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/master-bedroom-wardrobe-with-leather-finish-and-dressing-table/master-bedroom-wardrobe-design-with-dressing-table.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
    {
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/wardrobe-and-cupboard/black-fluted-glass-wardrobe-with-incorporated-study-table-and-dresser/corner-wardrobe-with-study-table.jpg",
      title: "Elegant Design",
      description:
        "A stylish living room with a blend of modern and classic design elements.",
    },
  ];

  return (
    <div>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className="video-content">
          <h1>Welcome to Comfort Home </h1>
          <h2 styl={{ color: "#f9e2b9" }}>
            An advanced and easy-to-use 2D/3D home design tool.
            <br></br>
            Design your Dream Home
          </h2>

          <Link to="/contact">
            <Button
              style={{
                backgroundColor: "#674188",
                height: "80px",
                width: "200px",
                borderRadius: "20%",
              }}
            >
              <FaPhoneVolume style={{ color: "white" }} />
              &ensp;
              <h2 style={{ color: "white" }}>Contact us </h2>
            </Button>
          </Link>
        </div>
      </div>

      <div className="hio">
        <br></br>

        <div className="marquee-container">
          <div className="marquee-content">
            <div className="marquee-item">
              <img
                src="https://st3.depositphotos.com/1688079/15989/i/450/depositphotos_159896808-stock-photo-free-delivery-truck-icon-elegant.jpg"
                alt="Delivery in 45 days or we pay rent*"
              />
              <p>Delivery in 45 days or we pay rent*</p>
            </div>
            <div className="marquee-item">
              <img src="https://static.vecteezy.com/system/resources/previews/022/782/488/original/hidden-icon-visible-invisible-icon-eye-icon-look-and-vision-hide-unhide-symbol-human-eye-magic-eye-cross-symbol-sencitive-content-see-unsee-incognito-mood-blind-sign-free-vector.jpg" />
              <p>No Hidden Costs</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://st4.depositphotos.com/3779649/20180/v/450/depositphotos_201807938-stock-illustration-years-warranty-icon-stamp-badge.jpg"
                alt="Flat 10 Year Warranty"
              />
              <p>Flat 10 Year Warranty</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://seeklogo.com/images/E/EMI-logo-9EE5A80152-seeklogo.com.gif"
                alt="Easy EMIs"
              />
              <p>Easy EMIs</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://www.shutterstock.com/image-vector/house-logo-template-design-vector-600nw-741515455.jpg"
                alt="600+ In-House Designers"
              />
              <p>600+ In-House Designers</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://thumbs.dreamstime.com/b/express-delivery-icon-black-white-emblem-symbol-fast-mail-easy-to-read-sign-downsizing-vector-illustration-173585138.jpg"
                alt="35,000+ Homes Delivered"
              />
              <p>35,000+ Homes Delivered</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://img.freepik.com/premium-vector/black-white-city-icon-white-background_925480-91.jpg"
                alt="50+ Cities"
              />
              <p>50+ Cities</p>
            </div>

            <div className="marquee-item">
              <img
                src="https://st3.depositphotos.com/1688079/15989/i/450/depositphotos_159896808-stock-photo-free-delivery-truck-icon-elegant.jpg"
                alt="Delivery in 45 days or we pay rent*"
              />
              <p>Delivery in 45 days or we pay rent*</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/782/488/original/hidden-icon-visible-invisible-icon-eye-icon-look-and-vision-hide-unhide-symbol-human-eye-magic-eye-cross-symbol-sencitive-content-see-unsee-incognito-mood-blind-sign-free-vector.jpg"
                alt="No Hidden Costs"
              />
              <p>No Hidden Costs</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://st4.depositphotos.com/3779649/20180/v/450/depositphotos_201807938-stock-illustration-years-warranty-icon-stamp-badge.jpg"
                alt="Flat 10 Year Warranty"
              />
              <p>Flat 10 Year Warranty</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://seeklogo.com/images/E/EMI-logo-9EE5A80152-seeklogo.com.gif"
                alt="Easy EMIs"
              />
              <p>Easy EMIs</p>
            </div>
            <div className="marquee-item">
              <img src="https://t3.ftcdn.net/jpg/02/93/53/16/360_F_293531639_RTec7iO5kBTQRGDYQBXdaoWQY9hY2KpJ.jpg" />
              <p>600+ In-House Designers</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://thumbs.dreamstime.com/b/express-delivery-icon-black-white-emblem-symbol-fast-mail-easy-to-read-sign-downsizing-vector-illustration-173585138.jpg"
                alt="35,000+ Homes Delivered"
              />
              <p>35,000+ Homes Delivered</p>
            </div>
            <div className="marquee-item">
              <img
                src="https://img.freepik.com/premium-vector/black-white-city-icon-white-background_925480-91.jpg"
                alt="50+ Cities"
              />
              <p>50+ Cities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="living">
        <div className="projects-container">
          <div className="cards-container">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="card"
                sx={{
                  backgroundColor: "#F1EAFF",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "30%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
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
                  <Button
                    size="small"
                    onClick={() => handleOpen(card.image)}
                    style={{ color: "#674188", fontSize: "15px" }}
                  >
                    <b>Learn More</b>
                  </Button>
                </CardActions>
                <div className="leo">
                  <Button>
                    <b
                      style={{ color: "#674188", fontSize: "15px" }}
                      onClick={() => handleOpen1(card.image)}
                    >
                      Book For Free Consultant
                    </b>
                  </Button>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <a href="/quote" target="_blank">
                    <Button>Get Quote</Button>{" "}
                  </a>
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
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src={imageSrc}
                alt="Detailed view"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Modal>

          <Modal
            open={book}
            onClose={handleCloser}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle} style={{ backgroundColor: "#f9e2b9" }}>
              <IconButton
                aria-label="close"
                onClick={handleCloser}
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/06/03173129/Form.jpg"
                style={{ width: "100%", height: "100%" }}
              />
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
                sx={{ position: "absolute", top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  src={imageSrc}
                  alt="Consultant view"
                  style={{ width: "100%", height: "100%" }}
                />
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "900px",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
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
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#ac844d", color: "white" }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </div>

      <footer className="contact-footer" style={{ backgroundColor: "#674188" }}>
        <div className="footer-content">
          <div className="social-media">
            <h3>Follow Us</h3>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <image url="" alt="LinkedIn" /> */}
              <LinkedInIcon
                style={{ color: "black", height: "40px", width: "40px" }}
              ></LinkedInIcon>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="/path/to/facebook-icon.png" alt="Facebook" /> */}
              <FacebookIcon
                style={{ color: "black", height: "40px", width: "40px" }}
              ></FacebookIcon>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="/path/to/twitter-icon.png" alt="Twitter" /> */}
              {
                <FaTwitter
                  style={{ color: "black", height: "40px", width: "40px" }}
                ></FaTwitter>
              }
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                style={{ color: "black", height: "40px", width: "40px" }}
              ></InstagramIcon>
              {/* <img src="/path/to/instagram-icon.png" alt="Instagram" /> */}
            </a>
          </div>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Address: 123 Design Street, Cityville, ST 12345</p>
            <p>Email: contact@designservices.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          <div className="other-locations">
            <h3>Other Locations</h3>
            <p>District 1: 456 Another Street, Districtville, ST 67890</p>
            <p>District 2: 789 Another Road, Districtville, ST 11223</p>
          </div>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          <div className="fast-access">
            <h3>Fast Access</h3>
            <p>
              <a href="#interior" style={{ color: "black" }}>
                Interior Design
              </a>
            </p>
            <p>
              <a href="#exterior" style={{ color: "black" }}>
                Exterior Design
              </a>
            </p>
            <p>
              <a href="#cost-efficiency" style={{ color: "black" }}>
                Cost Efficiency
              </a>
            </p>
            <p>
              <a href="#feedback" style={{ color: "black" }}>
                Feedback
              </a>
            </p>
          </div>
        </div>
        <br></br>
      </footer>
    </div>
  );
};
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
