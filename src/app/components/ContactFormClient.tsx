"use client";

import { useState } from "react";
import { FaPhoneAlt, FaTelegramPlane, FaGlobeAmericas } from "react-icons/fa";

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  type FormErrors = {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill your name";
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please provide a valid phone number";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  const getInputClass = (field: keyof FormErrors) => {
    if (errors[field]) return "error";
    if (formData[field as keyof typeof formData]) return "valid";
    return "";
  };

  return (
    <>
      {/* LEFT INFO */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <h4>Have questions?</h4>
        <p>We’re here to help! Feel free to call us or stop by our office at the address below.</p>

        <div className="contact-detail">
          <span className="icon"><FaPhoneAlt /></span>
          <div className="text-group">
            <span className="highlight"> Call us on: </span>
            <span>+91 8639841133</span>
          </div>
        </div>

        <div className="contact-detail">
          <span className="icon"><FaTelegramPlane /></span>
          <div className="text-group">
            <span className="highlight"> Email us on: </span>
            <span>info@sivantocapital.in</span>
          </div>
        </div>

        <div className="contact-detail">
          <span className="icon"><FaGlobeAmericas /></span>
          <div className="text-group">
            <span className="highlight"> Visit us on: </span>
            <span>Vijayawada, Andhra Pradesh - 520008</span>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="contact-form-box">
        <h3>Drop Us a Line</h3>
        <p className="form-subtext">
          Got more questions? Simply fill out the form below, and we’ll get back to you as soon as possible!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={getInputClass("name")}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <div className="two-col">
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={getInputClass("phone")}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClass("email")}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          </div>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={getInputClass("service")}
          >
            <option value="">Select Service</option>
            <option>Personal Loan</option>
            <option>Business Loan</option>
            <option>Education Loan</option>
            <option>Home Loan</option>
            <option>Loan Against Property</option>
            <option>Loan Against Insurance Policies</option>
            <option>Loan Against Mutual Funds & Shares</option>
            <option>Health Insurance</option>
            <option>Life Insurance</option>
            <option>Credit Cards</option>
          </select>
          {errors.service && <p className="error-text">{errors.service}</p>}

          <textarea
            rows={4}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}
