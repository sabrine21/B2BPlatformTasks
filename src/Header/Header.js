
import React from 'react';
import Typography from '@mui/material/Typography';
import './Header.css';


const Header = ({ selectedDoctor, onDoctorChange }) => {

    return (
     
        <nav className="navbar">

            <div className="navbar-left">
                <p className="welcome-text" style={{ display: 'inline flex' }}>Welcome back,  
                    <Typography
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: "500", 
                            fontSize: "30px", 
                            lineHeight: "38px", 
                            color: "#8754FE",
                            marginLeft:"4px",
                        }}
                        >
                        {selectedDoctor.name}
                    </Typography> 
                </p>
            </div>

            <div className="navbar-right">
                <div className="navbar-icons">
                   <div  className="param">
                     <img src="Icon.png" alt="param" />
                    </div>

                    <div  className="param">
                     <img src="bell-01.png" alt="notif" />
                    </div>
                 </div>
                 
                <div className="profile">
                    <img 
                        src="Avatar.png" 
                        alt="User Profile" 
                        className="profile-picture"
                    />
                </div>
            </div>
        </nav>
    
    );
};

export default Header;
