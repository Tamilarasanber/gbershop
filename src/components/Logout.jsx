import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data
         localStorage.removeItem('viewcartItem'); // Clear user data
        navigate('/login'); // Redirect to Login page
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                <h2 className="text-2xl mb-4">Logout</h2>
                <p>Are you sure you want to log out?</p>
                <button 
                    onClick={handleLogout} 
                    className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};


export default Logout;