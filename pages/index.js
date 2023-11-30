// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Your main content goes here */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Next.js App</h1>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Home;
