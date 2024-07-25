import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#ac844d', height: "60px" }}>
        <Toolbar style={{ minHeight: '70px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginRight: '593px' }}>
              <FaHome style={{ marginRight: '10px' }} />
              Comfort Home
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" style={{ backgroundColor: 'black' }} aria-label="search">
                      <FaSearch style={{ color: 'white' }} />
                    </IconButton>
                  </InputAdornment>
                ),
                style: { backgroundColor: 'silver', borderRadius: '50px', width: '150px', height: '40px' },
              }}
            />
            </div>
          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '10px' }}>Home</Button>
            <Button color="inherit" component={Link} to="/services" style={{ marginRight: '10px' }}>Services</Button>
            <Button color="inherit" component={Link} to="/projects" style={{ marginRight: '10px' }}>Projects</Button>
            <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '10px' }}>Contact</Button>
            <Button color="inherit" component={Link} to="/login" style={{ marginRight: '10px' }}>Login</Button>
            <Button color="inherit" component={Link} to="/signup" style={{ marginRight: '20px' }}>Signup</Button>
          </div>
        </Toolbar>
      </AppBar>

      <AppBar position="static" style={{ backgroundColor: '#ac844d', height: "50px" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
          <Button color="inherit" component={Link} to="/livingroom">Livingroom</Button>
          <Button color="inherit" component={Link} to="/kitchen">Kitchen</Button>
          <Button color="inherit" component={Link} to="/Bedroom">Bedroom</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
