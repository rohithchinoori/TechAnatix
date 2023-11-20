// ContactUs.js
import React, { useState } from "react";
import "./index.css";
import Footer from "../Footer";
import Header from "../Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form submission in local storage
    const submissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optionally, you can provide feedback to the user (e.g., display a success message)
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <Header />
      <div className="form-details">
        <img
          src="https://img.freepik.com/premium-photo/man-showing-contact-us-message-paper_220873-12103.jpg?w=1380"
          alt="contact-banner"
          className="contact-img"
        />
        <h1>
          CONTACT <span className="sp">US</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="form">
            Name:
            <input
              type="text"
              name="name"
              className="input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label className="form">
            Email:
            <input
              type="email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label className="form">
            Message:
            <textarea
              name="message"
              className="input"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <button className="form-but" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
