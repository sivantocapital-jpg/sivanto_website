"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";



import { useState } from "react";
import "../../styles/loan-common.css";

export default function PersonalLoanPage() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
    
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanPersonal.jpg')" }}
      >
        <div className="loan-overlay"></div>
         <Navbar />  {/* ✅ Add Navbar here */}

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
            <button className="loan-btn">Apply Now and Get Started</button>
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
            <h3 className="service-tagline">
              – Quick & Hassle-Free Loan with Sivanto Capital
            </h3>

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
                  <h4>Why Choose Sivanto Capital Personal Loan?</h4>
                  <ul>
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
                  <strong>For Salaried Individuals:</strong>
                  <ul>
                    <li>Minimum Age: 23 years</li>
                    <li>Maximum Age: 60 years or retirement age</li>
                    <li>Minimum Salary: ₹20,000 per month</li>
                  </ul>

                  <strong>For Self-Employed Individuals:</strong>
                  <ul>
                    <li>Minimum Age: 25 years</li>
                    <li>Maximum Age: 65 years at maturity</li>
                    <li>Business vintage: Minimum 3 years</li>
                  </ul>
                </>
              )}

              {activeTab === "documents" && (
                <>
                  <h4>Documents Required</h4>
                  <ul>
                    <li>Photo ID Proof (Aadhar, PAN, Passport, Voter ID)</li>
                    <li>Address Proof</li>
                    <li>Income Proof Documents</li>
                    <li>Latest Salary Slips (salaried)</li>
                    <li>Business Proof (self-employed)</li>
                  </ul>
                </>
              )}
            </div>

            {/* APPLY STEPS */}
            <div className="apply-steps">
              <h4>How to Apply for a Personal Loan with Sivanto Capital?</h4>
              <ul>
                <li>Check Your Eligibility</li>
                <li>Submit Application Online</li>
                <li>Instant Approval</li>
                <li>Loan Disbursal within 24 Hours</li>
              </ul>

              <h4>Why Sivanto Capital is the Right Choice for You?</h4>
              <p>
                We offer fast, secure, and transparent personal loan solutions
                with competitive rates, flexible repayment, and doorstep support.
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
      <Link href="/loan-against-insurance">Loan Against Insurance Policies</Link>
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
