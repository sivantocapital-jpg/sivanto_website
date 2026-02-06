"use client";
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

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT – Logo + Text */}
        <div className="footer-col footer-about">
          <img src="/assets/logo.png" alt="Sivanto Capital" className="footer-logo" />
          <p>
            Get quick loans, credit cards & financial solutions with Sivanto Capital.
            15+ years of trusted service in Vijayawada. Fast approval, low
            interest & hassle-free process.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/loan-process">Loan Process</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

{/* SOCIAL LINKS */}
<div className="footer-col">
 

  <div className="footer-social">
    <a href="https://www.facebook.com/profile.php?id=61587533879360&sk=about" target="_blank" rel="noopener noreferrer">
      <FaFacebookF /> 
    </a>

    <a href="https://www.instagram.com/sivantocapital_pvt_ltd/" target="_blank" rel="noopener noreferrer">
      <FaInstagram /> 
    </a>

    <a href="https://www.linkedin.com/in/hemanth-mogilipalepu-819b26399/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn /> 
    </a>

    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter /> 
    </a>

    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube /> 
    </a>
  </div>
</div>



        {/* SUBSCRIBE NOW */}
        <div className="footer-col">
          <h4>SUBSCRIBE NOW</h4>
          <input type="text" placeholder="Name As Per Pancard" />
          <input type="tel" placeholder="Your Mobile Number" />
          <button className="send-btn">Send Now</button>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <p><strong>Phone:</strong> +91 8639841133</p>
          <p><strong>E-Mail:</strong> info@sivantocapital.in</p>
          <p>
            <strong>Location:</strong><br />
            TNGO Colony Phase 2, House No.128,<br />
            Near Sneha Cars, Srinivasa Nagar Bank Colony,<br />
            Vijayawada, Andhra Pradesh – 520008
          </p>
        </div>

      </div>
    </footer>
  );
}
