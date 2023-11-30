import React from "react";

const Navbar = () => {
  return (
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
