"use client";

import { useState } from "react";

export default function ClientTabs() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <div>
      <div className="service-tabs">
        <button className={`tab-btn ${activeTab === "why" ? "active" : ""}`} onClick={() => setActiveTab("why")}>
          Why Sivanto Capital
        </button>
        <button className={`tab-btn ${activeTab === "eligibility" ? "active" : ""}`} onClick={() => setActiveTab("eligibility")}>
          Eligibility
        </button>
        <button className={`tab-btn ${activeTab === "documents" ? "active" : ""}`} onClick={() => setActiveTab("documents")}>
          Documents Required
        </button>
        <button className={`tab-btn ${activeTab === "msme" ? "active" : ""}`} onClick={() => setActiveTab("msme")}>
          MSME Loan
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "why" && (
          <>
            <h4>Why Choose Sivanto Capital Business Loan?</h4>
            <ul>
              <li>Attractive Interest Rates – Starting at 14% p.a.</li>
              <li>Loan Amount – ₹10,000 to ₹1 Crore</li>
              <li>Quick Approval – Within 4 hours</li>
              <li>Fast Disbursal – Minimal waiting time</li>
              <li>Flexible Tenure – Up to 36 months</li>
              <li>Low Processing Fee – Transparent pricing</li>
              <li>Easy Documentation – Faster processing</li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
          <>
            <h4>Eligibility Criteria</h4>
            <ul>
              <li>Business vintage: Minimum 1 year</li>
              <li>Annual Turnover: As per lender (₹1 Cr+ for MSME)</li>
              <li>Credit Score: Preferably 750+</li>
              <li>No previous loan defaults</li>
            </ul>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required</h4>
            <ul>
              <li>KYC Documents (PAN, Aadhaar, Passport, etc.)</li>
              <li>Business Incorporation Certificate</li>
              <li>Bank Statements – Last 12 months</li>
            </ul>
          </>
        )}

        {activeTab === "msme" && (
          <>
            <h4>Special MSME Loan with Sivanto Capital</h4>
            <p className="service-desc">
              We offer tailor-made MSME loans with government benefits and subsidy schemes.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
