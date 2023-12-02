// pages/index.js

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="px-4">
        <div className="flex flex-auto justify-center mt-4">
          <Image
            src="/D1-01.jpg"
            alt="hello"
            width={2000}
            height={1000}
            loading="eager"
          ></Image>
        </div>
        {/* <div className="flex flex-auto justify-center">
          <Image
            src="/column-2.png"
            alt="hello"
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className="flex flex-auto justify-center">
          <Image
            src="/column-3.png"
            alt="hello"
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className="flex flex-auto justify-center">
          <Image
            src="/column-4.png"
            alt="hello"
            width={1000}
            height={1000}
          ></Image>
        </div> */}
        <div className="container mx-auto p-4 px-28 mt-8">
          {/* Your main content goes here */}
          <div
            className="flex justify-center items-center rounded-3xl"
          >
            {/* Add more content as needed */}
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="flex flex-auto justify-center mt-6">
        <Image
          src="/bot03.svg"
          alt="hello"
          width={1200}
          height={300}
          loading="eager"
        ></Image>
      </div>
    </div>
  );
};

export default Home;
