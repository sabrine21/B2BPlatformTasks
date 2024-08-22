import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Alert from '@mui/material/Alert';
import DoctorSignUpForm from "./DoctorSignUpForm";
import "./RegisterDoctor.css";
import { validate } from './validate';

const RegisterDoctor = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone: '',
    profile_picture: '',
    profession: '',
    Reference_Medical_Association_ID: '',
  });

  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  }, [formData]);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setFormData({
      ...formData,
      role: event.target.value,
    });
  };

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

  const handleFormDoctorSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit called');
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('New member registered:', formData);
      
    }
  };

  const renderAlerts = () => {
    return Object.keys(errors).map((key, index) => (
      touched[key] && (
        <Alert
          key={index}
          variant="outlined"
          severity="error"
          style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: '80%',
            maxWidth: '600px',
            backgroundColor: '#d136368f',
          }}
        >
          {errors[key]}
        </Alert>
      )
    ));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Box className="multi-step-form">
      <Box className="progress-bar" display="flex" justifyContent="space-between">
        <Box className={step >= 1 ? "active" : ""}>1</Box>
        <Box className={step >= 2 ? "active" : ""}>2</Box>
        <Box className={step >= 3 ? "active" : ""}>3</Box>
      </Box>

      <form onSubmit={handleFormDoctorSubmit}>
        {step === 1 && (
          <Box className="form-step">
            <Box className="step1-container">
              <h2>Select Your Role</h2>
              <FormControl fullWidth margin="normal" required>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={role}
                  onChange={handleRoleChange}
                  label="Role"
                >
                  <MenuItem value="">
                    <em>Select a role</em>
                  </MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={nextStep}
                disabled={!role}
                sx={{
                  width: '400px',
                  backgroundColor: '#7B35DA',
                }}
              >
                NEXT
              </Button>
            </Box>
          </Box>
        )}

        {step === 2 && (
          <Box className="form-step">
            {role === "doctor" ? (
              <DoctorSignUpForm
                formData={formData}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                handleFormDoctorSubmit={handleFormDoctorSubmit}
                isFormValid={Object.keys(errors).length === 0}
                renderAlerts={renderAlerts}
              />
            ) : (
              <>
                <h2>Admin Form</h2>
              </>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={prevStep}
                sx={{
                  width: '200px',
                  backgroundColor: '#EDE7FF',
                  color: '#000',  
                  marginRight: '10px',
                }}
              >
                PREVIOUS
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={nextStep}
                sx={{
                  width: '200px',
                  backgroundColor: '#7B35DA',
                }}
              >
                NEXT
              </Button>
            </Box>
          </Box>
        )}

        {step === 3 && (
          <Box className="form-step">
            <Box sx={{ whiteSpace: 'nowrap', fontFamily: 'Roboto , sans-serif', fontSize: '24px', marginTop: '20px', color: '#7B35DA' }}>Thanks For Your Registration!</Box>

            <Button
              variant="contained"
              color="secondary"
              onClick={prevStep}
              sx={{
                width: '200px',
                backgroundColor: '#EDE7FF',
                color: '#000',
                marginTop: '30px',
              }}
            >
              PREVIOUS
            </Button>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default RegisterDoctor;
