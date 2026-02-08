"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import "../../styles/footer.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubscribe = () => {
    if (!name || !mobile) {
      alert("Please enter both Name and Mobile Number!");
      return;
    }

    // Show alert immediately
    alert("Thank You, we will get back to you soon!!");

    // Clear inputs immediately
    setName("");
    setMobile("");

    // Send email in the background
    fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "footer-subscribe",
        name,
        phone: mobile,
      }),
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
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT – Logo + Text */}
        <div className="footer-col footer-about">
          <img src="/assets/logo.png" alt="Sivanto Capital" className="footer-logo" />
          <p>
            Get quick loans, credit cards & financial solutions with Sivanto Capital.
            3+ years of trusted service in Vijayawada. Fast approval, low
            interest & hassle-free process.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/loan-process">Loan Process</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-col">
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61587500886611" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sivantocapital_pvt_ltd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/hemanth-mogilipalepu-819b26399/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://x.com/SivantoCapital" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="www.youtube.com/@SivantoCapital" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* SUBSCRIBE NOW */}
        <div className="footer-col">
          <h4>SUBSCRIBE NOW</h4>
          <input
            type="text"
            placeholder="Name As Per Pancard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className="send-btn" onClick={handleSubscribe}>
            Send Now
          </button>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <p><strong>Phone:</strong> +91 8639841133</p>
          <p><strong>E-Mail:</strong> info@sivantocapital.in</p>
          <p>
            <strong>Location:</strong><br />
            Vijayawada, Andhra Pradesh – 520008
          </p>
        </div>

      </div>
    </footer>
  );
}
