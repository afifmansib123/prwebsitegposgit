// components/Navbar.js

import Link from "next/link";
import React from "react";
import logoImage from "../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-6 lg:px-80">
      <div className="container m-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Add your logo here */}
          <Image
            src={logoImage}
            alt="Logo"
            className="h-24 w-24 lg:h-16 lg:w-16 object-contain"
          />
          <p className="text-orange-500 text-2xl font-bold ml-5">G</p>
          <p className="text-white text-2xl font-bold ml-1">POS</p>
        </div>
        {/* Add your navigation links here */}
        <div className="space-x-4">
          <Link href="#contact-form-section">
            <button
              className="flex justify-center items-center rounded-2xl p-5 text-white text-2xl"
              style={{ backgroundColor: "#f47322" }}
              type="button"
            >
              ติดต่อพนักงานขาย
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
