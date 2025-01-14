import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Dashboard() {
    return (
        <div className="w-full h-screen flex">
            <Navbar />
            <Sidebar />
        </div>
    );
}

export default Dashboard;
