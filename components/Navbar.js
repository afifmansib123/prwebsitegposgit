// components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4" style={{height: "30px"}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ">
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
        <div className="flex justify-center items-center rounded-2xl p-4" style={{ backgroundColor: "#f47322" }}>
          <a href="#" className="text-white">
          ติดต่อพนักงานขาย
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
