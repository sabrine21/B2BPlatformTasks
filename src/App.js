import React, { useState } from 'react';
import Sidebar from './SideBar/Sidebar';
import Header from './Header/Header';

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
        <div className="App">
            <Header 
            doctors={doctors} 
            selectedDoctor={selectedDoctor} 
            onDoctorChange={handleDoctorChange}  />

            <Sidebar
            doctors={doctors} 
            selectedDoctor={selectedDoctor} 
            isLoggedIn={isLoggedIn} 
            onLogout={handleLogout} />
           
        </div>
    );
}

export default App;
