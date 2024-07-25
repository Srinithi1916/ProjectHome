import React, { useState } from 'react';
import video from '../components/backgroundlogin.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    password: '',
    // number: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    // if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    // if (!formData.number) newErrors.number = 'Number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      document.getElementById('login-link').click();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login-container'>
      <video className='login-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='login-content'>
        <Paper elevation={10} square className="login-paper" style={{ backgroundColor: "silver", maxWidth: '300px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <center>

          <div className='id1'>

          </div>
          <br></br>
          </center>

          <form onSubmit={handleSubmit}>
            {/* <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              autoFocus
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              style={{ marginBottom: '20px' }}
            /> */}

            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
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
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={{ marginBottom: '20px' }}
            />

            {/* <TextField
              id="number"
              name="number"
              label="Number"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your number"
              value={formData.number}
              onChange={handleChange}
              error={!!errors.number}
              helperText={errors.number}
              style={{ marginBottom: '20px' }}
            /> */}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginBottom: '20px' }}
            >
              Login
            </Button>
          </form>

         
          <Link to="/" id="login-link" style={{ display: 'none' }} />
        </Paper>
      </div>
    </div>
  );
};

export default Login;