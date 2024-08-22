import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';

const Login = () => {
    
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        chaeckData(data);
    };

    const chaeckData = (obj) => {
        const { email, password } = obj;
        const urlApi = ``;

        axios.get(urlApi)
            .then((response) => response.data)
            .then((data) => {
                if (data.ok) {
                    navigate('/dashboard');
                } else {
                    setError("Your email or password is incorrect. Please try again.");
                }
            })
            .catch(() => {
                setError("An error occurred. Please try again later.");
            });
    };


    const renderErrorAlert = () => {
        if (!error) return null;
        return (
            <Alert severity="error" sx={{ mt: 2 }}>
                {error}
            </Alert>
        );
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                marginTop: '130px',
                width: '550px',
                height: '450px',
                border: '2px solid #D0D5DD',
                paddingBottom: '30px',
                borderRadius: '12px',
                alignItems: 'center',
                justifyContent:'center',
            }}
        >
            {renderErrorAlert()}
            <Typography 
              sx={{
                color: '#7B35DA',
                fontSize: '30px',
                fontWeight: '550',
                marginTop:'20px',
              
              }}
            >
                Sign In
            </Typography>
            <Box sx={{
                         width: '70px',
                         height: '6px',
                         background: '#7B35DA',
                         borderRadius: '10px',
                         marginBottom: '20px', }} />

            <Box sx={{ width: '400px', mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                    label="Email Address"
                    variant="outlined"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    fullWidth
                    required
                />
            </Box>

            

            <Box sx={{marginLeft:'575px', width: '100%', mt: 1 }}>
                <Typography variant="body2" color="textSecondary">
                    Lost Password? <Typography component="span"  sx={{ cursor: 'pointer' , color:'#7B35DA'}}>Click Here!</Typography>
                </Typography>
            </Box>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, width: '400px', height: 45, fontWeight: 'bold',backgroundColor: '#7B35DA', }}
            >
                Sign in
            </Button>

            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Don't have an account? <Typography component="span" sx={{ cursor: 'pointer', color:'#7B35DA'}} onClick={() => navigate('/register-doctor')}>Sign up</Typography>
            </Typography>
        </Box>
    );
};

export default Login;
