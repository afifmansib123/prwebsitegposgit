<<<<<<< HEAD
// components/Navbar.js

import Link from "next/link";
=======
>>>>>>> c59c6babad3f8d3f420d620f6066a199ecc56020
import React from "react";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Add your logo here */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-13 object-contain"
          />
          <p className="text-orange-500 text-lg font-bold ml-5">G</p>
          <p className="text-white text-lg font-bold ml-1">POS</p>
        </div>
        {/* Add your navigation links here */}
        <div className="space-x-4">
          <Link href="#contact-form-section">
            <button
              className="flex justify-center items-center rounded-2xl p-4 text-white"
              style={{ backgroundColor: "#f47322" }}
              type="button"
            >
              ติดต่อพนักงานขาย
            </button>
          </Link>
=======
    <nav className="bg-white p-4" style={{ height: "30px" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-contain"
            style={{ maxWidth: "100%", height: "auto", width: "100px" }} // Adjust sizes as needed
          />
        </div>
        {/* Add your navigation links here */}
        <div className="space-x-4">
          <div
            className="flex justify-center items-center rounded-2xl p-4"
            style={{ backgroundColor: "#f47322" ,  height: "auto" }}
          >
            <a href="#" className="text-white">
              ติดต่อพนักงานขาย
            </a>
          </div>
>>>>>>> c59c6babad3f8d3f420d620f6066a199ecc56020
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
