import React from 'react';
import video from '../components/backgroundsignup.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='login-container'>
   
      <video className='login-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

     
      <div className='login-content'>
        <Paper elevation={10} square className="login-paper" style={{ backgroundColor: "silver", maxWidth: '300px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>

         <center>

          <div className='id1' style={{ marginBottom: '20px' }}>
          </div>
         </center>

       
          <form>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              autoFocus
              placeholder="Enter your name"
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your email"
              style={{ marginBottom: '20px' }}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your password"
              style={{ marginBottom: '20px' }}
            />
            <TextField
              id="no"
              name="no"
              label="Number"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your number"
              style={{ marginBottom: '20px' }}
            />
            <Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              >
              Signup
            </Button>
              </Link>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;