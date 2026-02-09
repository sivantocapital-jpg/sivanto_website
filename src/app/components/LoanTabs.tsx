"use client";

import { useState } from "react";

export default function LoanTabs() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
      <div className="service-tabs">
        <button
          className={`tab-btn ${activeTab === "why" ? "active" : ""}`}
          onClick={() => setActiveTab("why")}
        >
          Why Choose
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
          Documents
        </button>
      </div>

      <div className="tab-content">
        {/* ================= WHY CHOOSE ================= */}
        {activeTab === "why" && (
          <div>
            <h4>Why Choose Sivanto Capital Loan Against Property?</h4>
            <ul>
              <li>Lower interest rates compared to personal loans</li>
              <li>Higher loan eligibility depending on property value</li>
              <li>Flexible usage – business, education, medical, or personal needs</li>
              <li>Secure process – your property stays safe while you enjoy liquidity</li>
              <li>Trusted financial partner with a customer-first approach</li>
            </ul>
          </div>
        )}

        {/* ================= ELIGIBILITY ================= */}
        {activeTab === "eligibility" && (
          <div>
            <h4>Eligibility Criteria for Loan Against Property</h4>

            {/* Salaried Individuals */}
            <h5>For Salaried Individuals</h5>
            <ul>
              <li>Must be a resident Indian citizen</li>
              <li>Age: 23 to 62 years*</li>
              <li>Minimum 3 years of work experience in a public/private company or MNC</li>
            </ul>

            {/* Self-Employed Individuals */}
            <h5>For Self-Employed Individuals</h5>
            <ul>
              <li>Must be a resident Indian citizen</li>
              <li>Age: 25 to 70 years</li>
              <li>Should have a steady and proven income source</li>
            </ul>

            {/* Additional Notes */}
            <p>
              Eligibility also depends on credit score, repayment history, and property valuation.
            </p>
          </div>
        )}

        {/* ================= DOCUMENTS ================= */}
        {activeTab === "documents" && (
          <div>
            <h4>Documents Required</h4>
            <ul>
              <li>Latest salary slips (for salaried applicants)</li>
              <li>Bank statements of last 3 months</li>
              <li>PAN Card / Form 60 of all applicants</li>
              <li>Valid ID proof (Aadhaar, Passport, Voter ID)</li>
              <li>Valid address proof (Utility bills, Rent Agreement, etc.)</li>
              <li>Property documents to be mortgaged</li>
              <li>Income Tax Returns (ITR)</li>
              <li>Title documents of the property</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
