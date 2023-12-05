// components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    businesstype: "",
    howDidYouKnow: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/19c6e62e-c049-47ac-b516-e65bf61f58dc",
        formData
      )
      .then((response) => {
        console.log(response);
        setFormData({});
      });
  };

  return (
    <div
      id="contact-form-section"
      className="rounded-2xl p-4 text-black text-center flex-auto"
      style={{ backgroundColor: "#ff7d28" }}
    >
      <h2 className="text-4xl font-bold mb-2 text-white my-2">แบบฟอร์มลงทะเบียน</h2>
      <p className="text-2xl text-white">
        กรุณากรอกข้อมูลเพื่อให้พนักงานขายติดต่อกลับ
      </p>
      <form className="mt-4 mb-2 text-xl">
        {/* Row 1 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="ชื่อ-นามสกุล"
            className="flex-1 rounded-l-md p-4 text-xl"
          />
        </div>
        {/* Row 2 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="เบอร์โทร"
            className="flex-1 rounded-l-md p-4 text-xl"
          />
        </div>
        {/* Row 3 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="businesstype"
            value={formData.businesstype}
            onChange={handleInputChange}
            placeholder="ประเภทของธุรกิจ"
            className="flex-1 rounded-l-md p-4 text-xl"
          />
        </div>
        <div className="mb-4">
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleInputChange}
            className="w-full rounded-md p-4 text-xl"
          >
            <option value="" disabled>
              รู้จัก GPOS จากช่องทางไหน
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Event">Event</option>
            <option value="Line">Line</option>
            <option value="Youtube">Youtube</option>
            <option value="Website">Website</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Row 7 (Submit Button) */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white rounded-md p-4 w-full mt-4 text-4xl" // Change button color
            style={{ backgroundColor: "#303030" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
