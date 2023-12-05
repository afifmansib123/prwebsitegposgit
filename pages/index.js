// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";
import salePageImage from "../public/images/salepage_master-01.jpg";

const Home = () => {
  return (
    <div className={"flex flex-col"}>
      <Navbar />
      <div className="px-4">
        <div className="flex flex-auto justify-center mt-4">
          <Image src={salePageImage} alt="" loading="eager"></Image>
        </div>
        <div className="container mx-auto p-4 px-6 mt-8">
          {/* Your main content goes here */}
          <div className="flex justify-center items-center rounded-3xl">
            {/* Add more content as needed */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
