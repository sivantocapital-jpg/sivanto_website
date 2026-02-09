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
            <ul>
              <li>Attractive Interest Rates – Starting at 8.65% p.a.</li>
              <li>High Loan Amount – Finance up to ₹10 Crore</li>
              <li>Long Tenure Options – Up to 30 years</li>
              <li>Quick Disbursal – Fast processing</li>
              <li>Lowest Processing Fee – Transparent pricing</li>
              <li>Simple Documentation – Minimal paperwork</li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
          <>
            <h4>Home Loan Eligibility</h4>
            <table className="eligibility-table">
              ...
            </table>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required</h4>
            <ul>
              ...
            </ul>
          </>
        )}
      </div>
    </>
  );
}
