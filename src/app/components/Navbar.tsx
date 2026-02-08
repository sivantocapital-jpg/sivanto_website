"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import "../../styles/navbar.css";
import "../../styles/applyModal.css";

// Display names for menu
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
  "Credit Cards"
];

// Mapping to slugs/pages
const serviceRoutes: Record<string, string> = {
  "Personal Loan": "/personal-loan",
  "Business Loan": "/business-loan",
  "Education Loan": "/education-loan",
  "Home Loan": "/home-loan",
  "Loan Against Property": "/loan-against-property",
  "Loan Against Insurance Policies": "/loan-against-insurance",
  "Loan Against Mutual Funds & Shares": "/loan-against-mutual-funds",
  "Health Insurance": "/health-insurance",
  "Life Insurance": "/life-insurance",
  "Credit Cards": "/credit-cards"
};

export default function Navbar({ isScrolled = false }: { isScrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loanType: "",
    message: ""
  });
  const [errors, setErrors] = useState<any>({});

  // Handle escape key for modal
  useEffect(() => {
    if (!open) return;
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escHandler);
    return () => {
      window.removeEventListener("keydown", escHandler);
    };
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const validate = () => {
    const err: any = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Valid email required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) err.phone = "Valid phone required";
    if (!form.loanType) err.loanType = "Select loan type";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submitHandler = async () => {
    if (!validate()) return;

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "form1",
          ...form
        })
      });

      const data = await res.json();

      if (data.success) {
        alert("Form submitted successfully ✅");
        setOpen(false);
        setForm({ name: "", email: "", phone: "", loanType: "", message: "" });
      } else {
        alert("Failed to send email. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  const handleMobileApplyClick = () => {
    closeMobileMenu();
    setOpen(true);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>

            {/* Dropdown */}
            <li className="dropdown">
              <span className="dropdown-trigger">
                <strong>
                  Services <FaChevronDown />
                </strong>
              </span>
              <ul className="dropdown-menu">
                {services.map(s => (
                  <li key={s}>
                    <Link href={serviceRoutes[s]}>{s}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/loan-process">Loan Process</Link>
            </li>

            <li><Link href="/contact">Contact</Link></li>

            <li>
              <button className="apply-btn" onClick={() => setOpen(true)}>
                Apply Now
              </button>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu-container ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          <FaTimes size={24} />
        </button>
        
        <ul className="mobile-menu">
          <li>
            <Link href="/" onClick={handleMobileLinkClick}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={handleMobileLinkClick}>About</Link>
          </li>

          {/* Mobile Dropdown */}
          <li className="mobile-dropdown">
            <div 
              className={`mobile-dropdown-trigger ${mobileDropdownOpen ? 'active' : ''}`}
              onClick={toggleMobileDropdown}
            >
              <span>Services</span>
              <FaChevronDown />
            </div>
            <ul className={`mobile-dropdown-menu ${mobileDropdownOpen ? 'active' : ''}`}>
              {services.map(s => (
                <li key={s}>
                  <Link href={serviceRoutes[s]} onClick={handleMobileLinkClick}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/loan-process" onClick={handleMobileLinkClick}>Loan Process</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleMobileLinkClick}>Contact</Link>
          </li>
        </ul>

        <button className="mobile-apply-btn" onClick={handleMobileApplyClick}>
          Apply Now
        </button>
      </div>

      {/* Quick Loan Modal */}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>QUICK LOAN APPLICATION FORM</h3>
              <FaTimes className="close-icon" onClick={() => setOpen(false)} />
            </div>

            <div className="modal-body">
              <input
                placeholder="Enter Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                placeholder="Enter Your Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                placeholder="Enter Your Phone Number"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <select
                value={form.loanType}
                onChange={e => setForm({ ...form, loanType: e.target.value })}
              >
                <option value="">-- Select Loan Type --</option>
                {services.map(s => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              {errors.loanType && <span className="error">{errors.loanType}</span>}

              <textarea
                placeholder="Add any Questions or Preferences"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />

              <button className="send-btn" onClick={submitHandler}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}