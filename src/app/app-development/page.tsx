import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "App Development Services | Sivanto Capital",
  description:
    "Professional app development services including Android apps, iOS apps, business applications, and custom mobile solutions tailored to your needs.",
  keywords:
    "app development, mobile app development, android app, ios app, business app, custom app solutions",
  alternates: {
    canonical: "https://www.sivantocapital.in/app-development",
  },
};

export default function AppDevelopment() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero web-dev-hero"
        style={{ backgroundImage: "url('/assets/appmain.jpeg')" }}
      >
        <div className="loan-overlay-app"></div>

        <Navbar />

        <div className="loan-container">
          <div className="loan-left web-hero-content">

            <div className="web-badge">
              <span className="dot"></span>
              APP DEVELOPMENT SOLUTIONS
            </div>

            <h1 className="web-title">
              Transform Your Ideas <br />
              Into Powerful <br />
              <span>Mobile Applications</span>
            </h1>

            <p className="web-description">
              We build fast, secure, and scalable mobile apps that
              deliver exceptional user experiences and drive
              business growth.
            </p>

            <div className="web-features">

              <div className="feature-item">
                <div className="feature-icon-box">
                  <img src="/assets/modern.png" alt="Modern Technologies" />
                </div>

                <p>
                  Modern <br />
                  Technologies
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <img src="/assets/shieldapp.png" alt="Secure" />
                </div>

                <p>
                  Secure & <br />
                  Reliable
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <img src="/assets/fast2.png" alt="Scalable" />
                </div>

                <p>
                  Scalable <br />
                  Solutions
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <img src="/assets/supportapp.png" alt="Support" />
                </div>

                <p>
                  Ongoing <br />
                  Support
                </p>
              </div>

            </div>

          </div>
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
            <h1>APP DEVELOPMENT SERVICES WITH PRICING </h1>

            {/* CORE APP DESIGN SERVICES */}
            <div className="pricing-row extra-space">
              <div className="pricing-text">
                <h3 className="top-margin-only">Android App Development</h3>
                <ul>
                  <li>User-Friendly Mobile Applications</li>
                  <li>Fast & Smooth Performance</li>
                  <li>Modern UI/UX Design</li>
                  <li>API & Database Integration</li>
                  <li>Secure Login & Authentication</li>
                  <li>Play Store Deployment Support</li>
                  <li>Maintenance & Technical Support</li>
                  <li>Custom Features Based on Business Needs</li>
                </ul>
              </div>
              <div className="pricing-image extra-space">
                <img src="/assets/app1.png" alt="App UI/UX Design" />
              </div>
            </div>

            {/* APP DEVELOPMENT SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">iOS App Development</h3>
                <ul>
                  <li>Premium iPhone & iPad Applications</li>
                  <li>Elegant & Professional UI Design</li>
                  <li>High Security & Data Protection</li>
                  <li>Fast App Performance</li>
                  <li>Apple App Store Submission Support</li>
                  <li>API & Cloud Integration</li>
                  <li>Scalable Business Solutions</li>
                  <li>Ongoing Support & Updates</li>

                </ul>
              </div>
              <div className="pricing-image extra-space">
                <img src="/assets/app2.png" alt="App Development" />
              </div>
            </div>

            {/* E-COMMERCE APP SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">Hybrid App Development</h3>
                <ul>
                  <li>Single App for Android & iOS</li>
                  <li>Cost-Effective Development</li>
                  <li>Faster Project Delivery</li>
                  <li>Smooth Cross-Platform Performance</li>
                  <li>Modern Responsive UI</li>
                  <li>Easy Maintenance & Updates</li>
                  <li>Third-Party API Integration</li>
                  <li>Business-Oriented App Solutions</li>

                </ul>
              </div>
              <div className="pricing-image extra-space">
                <img src="/assets/app3.png" alt="E-Commerce App Services" />
              </div>
            </div>

            {/* TECHNICAL SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">Business App Development</h3>
                <ul>
                  <li>Custom Business Management Apps</li>
                  <li>CRM & Customer Handling Features</li>
                  <li>Employee & Workflow Management</li>
                  <li>Secure Data Storage Solutions</li>
                  <li>Dashboard & Analytics Integration</li>
                  <li>Scalable Enterprise Solutions</li>
                  <li>Cloud-Based System Integration</li>
                  <li>Long-Term Technical Support</li>
                </ul>
              </div>
              <div className="pricing-image extra-space">
                <img src="/assets/app4.png" alt="Technical Services" />
              </div>
            </div>

            {/* APP MARKETING SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">Custom Mobile App Solutions</h3>
                <ul>
                  <li>Fully Customized Application Development</li>
                  <li>Unique UI/UX Based on Brand Identity</li>
                  <li>Advanced Features & Integrations</li>
                  <li>Startup & Enterprise Solutions</li>
                  <li>High Performance & Scalability</li>
                  <li>Secure Payment Gateway Integration</li>
                  <li>AI & Automation Ready Solutions</li>
                  <li>End-to-End Development Support</li>

                </ul>
              </div>
              <div className="pricing-image extra-space">
                <img src="/assets/app5.png" alt="App Marketing Services" />
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

              <li>
                <Link href="/web-development">Web Development</Link>
              </li>
              <li className="active">
                <Link href="/app-development">App Development</Link>
              </li>
              <li>
                <Link href="/personal-loan">Personal Loan</Link>
              </li>
              <li>
                <Link href="/business-loan">Business Loan</Link>
              </li>

              <li>
                <Link href="/home-loan">Home Loan</Link>
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