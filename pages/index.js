// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import KeyFeature from "@/components/KeyFeature";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Your main content goes here */}
        <div className="flex justify-center items-center rounded-3xl mb-5" style={{height: 80 }}>
          
        </div>
        {/* <div className="flex justify-center">
          <Image src="/logo.png" alt="myname" height="800" width="1200"></Image>
        </div> */}
        <KeyFeature/>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Home;
