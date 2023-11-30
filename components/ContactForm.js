// components/ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    secondaryPhoneNumber: "",
    lineId: "",
    state: "",
    province: "",
    reason: "",
    posModel: "",
    howDidYouKnow: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // For now, just show a popup message
    alert("Done!");
  };

  return (
    <div
      id="contact-form-section"
      className="rounded-3xl p-4 text-white mt-10 text-center"
      style={{ backgroundColor: "#f47322" }}
    >
      <h2 className="text-2xl font-bold mb-2">Fill the form to contact</h2>
      <p>We will contact you back soon</p>
      <form className="mt-4">
        {/* Row 1 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name-Surname"
            className="flex-1 rounded-l-md p-2 mr-2"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="flex-1 rounded-l-md p-2"
          />
        </div>
        {/* Row 2 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="tel"
            name="secondaryPhoneNumber"
            value={formData.secondaryPhoneNumber}
            onChange={handleInputChange}
            placeholder="Secondary Phone Number"
            className="flex-1 rounded-l-md p-2 mr-2"
          />
          <input
            type="text"
            name="lineId"
            value={formData.lineId}
            onChange={handleInputChange}
            placeholder="Line ID"
            className="flex-1 rounded-l-md p-2"
          />
        </div>
        {/* Row 3 */}
        <div className="flex mb-4">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="State"
            className="flex-1 rounded-l-md p-2 mr-2"
          />
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            placeholder="Province"
            className="flex-1 rounded-l-md p-2"
          />
        </div>
        {/* Row 4 */}
        <div className="mb-2">
          <select
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="w-full rounded-md p-2"
          >
            <option value="" disabled selected>
              What are you contacting us for?
            </option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Row 5 */}
        <div className="mb-2">
          <select
            name="posModel"
            value={formData.posModel}
            onChange={handleInputChange}
            className="w-full rounded-md p-2"
          >
            <option value="" disabled selected>
              Which model of POS do you want?
            </option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Row 6 */}
        <div className="mb-2">
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleInputChange}
            className="w-full rounded-md p-2"
          >
            <option value="" disabled selected>
              How did you know about us?
            </option>
            <option value="advertisement">Advertisement</option>
            <option value="referral">Referral</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Row 7 (Submit Button) */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white rounded-md p-2 w-full" // Change button color
            style={{ backgroundColor: "blue" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
