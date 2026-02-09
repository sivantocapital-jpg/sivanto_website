"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../../styles/quick-loan.css";

export default function QuickLoanClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    queryDate: (() => {
      const today = new Date();
      return `${String(today.getDate()).padStart(2, "0")} / ${String(
        today.getMonth() + 1
      ).padStart(2, "0")} / ${today.getFullYear()}`;
    })(),
  });

  const services = [
    "Personal Loan",
    "Business Loan",
    "Education Loan",
    "Home Loan",
    "Loan Against Property",
    "Loan Against Insurance Policies",
    "Loan Against Mutual Funds & Shares",
    "Health Insurance",
    "Life Insurance",
    "Credit Cards",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Thank You, we will get back to you soon!!");

    const dataToSend = { ...formData, formType: "quick-loan" };

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      address: "",
      queryDate: dataToSend.queryDate,
    });

    fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          console.error("Email sending failed:", result.error);
        }
      })
      .catch((err) => console.error("Error sending email:", err));
  };

  return (
    <div className="page">
      {/* Navbar */}
      <Navbar isScrolled={isScrolled} />

      <div className="form-container">
        <h1 className="title">QUICK LOAN APPLICATION FORM</h1>

        <form className="loan-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name As Per Pancard"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Loan Type --</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="City / Town"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Query Received On</label>
              <input
                type="text"
                name="queryDate"
                value={formData.queryDate}
                readOnly
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
