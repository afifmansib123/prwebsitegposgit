// components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Add your logo here */}
          <img
            src="/your-logo.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <p className="text-white text-lg font-bold">Your App Name</p>
        </div>
        {/* Add your navigation links here */}
        <div className="space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
