import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez les composants nécessaires de react-router-dom
import Sidebar from './SideBar/Sidebar';
import Header from './Header/Header';
import RegisterDoctor from './Register/RegisterDoctor';

import Login from './Login/Login';
import DoctorSignUpForm from './Register/DoctorSignUpForm';

function App() {
    const doctors = [
        { name: "Olivia Rhye", email: "olivia@untitledui.com" },
        { name: "Johnson Smith", email: "johnson@untitledui.com" },
        { name: "Emily Stone", email: "emily@untitledui.com" }
    ];

    const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

    const handleDoctorChange = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert('You have been logged out!');
    };

    return (
        <Router>
            
            <div>
                <Routes>
                    {/* Route pour la page Register */}
                    <Route path="/register-doctor" element={<RegisterDoctor />} />
                    {/* Route pour la page Login */}
                    <Route path="/login" element={<Login />} />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
