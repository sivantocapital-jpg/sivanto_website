import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "Web Development Services | Sivanto Capital",
  description:
    "Professional website development services including business websites, e-commerce platforms, and custom web solutions tailored to your needs.",
  keywords:
    "web development, website design, ecommerce development, business website, custom web solutions",
  alternates: {
    canonical: "https://www.sivantocapital.in/web-development",
  },
};

export default function WebDevelopment() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/webdevelopment.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Web Development</h1>
            <ul>
              <li>✅ Professional & Responsive Website Design</li>
              <li>✅ E-commerce & Business Website Solutions</li>
              <li>✅ SEO Optimized & Fast Loading Pages</li>
              <li>✅ T&amp;C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Get Started</button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="web-development" />
        </div>
      </section>

      {/* ================= PRICING + ZIG-ZAG IMAGES + RIGHT SIDEBAR ================= */}
      <section className="service-common">
        <div
          className="service-wrapper"
          style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}
        >
          {/* LEFT SIDE – Pricing & Images */}
          <div className="service-left" style={{ flex: 2, minWidth: "300px" }}>
            <h1>WEB DESIGNING SERVICES WITH PRICING </h1>

            {/* CORE WEB DESIGN SERVICES */}
            <div className="pricing-row extra-space">
              <div className="pricing-text">
                <h3 className="top-margin-only">CORE WEB DESIGN SERVICES</h3>
                <ul>
                  <li>Website UI/UX Design – ₹5,000 to ₹15,000</li>
                  <li>Responsive Website Design – ₹8,000 to ₹20,000</li>
                  <li>Landing Page Design – ₹3,000 to ₹10,000</li>
                  <li>Website Redesign – ₹6,000 to ₹18,000</li>
                  <li>Wireframing & Prototyping – ₹3,000 to ₹8,000</li>
                </ul>
              </div>
              <div className="pricing-image extra-space" >
                <img src="/assets/uiux.jpg" alt="UI/UX Design" />
              </div>
            </div>

            {/* WEBSITE DEVELOPMENT SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3  className="top-margin-only">WEBSITE DEVELOPMENT SERVICES</h3>
                <ul>
                  <li>Static Website (5 Pages) – ₹7,000 to ₹15,000</li>
                  <li>Dynamic Website – ₹15,000 to ₹35,000</li>
                  <li>WordPress Website – ₹12,000 to ₹30,000</li>
                  <li>Custom Website Development – ₹25,000 to ₹80,000</li>
                  <li>E-commerce Website – ₹20,000 to ₹75,000</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/web.jpg" alt="Website Development" />
              </div>
            </div>

            {/* E-COMMERCE SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3  className="top-margin-only">E-COMMERCE SERVICES</h3>
                <ul>
                  <li>Online Store Setup – ₹15,000 to ₹40,000</li>
                  <li>Payment Gateway Setup – ₹2,000 to ₹5,000</li>
                  <li>Shopping Cart Setup – ₹3,000 to ₹8,000</li>
                  <li>Product Upload (50 Products) – ₹2,000 to ₹5,000</li>
                  <li>Order Management Setup – ₹5,000 to ₹15,000</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/ecom.jpg" alt="E-Commerce Services" />
              </div>
            </div>

            {/* TECHNICAL SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3  className="top-margin-only">TECHNICAL SERVICES</h3>
                <ul>
                  <li>Domain Registration Support – ₹500 to ₹1,000</li>
                  <li>Web Hosting Setup – ₹1,000 to ₹3,000</li>
                  <li>Website Migration – ₹3,000 to ₹8,000</li>
                  <li>Website Speed Optimization – ₹3,000 to ₹10,000</li>
                  <li>SSL Certificate Setup – ₹1,000 to ₹2,500</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/technical.jpg" alt="Technical Services" />
              </div>
            </div>

            {/* SEO SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3  className="top-margin-only">SEO SERVICES</h3>
                <ul>
                  <li>On-Page SEO – ₹5,000 to ₹15,000</li>
                  <li>Technical SEO – ₹8,000 to ₹20,000</li>
                  <li>Google Analytics Setup – ₹1,000 to ₹3,000</li>
                  <li>Google Search Console Setup – ₹1,000 to ₹2,500</li>
                  <li>Local SEO – ₹6,000 to ₹18,000</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/seo.jpeg" alt="SEO Services" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Other Services */}
          <div
            className="service-right"
            style={{ flex: 0.6, minWidth: "200px" }}
          >
            <h3>OTHER SERVICES</h3>
            <ul>
              <li className="active">
                <Link href="/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/personal-loan">Personal Loan</Link>
              </li>
              <li>
                <Link href="/business-loan">Business Loan</Link>
              </li>
              <li>
                <Link href="/education-loan">Education Loan</Link>
              </li>
              <li>
                <Link href="/home-loan">Home Loan</Link>
              </li>
              <li>
                <Link href="/loan-against-property">Loan Against Property</Link>
              </li>
              <li>
                <Link href="/loan-against-insurance">
                  Loan Against Insurance Policies
                </Link>
              </li>
              <li>
                <Link href="/loan-against-mutual-funds">
                  Loan Against Mutual Funds & Shares
                </Link>
              </li>
              <li>
                <Link href="/health-insurance">Health Insurance</Link>
              </li>
              <li>
                <Link href="/life-insurance">Life Insurance</Link>
              </li>
              <li>
                <Link href="/credit-cards">Credit Cards</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}