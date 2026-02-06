"use client";
import "../../styles/about.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import your Navbar

// Make page static for SEO
export const dynamic = "force-static";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
    
    // Scroll listener for navbar
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>About Us - Sivanto Capital Services</title>
        <meta
          name="description"
          content="Learn about Sivanto Capital Services Pvt Ltd, a trusted financial services company providing personal, business, home loans, insurance, and more with transparency and professionalism."
        />
        <meta
          name="keywords"
          content="Sivanto Capital, about us, financial services India, personal loans, business loans, home loans, insurance, trusted financial partner"
        />
        <link rel="canonical" href="https://www.yourdomain.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sivanto Capital Services",
              "url": "https://www.yourdomain.com",
              "logo": "https://www.yourdomain.com/assets/logo.png",
              "sameAs": [
                "https://www.facebook.com/YourPage",
                "https://www.linkedin.com/company/yourcompany"
              ]
            })
          }}
        />
      </Head>
 
      {/* Original Page Content */}
      <div className="about-page">
        {/* HERO */}
        <div className="about-hero">
          {/* Navbar with scroll effect */}
  <Navbar isScrolled={isScrolled} />
          <img src="/assets/deal.jpeg" alt="About Us" className="about-bg" />
          <div className="about-overlay"></div>
          <div className="about-content">
            <h1>About Us</h1>
            <p>Home &nbsp;&gt;&gt;&nbsp; About Us</p>
          </div>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="who-we-are-section">
          <div className="who-we-are-container">
            <div className="who-text">
              <h2>Who We Are</h2>
              <p>
                Sivanto Capital Services Pvt Ltd is a professionally structured and
                customer-focused financial services company dedicated to providing
                comprehensive loan and insurance assistance solutions for individuals,
                self-employed professionals, and business enterprises. We operate as a
                trusted service bridge between customers and reputed banks, NBFCs, and
                financial institutions, helping clients identify, apply for, and secure
                the most suitable financial products based on their needs and eligibility.
                <br /><br />
                Our organization is built on the foundation of transparency,
                professionalism, and result-oriented service delivery. We understand that
                every customer’s financial requirement is unique, and therefore we follow
                a personalized approach in evaluating profiles, matching the right
                lenders, and guiding applicants through every stage of the process.
                <br /><br />
                From initial consultation and eligibility assessment to documentation
                support and final approval coordination, we provide structured end-to-end
                assistance.
                <br /><br />
                We offer support across multiple financial products including personal
                loans, business loans, home loans, education loans, loans against
                property, loans against financial assets, insurance solutions, and credit
                cards.
                <br /><br />
                At Sivanto Capital Services Pvt Ltd, we strongly believe in ethical
                business practices, data confidentiality, and responsible financial
                guidance. Our team works with dedication, speed, and accountability to
                deliver dependable service and build long-term relationships with our
                customers and partners.
              </p>
            </div>

            <div className="who-image">
              <img src="/assets/aboutwhoweare.jpg" alt="Who We Are" />
            </div>
          </div>
        </div>

        {/* WHAT WE BELIEVE IN SECTION */}
        <div className="what-we-believe-section">
          <div className="what-we-believe-container">
            <div className="believe-image">
              <img src="/assets/aboutwhatwebelievein.png" alt="What We Believe In" />
            </div>
            <div className="believe-text">
              <h2>What We Believe In</h2>

              <p>
                <strong>1. Built on Trust and Transparency</strong><br />
                At Sivanto Capital Services Pvt Ltd, we place trust and transparency at the
                center of every customer interaction. We believe financial services should
                be delivered with clear communication, honest assessment, and complete
                process visibility. Our team ensures that customers understand eligibility,
                documentation, costs, and timelines before proceeding. By maintaining
                openness and ethical practices, we build long-term confidence and
                dependable relationships with every client we serve.
              </p>

              <p>
                <strong>2. Customer-First Financial Guidance</strong><br />
                We believe every customer’s financial requirement is unique and deserves
                personalized attention. Our approach focuses on understanding each
                client’s needs, repayment capacity, and goals before suggesting any loan
                or insurance solution. We are committed to responsible guidance, correct
                lender matching, and structured support so that customers receive
                solutions that are practical, suitable, and sustainable — not just quick
                approvals.
              </p>

              <p>
                <strong>3. Professional Service with Result Focus</strong><br />
                We believe that speed must be supported by accuracy and professionalism.
                Our service model is designed to deliver fast turnaround while maintaining
                proper verification, compliance, and documentation standards. From enquiry
                to approval, we follow a process-driven method to improve success rates and
                reduce delays. Our goal is to deliver measurable results through disciplined
                execution and expert coordination.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION & VISION SECTION */}
        <div className="mission-vision-section">
          <div className="mission-vision-container">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                Our mission is to simplify access to financial products by delivering
                transparent, reliable, and customer-focused loan and insurance solutions.
                We aim to support individuals and businesses with responsible financial
                guidance, efficient processing, and ethical service practices that help
                customers make informed and confident financial decisions.
              </p>
            </div>

            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>
                Our vision is to become a trusted and recognized financial services partner
                known for professionalism, integrity, and consistent value delivery. We
                aspire to build long-term relationships with customers and institutions by
                setting high standards in service quality, innovation, and customer
                satisfaction across the financial ecosystem.
              </p>
            </div>
          </div>

          <div className="core-values-container">
            <div className="core-values-box">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Integrity:</strong> We follow honest, ethical, and compliant practices in every financial service we provide.</li>
                <li><strong>Customer Commitment:</strong> We prioritize customer needs and deliver personalized solution support.</li>
                <li><strong>Transparency:</strong> We maintain clear communication and process visibility at every stage.</li>
                <li><strong>Professionalism:</strong> We operate with discipline, accuracy, and service accountability.</li>
                <li><strong>Speed with Responsibility:</strong> We focus on fast processing without compromising correctness.</li>
                <li><strong>Confidentiality:</strong> We protect customer data and financial information with strict care.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
