import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

import "./Register.css";
import { validate } from "./validate";


const Register = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: 'male',
    birthday: '',
    password: '',
    confirm_password: '',
    profile_picture: '',
    role: []
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  
    setIsFormValid(
        Object.keys(validationErrors).length === 0 &&
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirm_password &&
      formData.birthday &&
      formData.profile_picture &&
      formData.role.length > 0
    );
}, [formData]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setTouched({
        ...touched,
        [name]: true
      });
  };
  
  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      profile_picture: event.target.files[0]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Marquer tous les champs comme touchés
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Nouveau membre enregistré:", formData);
      navigate('/login');
    }
  };
  

  const renderAlerts = () => {
    return Object.keys(errors).map((key, index) => (
      touched[key] && (
        <Alert key={index} variant="outlined" severity="error" style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: '80%',
          maxWidth: '600px',
          backgroundColor:'red',
        }}>
          {errors[key]}
        </Alert>
      )
    ));
  };
  
  

  return (
      <div style={{ position: 'relative', paddingTop: '20px' }}>
            {renderAlerts()}
            <form className="form-container" onSubmit={handleSubmit} style={{ marginTop: '60px' }}>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
      <div className="inputs">
        <div style={{ display: 'flex', justifyContent: 'space-between',  width: '100%' }}>
          <div className="input" style={{ flex: '1', marginRight: '8px', width: '270px' }}>
           
          
            <input 
              type="text" 
              name="first_name" 
              id="first_name"
              value={formData.first_name} 
              onChange={handleChange} 
              required 
              placeholder="First Name"
            />
          

          </div>
          <div className="input" style={{ flex: '1', width: '270px' }}>
            
            <input 
              type="text" 
              name="last_name" 
              id="last_name"
              value={formData.last_name} 
              onChange={handleChange} 
              required 
              placeholder="Last Name"
            />
      
          </div>
        </div>

        <div className="input" style={{ width: '100%' }}>
          
          
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Email Address"
          />
         
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="input" style={{ flex: '1', marginRight: '8px', width: '250px' }}>
           
            <input 
              type="password" 
              name="password" 
              id="password"
              value={formData.password} 
              onChange={handleChange} 
              required 
              placeholder="Password"
            />
 
          </div>
          <div className="input" style={{ flex: '1', width: '250px' }}>
           
            <input 
              type="password" 
              name="confirm_password" 
              id="confirm_password"
              value={formData.confirm_password} 
              onChange={handleChange} 
              required 
              placeholder="Confirm Password"
            />
      

          </div>
        </div>

        <div className="input">
         
          <input 
            type="tel" 
            name="phone" 
            id="phone"
            value={formData.phone} 
            onChange={handleChange} 
            required 
            placeholder="Phone Number"
          />
       
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="input" style={{ flex: '1', marginRight: '8px', width: '167px' }}>
           
            <select 
              name="gender" 
              id="gender"
              value={formData.gender} 
              onChange={handleChange} 
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
        
          </div>
          <div className="input" style={{ flex: '1', width: '167px' }}>
           
            <input 
              type="date" 
              name="birthday" 
              id="birthday"
              value={formData.birthday} 
              onChange={handleChange} 
              required 
            />
 
          </div>
        </div>

        <div className="input">
          
          <input 
            type="file" 
            name="profile_picture" 
            id="profile_picture"
            onChange={handleFileChange} 
            required
          />
        </div>

        <div className="input">
          <select 
            name="role" 
            id="role"
            value={formData.role} 
            onChange={handleChange} 
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
          </select>

        </div>
      </div>

      <div className="submit-container">
        <button type="submit" className={`submit ${isFormValid ? 'active' : 'inactive'}`} disabled={!isFormValid} >
          Register
        </button>
      </div>
      <div className="redirect">Already have an account? <span onClick={() => navigate('/login')} >Sign in</span></div>
    </form>
    </div>
  );
}

export default Register;
