
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, IconButton, MenuItem, Menu } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { MdHomeRepairService, MdContactEmergency, MdMeetingRoom, MdOutlineMapsHomeWork } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { GrProjects, GrLogin } from "react-icons/gr";
import { SiGnuprivacyguard } from "react-icons/si";
import { GiFloorHatch, GiClosedDoors, GiCeilingLight } from "react-icons/gi";

const Navbar = () => {
  const [anchorElExterior, setAnchorElExterior] = useState(null);
  const [anchorElInterior, setAnchorElInterior] = useState(null);
  const [anchorElFlooring, setAnchorEl] = useState(null);
  const [anchorElDoors, setAnchorElDoors] = useState(null);
  const [anchorElLight, setAnchorElLight] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorElAI, setAnchorElAI] = useState(null);
  const navigate = useNavigate();

  const handleExteriorClick = (event) => {
    setAnchorElExterior(event.currentTarget);
  };

  const handleInteriorClick = (event) => {
    setAnchorElInterior(event.currentTarget);
  };

  const handleFlooringClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDoorsClick = (event) => {
    setAnchorElDoors(event.currentTarget);
  };

  const handleLightClick = (event) => {
    setAnchorElLight(event.currentTarget);
  };

  const handleClickAI = (event) => { 
    setAnchorElAI(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElExterior(null);
    setAnchorElInterior(null);
    setAnchorEl(null);
    setAnchorElDoors(null);
    setAnchorElLight(null);
    setAnchorElAI(null)
  };

  const handleMenuClose = () => { 
    setAnchorElAI(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchMap = {
      "home": "/",
      "services": "/services",
      "projects": "/projects",
      "contact": "/contact",
      "login": "/login",
      "signup": "/signup",
      "google": "/google",
      "living room": "/livingroom",
      "bedroom": "/bedroom",
      "kitchen": "/kitchen",
      "bathroom": "/bathroom",
      "pooja room": "/poojaroom",
      "balcony": "/balcony",
      "dining room": "/diningroom",
      "wardrobe": "/wardrobe",
      "flooring": "/flooring",
      "office": "/office",
      "crockery": "/crockery",
      "model": "/model",
      "cottage": "/cottage",
      "brick facade": "/brickfacade",
      "beach house": "/beachhouse",
      "traditional": "/traditional",
      "simple": "/simple",
      "farmhouse": "/farmhouse",
      "trend": "/trend",
      "chettinad": "/chettinad",
      "craftsman": "/craftsman",
      "granites": "/granites",
      "marble": "/marble",
      "ceramics": "/ceramics",
      "wooden": "/wooden",
      "pvc door": "/pvcdoor",
      "glass door": "/glassdoor",
      "sliding door": "/slidingdoor",
      "aluminium door": "/aluminiumdoor",
      "steel door": "/steeldoor",
      "rolling": "/rolling",
      "pendant": "/pendant",
      "ambient": "/ambient",
      "ceiling": "/cieling",
      "quote": "/quote",
      "playwood": "/playwood",
      "fixed light": "/fixedlight",
    };
    const path = searchMap[searchQuery.toLowerCase()];
    if (path) {
      navigate(path);
    } else {
      alert('Page not found');
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#674188', height: "60px" }}>
        <Toolbar style={{ minHeight: '70px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginRight: '150px', fontSize: "30px" }}>
              <Link to='/'>
                <Button style={{ color: "white" }}>
                  <FaHome style={{ marginRight: '10px', height: '50px', width: '50px' }} />
                </Button>
              </Link>
              <b>Comfort Home</b>
            </Typography>
            <form onSubmit={handleSearch}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton size="small" type="submit" style={{ backgroundColor: 'black' }} aria-label="search">
                        <FaSearch style={{ color: 'white' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { backgroundColor: 'white', borderRadius: '50px', width: '250px', height: '40px' },
                }}
              />
            </form>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '10px', fontSize: "17px" }}><b><TiHome style={{ marginRight: "7px", height: '25px', width: '25px' }} />Home</b></Button>
            <Button color="inherit" component={Link} to="/services" style={{ marginRight: '10px', fontSize: "17px" }}><b><MdHomeRepairService style={{ marginRight: "7px", height: '25px', width: '25px' }} />Services</b></Button>
            <Button color="inherit" component={Link} to="/projects" style={{ marginRight: '10px', fontSize: "17px" }}><b> <GrProjects style={{ marginRight: "7px", height: '21px', width: '21px' }} /> Projects</b></Button>
            <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '10px', fontSize: "17px" }}><b><MdContactEmergency style={{ marginRight: "7px", height: '21px', width: '21px' }} />Contact</b></Button>
            <Button color="inherit" component={Link} to="/login" style={{ marginRight: '10px', fontSize: "17px" }}><b><GrLogin style={{ marginRight: "7px", height: '21px', width: '21px' }} />Login</b></Button>
            <Button color="inherit" component={Link} to="/signup" style={{ marginRight: '20px', fontSize: "17px" }}><b><SiGnuprivacyguard style={{ marginRight: "7px", height: '21px', width: '21px' }} />Signup</b></Button>
            <Button color="inherit" component={Link} to="/google" style={{ marginRight: '20px', fontSize: "17px" }}><b><FaMapMarkerAlt style={{ marginRight: "7px", height: '21px', width: '21px' }} /> Google</b></Button>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="static" style={{ backgroundColor: '#674188', height: "50px" }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 9px' }}>
          <div>
            <Button color="inherit" onClick={handleLightClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiCeilingLight style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Light Designs &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElLight}
              keepMounted
              open={Boolean(anchorElLight)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/pendant">Pendant</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/ambient">Ambient</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/cieling">Ceiling</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/fixedlight">Fixed Light</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleDoorsClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiClosedDoors style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Doors &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElDoors}
              keepMounted
              open={Boolean(anchorElDoors)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
            >
               <MenuItem onClick={handleClose} component={Link} to="/wooden">Wooden</MenuItem>
               <MenuItem onClick={handleClose} component={Link} to="/playwood">Playwood</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/pvcdoor">PVC Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/glassdoor">Glass Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/slidingdoor">Sliding Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/aluminiumdoor">Aluminium Doors</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/steeldoor">Steel Doors</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleFlooringClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <GiFloorHatch style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Flooring &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElFlooring}
              keepMounted
              open={Boolean(anchorElFlooring)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/granites">Granites</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/marble">Marble</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/ceramics">Ceramics</MenuItem>
             
            </Menu>

            <Button color="inherit" onClick={handleExteriorClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <MdOutlineMapsHomeWork style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Exterior Designs &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElExterior}
              keepMounted
              open={Boolean(anchorElExterior)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/cottage">Cottage</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/brickfacade">Brick Facade</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/beachhouse">Beach House</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/traditional">Traditional</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/simple">Simple</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/farmhouse">Farmhouse</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/trend">Trend</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/chettinad">Chettinad</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/craftsman">Craftsman</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/model">Model Homes</MenuItem>

            </Menu>

            <Button color="inherit" onClick={handleInteriorClick} style={{ marginRight: '20px', fontSize: "17px" }}>
              <MdMeetingRoom style={{ marginRight: "7px", height: '21px', width: '21px' }} /> <b>Interior Designs &emsp;&emsp;&emsp;&emsp;</b>
            </Button>
            <Menu
              anchorEl={anchorElInterior}
              keepMounted
              open={Boolean(anchorElInterior)}
              onClose={handleClose}
              PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
            >
              {/* <MenuItem onClick={handleClose} component={Link} to="/livingroom">Living Room</MenuItem> */}
              <MenuItem onClick={handleClose} component={Link} to="/bedroom">Bedroom</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/kitchen">Kitchen</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/bathroom">Bathroom</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/poojaroom">Pooja Room</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/balcony">Balcony</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/diningroom">Dining Room</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/wardrobe">Wardrobe</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/office">Office</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/crockery">Crockery</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/flooring">Floorings</MenuItem>
            </Menu>

           

            <Button
              color="inherit"
              onClick={handleClickAI}
              style={{ marginRight: '20px', fontSize: "17px" }}
            >
              <b>ChatBot </b>
            </Button>
            <Menu
              anchorEl={anchorElAI}
              keepMounted
              open={Boolean(anchorElAI)}
              onClose={handleMenuClose}
              PaperProps={{ style: { backgroundColor: "#ac844d", color: "white" } }}
            >
              <MenuItem onClick={handleMenuClose} style={{ padding: '0' }}>
                <iframe
                  allow="microphone;"
                  width="450"
                  height="430"
                  src="https://console.dialogflow.com/api-client/demo/embedded/c2498de5-93d4-4dc1-a118-a353e5069cb8"
                ></iframe>
              </MenuItem>
            </Menu>


          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, IconButton, MenuItem, Menu } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
// import { MdHomeRepairService, MdContactEmergency, MdOutlineMapsHomeWork, MdMeetingRoom } from "react-icons/md";
// import { GiCeilingLight, GiFloorHatch, GiClosedDoors } from "react-icons/gi";

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [anchorElProfile, setAnchorElProfile] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const handleMenuClick = (event, menu) => {
//     setAnchorEl(menu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleProfileClick = (event) => {
//     setAnchorElProfile(event.currentTarget);
//   };

//   const handleProfileClose = () => {
//     setAnchorElProfile(null);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const searchMap = {
//       "home": "/",
//       "services": "/services",
//       "projects": "/projects",
//       "contact": "/contact",
//       "login": "/login",
//       "signup": "/signup",
//       "google": "/google",
//       // Add other search terms here...
//     };
//     const path = searchMap[searchQuery.toLowerCase()];
//     if (path) {
//       navigate(path);
//     } else {
//       alert('Page not found');
//     }
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: '#354F52', height: "70px" }}>
//       <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        
//         <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
//           <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', fontSize: "24px" }}>
//             <FaHome style={{ marginRight: '10px', height: '40px', width: '40px' }} />
//             Comfort Home
//           </Typography>
//         </Link>

//         <form onSubmit={handleSearch} style={{ flexGrow: 1, marginLeft: '50px', marginRight: '50px' }}>
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <IconButton size="small" type="submit" aria-label="search">
//                     <FaSearch style={{ color: 'white' }} />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//               style: { backgroundColor: 'white', borderRadius: '50px', width: '300px', height: '40px' },
//             }}
//           />
//         </form>

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <Button color="inherit" component={Link} to="/services" style={{ marginRight: '10px' }}>
//             <MdHomeRepairService style={{ marginRight: "7px" }} /> Services
//           </Button>
//           <Button color="inherit" component={Link} to="/projects" style={{ marginRight: '10px' }}>
//             Projects
//           </Button>
//           <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '10px' }}>
//             Contact
//           </Button>

//           <IconButton onClick={handleProfileClick} style={{ color: 'white' }}>
//             <FaUserCircle style={{ fontSize: '28px' }} />
//           </IconButton>
//           <Menu
//             anchorEl={anchorElProfile}
//             open={Boolean(anchorElProfile)}
//             onClose={handleProfileClose}
//             PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
//           >
//             <MenuItem onClick={handleProfileClose} component={Link} to="/login">Login</MenuItem>
//             <MenuItem onClick={handleProfileClose} component={Link} to="/signup">Signup</MenuItem>
//             <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
//           </Menu>
//         </div>
//       </Toolbar>

//       <Toolbar style={{ backgroundColor: '#52796F', justifyContent: 'center', padding: '0 9px' }}>
//         <Button
//           color="inherit"
//           onClick={(e) => handleMenuClick(e, 'light')}
//           style={{ marginRight: '20px' }}
//         >
//           <GiCeilingLight style={{ marginRight: "7px" }} /> Light Designs
//         </Button>
//         <Menu
//           anchorEl={anchorEl === 'light' ? anchorEl : null}
//           open={Boolean(anchorEl === 'light')}
//           onClose={handleMenuClose}
//           PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
//         >
//           <MenuItem onClick={handleMenuClose} component={Link} to="/pendant">Pendant</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/ambient">Ambient</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/ceiling">Ceiling</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/fixedlight">Fixed Light</MenuItem>
//         </Menu>

//         <Button
//           color="inherit"
//           onClick={(e) => handleMenuClick(e, 'doors')}
//           style={{ marginRight: '20px' }}
//         >
//           <GiClosedDoors style={{ marginRight: "7px" }} /> Doors
//         </Button>
//         <Menu
//           anchorEl={anchorEl === 'doors' ? anchorEl : null}
//           open={Boolean(anchorEl === 'doors')}
//           onClose={handleMenuClose}
//           PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
//         >
//           <MenuItem onClick={handleMenuClose} component={Link} to="/wooden">Wooden</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/playwood">Playwood</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/pvcdoor">PVC Doors</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/glassdoor">Glass Doors</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/slidingdoor">Sliding Doors</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/aluminiumdoor">Aluminium Doors</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/steeldoor">Steel Doors</MenuItem>
//         </Menu>

//         <Button
//           color="inherit"
//           onClick={(e) => handleMenuClick(e, 'flooring')}
//           style={{ marginRight: '20px' }}
//         >
//           <GiFloorHatch style={{ marginRight: "7px" }} /> Flooring
//         </Button>
//         <Menu
//           anchorEl={anchorEl === 'flooring' ? anchorEl : null}
//           open={Boolean(anchorEl === 'flooring')}
//           onClose={handleMenuClose}
//           PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
//         >
//           <MenuItem onClick={handleMenuClose} component={Link} to="/granites">Granites</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/marble">Marble</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/ceramics">Ceramics</MenuItem>
//         </Menu>

//         <Button
//           color="inherit"
//           onClick={(e) => handleMenuClick(e, 'exterior')}
//           style={{ marginRight: '20px' }}
//         >
//           <MdOutlineMapsHomeWork style={{ marginRight: "7px" }} /> Exterior Designs
//         </Button>
//         <Menu
//           anchorEl={anchorEl === 'exterior' ? anchorEl : null}
//           open={Boolean(anchorEl === 'exterior')}
//           onClose={handleMenuClose}
//           PaperProps={{ style: { backgroundColor: "#8E7AB5", color: "white" } }}
//         >
//           <MenuItem onClick={handleMenuClose} component={Link} to="/cottage">Cottage</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/beach">Beach House</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/modern">Modern</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/villa">Villa</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
