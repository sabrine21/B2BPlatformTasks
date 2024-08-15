import React from 'react';
import './Sidebar.css';
import { Typography } from '@mui/material';

const Sidebar = ({ selectedDoctor, isLoggedIn, onLogout }) => {

    return (
        <div className="sidebar">
            <div className="header">
                <img src="logoKnowlepsy.png" alt="Logo" className="logo" />
                <span className="logo-text">Knowlepsy</span>
            </div>

            <div className="sidebar-menu">
                <button>
                    <span className="button-icon">
                        <img src="pie-chart-03.png" alt="Pie Chart Icon" />
                    </span>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif", 
                            fontSize: "16px",
                            fontWeight: "500", 
                            lineHeight: "24px",
                            textAlign: "left", 
                            color: "#344054",
                        }}
                        >
                        Patient Data Tracking
                    </Typography>
                </button>

                <button>
                    <span className="button-icon">
                        <img src="plus-circle.png" alt="plus-circle" />
                    </span>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif", 
                            fontSize: "16px",
                            fontWeight: "500", 
                            lineHeight: "24px",
                            textAlign: "left", 
                            color: "#344054",
                        }}
                        >
                        Care Network
                    </Typography>
                </button>

                <button>
                    <span className="button-icon">
                        <img src="user-square.png" alt="user-square" />
                    </span>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif", 
                            fontSize: "16px",
                            fontWeight: "500", 
                            lineHeight: "24px",
                            textAlign: "left", 
                            color: "#344054",
                        }}
                        >
                        Patient Profiles
                    </Typography>
                </button>

                <button>
                    <span className="button-icon">
                        <img src="chart-breakout-square.png" alt="chart-breakout-square" />
                    </span>
                    <Typography
                        sx={{
                            fontFamily: "Inter, sans-serif", 
                            fontSize: "16px",
                            fontWeight: "500", 
                            lineHeight: "24px",
                            textAlign: "left", 
                            color: "#344054",
                        }}
                        >
                        Risk and Health Metrics
                    </Typography>
                </button>
            </div>

            <div className="sidebar-footer">
                <div className="settings">
                    <span className="button-icon">
                        <img src="settings-01.png" alt="settings-01" />
                    </span>
                    <Typography
                        sx={{
                            width: "65px",
                            height: "24px",
                            fontFamily: "Inter, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#344054",
                            marginLeft: "12px",
                        }}
                        >
                        Settings
                    </Typography>
                </div>
                
                {isLoggedIn && (
                    <div className="user-profile">
                        <img src="Avatar.png" alt="user-photo" />
                        <div >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    width: "85px",
                                    height: "20px",
                                    fontFamily: "Inter, sans-serif",
                                    fontStyle: "normal",
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    color: "#344054",
                                    margin: "0",
                                    marginLeft: "12px",
                                    display:"flex",
                                }} 
                                >
                                {selectedDoctor.name}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#475467",
                                    width: "141px",
                                    height: "20px",
                                    fontFamily: "Inter, sans-serif",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    display: 'inline',
                                    marginLeft: "12px",
                                }}
                                >
                                { selectedDoctor.email }
                            </Typography>
                        </div>
                        
                        <div className="logout">
                            <img src="Button.png" alt="Logout" onClick={ onLogout } />
                        </div>
                    </div>
                )}

                {!isLoggedIn && (
                    <div className="login">
                        <button onClick={() => alert('Redirect to login page')}>
                            Log In
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
