import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './DoctorSignUpForm.css';

const DoctorSignUpForm = ({ formData, handleChange, handleFileChange, handleFormDoctorSubmit, isFormValid, renderAlerts }) => {
   console.log("submit call here");
  const navigate = useNavigate(); 

  return (
    <Box sx={{ position: 'relative', paddingTop: '20px' }}>
      {renderAlerts()}
      <form className="form-container" onSubmit={handleFormDoctorSubmit} sx={{ marginTop: '60px' }}>
        <Box className="header" sx={{ textAlign: 'center' }}>
          <Box className="text">Sign Up</Box>
          <Box className="underline"></Box>
        </Box>

        <Box className="inputs" sx={{ marginTop: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2 }}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </Box>

          <TextField
            fullWidth
            sx={{ marginTop: 2 }}
            label="Email Address"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2, marginTop: 2 }}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirm_password"
              type="password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </Box>

          <TextField
            fullWidth
            sx={{ marginTop: 2 }}
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2 }}>
            <TextField
              fullWidth
              sx={{ marginTop: 2 }}
              label="Profession"
              name="profession"
              type='text'
              value={formData.profession}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              sx={{ marginTop: 2 }}
              label="Reference Medical Association ID"
              name="Reference_Medical_Association_ID"
              type='text'
              value={formData.Reference_Medical_Association_ID}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
            >
              Upload Profile Picture
              <input
                type="file"
                name="profile_picture"
                hidden
                onChange={handleFileChange}
                required
              />
            </Button>
          </Box>
        </Box>

        <Box sx={{ marginTop: 4 }} className="submition-container">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid}
            className={`submit-container ${isFormValid ? 'active' : 'inactive'}`}
            style={{ backgroundColor: isFormValid ? '#7B35DA' : '#EDE7FF' }}
            onClick={handleFormDoctorSubmit}
          >
            Register
          </Button>
        </Box>

        <Box className="redirect">
          Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: '#7B35DA' }}>Sign in</span>
        </Box>
      </form>
    </Box>
  );
};

export default DoctorSignUpForm;
