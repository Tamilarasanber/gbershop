import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gradient">
                    
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-800 hover:text-gray-600">Men</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Women</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Kids</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Beauty</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Genz</a>
                    <a href="#" className="text-pink-600 hover:text-pink-400 relative">
                        Studio <span className="absolute -top-1 -right-2 text-xs text-red-500"><sup>NEW</sup></span>
                    </a>
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4">
                    <input 
                        type="text" 
                        placeholder="Search for products, brands and more" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>

                {/* Profile, Wishlist, Bag Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                        <i className="fas fa-user"></i> Profile
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                        <i className="fas fa-heart"></i> Wishlist
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                        <i className="fas fa-shopping-bag"></i> Bag
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
