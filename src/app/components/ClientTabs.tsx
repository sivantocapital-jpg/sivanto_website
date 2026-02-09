"use client";

import { useState } from "react";

export default function ClientTabs() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <div>
      {/* ================= TAB BUTTONS ================= */}
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
        <button
          className={`tab-btn ${activeTab === "msme" ? "active" : ""}`}
          onClick={() => setActiveTab("msme")}
        >
          MSME Loan
        </button>
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="tab-content">
        {activeTab === "why" && (
          <>
            <h4>Why Choose Sivanto Capital Business Loan?</h4>
            <ul>
              <li>Attractive Interest Rates – Starting at 14% p.a.</li>
              <li>Loan Amount – From ₹10,000 to ₹1 Crore</li>
              <li>Quick Approval – Get loan approval in just 4 hours </li>
              <li>Fast Disbursal – Funds credited to your account within a short time</li>
              <li>Flexible Tenure –  Repayment period of up to 36 months </li>
              <li>Low Processing Fee – Transparent and cost-effective </li>
              <li>Easy Documentation – Minimal paperwork for faster processing </li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
          <>
            <h4>Eligibility Criteria</h4>
            <p>To keep the process simple, here’s who can apply for a PaisaPulse Business Loan: </p>
            <ul>
              <li>Business vintage: Minimum 1 year in operation </li>
              <li>Annual Turnover: Varies as per lender (for MSME loans, minimum turnover of ₹1 Crore) )</li>
              <li>Credit Score: Preferably 750+</li>
              <li>No previous loan Defaults</li>
            </ul>

            <h4>Eligible Entities</h4>
            <ul>
              <li>Individuals, Business Owners, Startups, Entrepreneurs </li>
              <li>Self-Employed Professionals (Doctors, CAs, Architects, Designers, etc.) </li>
              <li>MSMEs, Small & Medium Enterprises </li>
              <li>Sole Proprietorships, Partnerships, LLPs, Private & Public Limited Companies </li>
              <li>NGOs, Co-operative Societies, Trusts engaged in services, trading, or manufacturing </li>
            </ul>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required</h4>
            <p>Applying for a PaisaPulse Business Loan requires basic documentation: </p>
            <ul>
              <li>KYC Documents (PAN, Aadhaar, Passport, Voter ID, Driving License, Utility Bills) </li>
              <li>Business Incorporation Certificate</li>
              <li>Bank Statements – Last 12 months</li>
              <li>Copy of Non-Collateral Overdraft (if applicable) </li>
              <li> Any other documents as per lender’s requirement </li>
            </ul>
          </>
        )}

        {activeTab === "msme" && (
          <>
            <h4>Special MSME Loan with Sivanto Capital</h4>
            <p className="service-desc">
              We also offer tailor-made MSME Loans with government subsidies and benefits: 
            </p>

            <ul>
              <li>Minimum Turnover: ₹1 Crore</li>
              <li>Interest Rate: Starting at 9% p.a.</li>
              <li>MSME Subsidy Applicable (as per Govt. schemes)</li>
              <li>Flexible repayment & attractive terms</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
