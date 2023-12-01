import React from "react";
import Image from "next/image";
import { data } from "@/constant/index-page";

const KeyFeature = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center text-2xl font-bold">
        <h1>ตอบโจทย์ร้านค้าทุกประเภท</h1>
      </div>
      <div className="flex flex-col bg-orange-500 p-3 rounded-xl content-center mt-2">
        <div className="bg-white w-36 h-36 rounded-md relative">
          <div className="flex justify-center my-4 absolute">
            <Image
              src="/sunmi-device.png" // path relative to the `public` directory
              alt="Description of the image"
              width={200} // Set the width of the image
              height={150} // Set the height of the image
            />
          </div>
        </div>
        <div className="text-white text-center py-4">
          <h1 className="text-2xl font-bold">Recommended Features</h1>
          <p>จ่ายเพียงครั้งเดียว พร้อมบริการช่วยเหลือฟรี!! ตลอดอายุการใช้งาน</p>
        </div>
        <div className="bg-white px-4 py-4 rounded-md">
          {data.map((card) => (
            <div className="pb-2">
              <h3 className="text-lg font-bold text-orange-500">
                {card.kfHeader}
              </h3>
              <p>{card.kfDetail}</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default KeyFeature;
