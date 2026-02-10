"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";
import "../../styles/loan-common.css";

export default function PersonalLoanClient() {
  const [activeTab, setActiveTab] = useState("why");

  const faq = [
    {
      question: "What is a Personal Loan?",
      answer:
        "A personal loan is an unsecured loan used for personal needs like education, medical, travel, or debt consolidation.",
    },
    {
      question: "How long does approval take?",
      answer:
        "Approval usually happens within 24 hours after submitting documents.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanPersonal.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          <div className="loan-left">
            <h1>Personal Loan</h1>
            <ul>
              <li>✅ Interest rates starting at 10.25% p.a.</li>
              <li>✅ Low processing fee with quick approval</li>
              <li>✅ Flexible tenure up to 7 years</li>
              <li>✅ Instant disbursal within 24 hours</li>
              <li>✅ Loan amount from ₹2 Lakhs to ₹1 Crore</li>
              <li>✅ Minimum salary eligibility – ₹20,000 onwards</li>
              <li>✅ T&C Apply</li>
            </ul>
            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Apply Now and Get Started</button>
            </Link>
          </div>

          <div className="loan-right">
            <h2>Looking for a Personal Loan?</h2>
            <p>Let us help you find the most suitable offers.</p>
            <input type="text" placeholder="Name as Per Pancard" />
            <input type="tel" placeholder="Your Mobile Number" />
            <button className="loan-btn loan-full">Apply</button>
          </div>
        </div>
      </section>

      {/* ================= COMMON SERVICE SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT */}
          <div className="service-left">
            <h1 className="service-title">Personal Loan</h1>
            <h3 className="service-tagline">– Quick & Hassle-Free Loan with Sivanto Capital</h3>

            <p className="service-desc">
              Looking for instant financial support to meet your personal needs?
              With Sivanto Capital Personal Loans, you can access funds up to ₹1 Crore
              at attractive interest rates, starting from just 10.25% p.a.
              Whether it’s for a medical emergency, wedding, education, travel,
              or debt consolidation, our loan is designed for fast approvals,
              minimal documentation, and disbursal within 24 hours.
            </p>

            {/* TABS */}
            <div className="service-tabs">
              <button
                className={`tab-btn ${activeTab === "why" ? "active" : ""}`}
                onClick={() => setActiveTab("why")}
              >
                Why Sivanto Capital
              </button>
              <button
                className={`tab-btn ${activeTab === "eligibility" ? "active" : ""}`}
                onClick={() => setActiveTab("eligibility")}
              >
                Eligibility
              </button>
              <button
                className={`tab-btn ${activeTab === "documents" ? "active" : ""}`}
                onClick={() => setActiveTab("documents")}
              >
                Documents Required
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="tab-content">
              {activeTab === "why" && (
                <>
                  <h3 className="top-margin-only">Why Choose Sivanto Capital Personal Loan?</h3>
                  <ul className="bullet-margin">
                    <li>Attractive Interest Rates – Starting at 10.25% p.a.</li>
                    <li>Quick Disbursal – Funds within 24 hours</li>
                    <li>Flexible Loan Amount – ₹2 Lakhs to ₹1 Crore</li>
                    <li>Easy Tenure Options – Up to 7 years</li>
                    <li>Low Processing Fee – Transparent & affordable</li>
                    <li>Minimal Eligibility – Salaried & self-employed</li>
                  </ul>
                </>
              )}

              {activeTab === "eligibility" && (
                <>
                  <h4>Eligibility Criteria</h4>
                  <p className="top-margin-only">To make the loan process simple, we have kept the eligibility requirements straightforward: </p>
                  <strong>For Salaried Individuals:</strong>
                  <ul className="top-margin-only bullet-margin">
                    <li>Minimum Age: 23 years</li>
                    <li>Maximum Age: 60 years or retirement age</li>
                    <li>Minimum Salary: ₹20,000 per month</li>
                  </ul>

                  <strong >For Self-Employed Individuals:</strong>
                  <ul className="top-margin-only bullet-margin">
                    <li>Minimum Age: 25 years</li>
                    <li>Maximum Age: 65 years at maturity</li>
                    <li>Business vintage: Minimum 3 years</li>
                  </ul>
                </>
              )}

              {activeTab === "documents" && (
                <>
                  <h4>Documents Required</h4>
                  <p className="top-margin-only">Applying for a personal loan with Sivanto Capital is hassle-free and requires only basic documents: </p>
                  <ul className="bullet-margin">
                    <li>Photo ID Proof (Aadhar, PAN, Passport, Voter ID)</li>
                    <li>Address Proof (Utility bills, Rental Agreement, Aadhar, Passport, etc.) </li>
                    <li>Income Proof Documents</li>
                    <li>Latest Salary Slips (for salaried individuals) </li>
                    <li>Business Proof (for self-employed)</li>
                  </ul>
                </>
              )}
            </div>

            {/* APPLY STEPS */}
           <div className="apply-steps">
  <h3 className="service-small-heading">How to Apply for a Personal Loan with Sivanto Capital?</h3>
  <ul>
    <li>
      <strong>Check Your Eligibility – </strong>
      Quickly verify if you meet our loan criteria.
    </li>
    <li>
      <strong>Submit Your Application Online – </strong>
      Fill out the simple form and upload your documents.
    </li>
    <li>
      <strong>Instant Approval – </strong>
      Get a quick loan decision within minutes.
    </li>
    <li>
      <strong>Loan Disbursal – </strong>
      Receive funds directly in your bank account within 24 hours.
    </li>
  </ul>

  <h3 className="service-small-heading">Why Sivanto Capital is the Right Choice for You?</h3>
  <p>
    At Sivato Capital, we understand that financial needs can arise unexpectedly. 
    That’s why we bring you fast, secure, and transparent personal loan solutions. 
    With competitive interest rates, flexible repayment options, and doorstep support, 
    we ensure your borrowing journey is stress-free. 
  </p>

  <p className="cta-text">
    👉 Apply Now for a Sivanto Capital Personal Loan and enjoy
    quick approvals and peace of mind.
  </p>

  <p className="disclaimer">
    Disclaimer: Loan approval, interest rates, and terms are subject
    to eligibility and lender’s discretion. T&C apply.
  </p>
</div>

          </div>

          {/* RIGHT */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li className="active">
                <Link href="/personal-loan">Personal Loan</Link>
              </li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li><Link href="/home-loan">Home Loan</Link></li>
              <li><Link href="/loan-against-property">Loan Against Property</Link></li>
              <li><Link href="/loan-against-insurance">Loan Against Insurance Policies</Link></li>
              <li><Link href="/loan-against-mutual-funds">Loan Against Mutual Funds & Shares</Link></li>
              <li><Link href="/health-insurance">Health Insurance</Link></li>
              <li><Link href="/life-insurance">Life Insurance</Link></li>
              <li><Link href="/credit-cards">Credit Cards</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
