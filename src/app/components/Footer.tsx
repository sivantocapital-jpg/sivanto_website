"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
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

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number!");
      return;
    }

    alert("Thank You, we will get back to you soon!!");

    setName("");
    setMobile("");

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

        <div className="footer-col footer-about">
          <Link href="/">
          <img src="/assets/logo.png" alt="Sivanto Capital Services Logo" className="footer-logo" />
          </Link>
          <p>
            Get quick loans, credit cards, financial solutions, web development, and app development services
             with Sivanto Capital Services Pvt Ltd. Trusted for 3+ years in Vijayawada, we deliver fast approvals, 
             low-interest solutions, modern websites, mobile apps, and hassle-free digital services for businesses and
              individuals.
          </p>
          
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/loan-process">Loan Process</Link></li>
            <li><Link href="/app-development">App Development</Link></li>
            <li><Link href="/web-development">Web Development</Link></li>

            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61587500886611"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sivantocapital_pvt_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-mogilipalepu-819b26399/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/SivantoCapital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital X (Twitter)"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/@SivantoCapital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/918639841133"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sivanto Capital WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-col footer-subscribe">
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
          <button type="button" className="send-btn" onClick={handleSubscribe}>
            Send Now
          </button>
        </div>
      
        <div className="footer-col footer-contact">
          <h4>GET IN TOUCH</h4>
          <p><strong>Phone:</strong> +91 8143228758<br />&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9052730754</p>
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
