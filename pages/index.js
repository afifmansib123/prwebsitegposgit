// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Your main content goes here */}
        <div className="flex justify-center items-center rounded-3xl mb-5" style={{height: 80 }}>
          <h1 className="text-4xl font-bold" style={{ color: "black" }}>
            ้ำี้รห้กร้หร้รี
          </h1>
        </div>
        <div className="flex justify-center">
          <Image src="/logo.png" alt="myname" height="800" width="1200"></Image>
        </div>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Home;
