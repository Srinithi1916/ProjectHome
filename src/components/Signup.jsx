import React, { useState } from 'react';
import axios from 'axios';
import video from '../components/backgroundsignup.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    no: ''
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    // Basic validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.no) newErrors.no = 'Number is required';

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,15}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 5-12 characters long, contain an uppercase letter, a lowercase letter, and a special character';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post('http://localhost:8080/api/signup', formData);
        setFormData({ name: '', email: '', password: '', no: '' });

        setResult("Sending email...");
        const emailData = new FormData();
        emailData.append("access_key", '98e6c59f-a855-488d-9fd7-ef9a6dc605f4');
        emailData.append("subject", "New Signup");
        emailData.append("name", formData.name);
        emailData.append("email", formData.email);
        emailData.append("message", `Name: ${formData.name}\nEmail: ${formData.email}\nNumber: ${formData.no}`);

        const emailResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: emailData
        });

        const emailResult = await emailResponse.json();

        if (emailResult.success) {
          setResult("Signup successful and email sent!");
          document.getElementById('signup-link').click();  
        } else {
          console.error("Error sending email:", emailResult);
          setResult("Signup successful, but email failed to send.");
        }
      } catch (error) {
        console.error('Error submitting signup form', error);
      }
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
            Signup
          </Typography>
          <center>
            <div className='id1' style={{ marginBottom: '20px' }}></div>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
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
            <TextField
              id="no"
              name="no"
              label="Phone number"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your phone number"
              value={formData.no}
              onChange={handleChange}
              error={!!errors.no}
              helperText={errors.no}
              style={{ marginBottom: '20px' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginBottom: '20px' }}
            >
              Signup
            </Button>
            <Link to="/" id="signup-link" style={{ display: 'none' }} />
          </form>
          <Typography variant="body2" color="textSecondary" align="center">
            {result}
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;
