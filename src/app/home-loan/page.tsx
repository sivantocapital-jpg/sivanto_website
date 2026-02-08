"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

import { useState } from "react";
import "../../styles/loan-common.css";
import CommonSmallForm from "../components/CommonSmallForm";


const HomeLoan = () => {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanHome.jpg')" }}
      >
        <div className="loan-overlay"></div>
           <Navbar />  {/* ✅ Add Navbar here */}
        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Home Loan</h1>
            <ul>
              <li>✅ Attractive interest rates from 8.65% p.a.</li>
              <li>✅ Loan amount up to ₹10 Crore</li>
              <li>✅ Flexible repayment tenure – up to 30 years</li>
              <li>✅ Fast disbursal & minimal documentation</li>
              <li>✅ Lowest processing fees in the market</li>
              <li>✅ T&amp;C Apply</li>
            </ul>

             <Link href="/quick-loan-app-form">
  <button className="loan-btn">
    Own Your Dream Home – Apply Now
  </button>
</Link>
            
          </div>

          {/* RIGHT FORM */}
           <CommonSmallForm formType="home-loan" />
        </div>
      </section>

      {/* ================= SERVICE CONTENT ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Home Loan</h1>
            <h3 className="service-tagline">
              – Own Your Dream Home with Sivanto Capital
            </h3>

            <p className="service-desc">
              Your dream home is closer than you think. With Sivanto Capital Home Loans, you can enjoy affordable interest rates starting at 8.65% p.a., flexible repayment of up to 30 years, and loan amounts as high as ₹10 Crore. Whether you want to buy a ready-to-move house, construct a new home, or renovate your existing property, our home loan solutions are designed to fit your needs.
            </p>

            <p className="service-desc">
              With easy documentation, lowest processing fees, and quick disbursal, Sivanto Capital makes your home-buying journey hassle-free and stress-free.
            </p>

            {/* ================= TABS ================= */}
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

            {/* ================= TAB CONTENT ================= */}
            <div className="tab-content">
              {activeTab === "why" && (
                <>
                  <h4>Why Choose Sivanto Capital Home Loan?</h4>
                  <ul>
                    <li>Attractive Interest Rates – Starting at 8.65% p.a.</li>
                    <li>High Loan Amount – Finance up to ₹10 Crore</li>
                    <li>Long Tenure Options – Repay comfortably over up to 30 years</li>
                    <li>Quick Disbursal – Fast processing and loan approval</li>
                    <li>Lowest Processing Fee – Transparent and cost-effective</li>
                    <li>Simple Documentation – Minimal paperwork for easy approval</li>
                    <li>Digital Sanction – Get approval in 5 simple online steps</li>
                  </ul>
                </>
              )}

              {activeTab === "eligibility" && (
                <>
                  <h4>Home Loan Eligibility – Salaried Individuals</h4>
                  <p>To keep things simple, Sivanto Capital ensures clear eligibility criteria:</p>
                  <table className="eligibility-table">
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nationality</td>
                        <td>Indian Citizen</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>23 years – 62 years</td>
                      </tr>
                      <tr>
                        <td>Employment Status</td>
                        <td>Minimum 3 years of work experience</td>
                      </tr>
                      <tr>
                        <td>CIBIL Score</td>
                        <td>750 or above</td>
                      </tr>
                      <tr>
                        <td>Income</td>
                        <td>Minimum ₹25,000 – Maximum ₹15 Lakhs (per month)</td>
                      </tr>
                      <tr>
                        <td>Loan Amount</td>
                        <td>As per financial profile and repayment capacity</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}

              {activeTab === "documents" && (
                <>
                  <h4>Documents Required for Home Loan</h4>
                  <ul>
                    <li>Application Form – Duly filled and signed with passport-sized photograph</li>
                    <li>Identity Proof – Aadhaar Card, PAN, Passport, Voter ID, Driving License</li>
                    <li>Residence & Age Proof – Aadhaar, Utility Bills, Rent Agreement, Birth/School Certificate</li>
                    <li>Bank Statements – Last 6 months</li>
                    <li>Income Proof (for Salaried) – Last 3 months’ salary slips, Form 16, Income Tax Returns</li>
                    <li>Income Proof (for Self-Employed) – Business profile, proof of existence, educational qualifications</li>
                    <li>Financial Records – Last 3 years’ ITR with computation, CA-certified balance sheet, and profit & loss account</li>
                    <li>Processing Fee Cheque</li>
                  </ul>
                </>
              )}
            </div>

            {/* ================= APPLY STEPS / BENEFITS ================= */}
            <div className="apply-steps">
              <h4>Benefits of Sivanto Capital Home Loan</h4>
              <ul>
                <li>Buy, build, or renovate – one loan for all home needs</li>
                <li>Flexible repayment tenure – up to 30 years for easy EMIs</li>
                <li>High-value financing – up to ₹10 Crore to match your dream home’s budget</li>
                <li>Minimal paperwork & fast sanction – saves time and effort</li>
                <li>Online application & digital approval – get sanctioned in just 5 steps</li>
              </ul>

              <h4>How to Apply for a Home Loan with Sivanto Capital?</h4>
              <ul>
                <li>Check Eligibility – Confirm you meet the basic criteria.</li>
                <li>Fill Online Application – Complete the simple loan form.</li>
                <li>Upload Documents – Submit required documents online.</li>
                <li>Get Digital Sanction – Instant approval with minimal wait time.</li>
                <li>Loan Disbursal – Funds credited quickly to help you own your dream home.</li>
              </ul>

              <h4>Why Sivanto Capital is the Right Choice?</h4>
              <p>
                At Sivanto Capital, we make your home-buying journey effortless by combining affordable rates, long tenures, digital approvals, and fast processing. With our customer-first approach, we ensure you get the best home loan deal tailored to your needs.
              </p>

              <p className="cta-text">
                👉 Apply Now for a Sivanto Capital Home Loan and take the first step toward owning your dream home.
              </p>

              <p className="disclaimer">
                Disclaimer: Loan eligibility, approval, interest rates, and repayment terms are subject to lender’s discretion. T&C apply.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li className="active"><Link href="/home-loan">Home Loan</Link></li>
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
};

export default HomeLoan;
