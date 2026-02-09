"use client";

import { useState } from "react";

export default function EducationTabs() {
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
            <h4>Why Choose Sivanto Capital Education Loan?</h4>
            <ul>
              <li>Interest Rates starting from 9.25% p.a.</li>
              <li>Loan up to ₹1 Crore (India) & ₹2 Crore (Abroad)</li>
              <li>Quick approval & fast disbursal</li>
              <li>Flexible repayment options</li>
              <li>Covers tuition, living & travel expenses</li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
          <>
            <h4>Eligibility Criteria</h4>
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
                  <td>16 – 35 years</td>
                </tr>
                <tr>
                  <td>Course</td>
                  <td>Graduate / Postgraduate / Professional</td>
                </tr>
                <tr>
                  <td>Institute</td>
                  <td>Recognized institutions in India & abroad</td>
                </tr>
                <tr>
                  <td>Co-Borrower</td>
                  <td>Parent / Guardian</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required</h4>
            <ul>
              <li>Identity & Address Proof</li>
              <li>Academic Records</li>
              <li>Admission Letter</li>
              <li>Income Proof of Co-Borrower</li>
              <li>Bank Statements</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
