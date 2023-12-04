// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="px-4">
        <div className="flex flex-auto justify-center mt-4">
          <Image
            src="/salepage_master-01.jpg"
            alt="hello"
            width={2000}
            height={1000}
            loading="eager"
          ></Image>
        </div>
        <div className="container mx-auto p-4 px-16 mt-8">
          {/* Your main content goes here */}
          <div className="flex justify-center items-center rounded-3xl">
            {/* Add more content as needed */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
      {/* <div className="flex flex-auto justify-center mt-6">
        <Image
          src="/bot03.svg"
          alt="hello"
          width={1200}
          height={300}
          loading="eager"
        ></Image>
      </div> */}
    </div>
  );
};

export default Home;
