"use client";

import { useState } from "react";

export default function HomeLoanTabs() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
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
      </div>

      <div className="tab-content">
        {activeTab === "why" && (
          <>
            <h4>Why Choose Sivanto Capital Home Loan?</h4>
            <ul className="bullet-margin">
              <li>Attractive Interest Rates – Starting at 8.65% p.a.</li>
              <li>High Loan Amount – Finance up to ₹10 Crore</li>
              <li>Long Tenure Options – Repay comfortably over up to 30 years</li>
              <li>Quick Disbursal – Fast processing and loan approval</li>
              <li>Lowest Processing Fee –  Transparent and cost-effective</li>
              <li>Simple Documentation – Minimal paperwork for easy approval </li>
              <li>Digital Sanction – Get approval in 5 simple online steps </li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
  <>
    <h4>Home Loan Eligibility – Salaried Individuals</h4>
    <p>To keep things simple, Sivanto Capital ensures clear eligibility criteria:</p>

    {/* First Table: Nationality & Age */}
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
      </tbody>
    </table>

    {/* Employment Status Line */}
    <p className="extra-space"><strong>Employment Status – </strong>Minimum 3 years of work experience</p>

    {/* Second Table: CIBIL, Income, Loan Amount */}
    <table className="eligibility-table">
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Eligibility</th>
        </tr>
      </thead>
      <tbody>
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
    <h4>Documents Required</h4>
    <ul className="bullet-margin">
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
    </>
  );
}
