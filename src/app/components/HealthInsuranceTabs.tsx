"use client";

import { useState } from "react";

export default function HealthInsuranceTabs() {
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
        {activeTab === "why" && (
          <>
            <h4>Why Choose Sivanto Capital Health Insurance?</h4>
            <ul className="bullet-margin">
              <li>Wide range of customized health plans for individuals & families</li>
              <li>Cashless claim settlement at leading network hospitals across India</li>
              <li>Affordable premiums with maximum coverage</li>
              <li>Tax savings under Section 80D</li>
              <li>Quick claim process with dedicated customer support</li>
            </ul>
          </>
        )}

        {activeTab === "eligibility" && (
          <>
            <h4>Eligibility Criteria for Health Insurance</h4>
            <p>The eligibility depends on the insurer and type of policy. Common criteria include: </p>
            <table className="eligibility-table">
              <thead>
                <tr>
                  <th>Eligibility Criteria</th>
                  <th>Specifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age (Adults)</td>
                  <td>18 – 65 years</td>
                </tr>
                <tr>
                  <td>Age (Children)</td>
                  <td>90 days – 18 years</td>
                </tr>
                <tr>
                  <td>Pre-Medical Screening</td>
                  <td>Depends on the insurer & age of applicant</td>
                </tr>
                <tr>
                  <td>Pre-Existing Diseases</td>
                  <td>Covered after a waiting period (typically 2–4 years)</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required for Health Insurance</h4>
            <p className="top-margin-only">To apply for a health insurance policy, you need minimal documentation: </p>
            <ul className="bullet-margin">
              <li>Duly filled and signed application form</li>
              <li>Identity Proof – Aadhaar / Passport / Voter ID / Driving Licence</li>
              <li>Address Proof – Utility Bill / Passport / Aadhaar</li>
              <li>Age Proof – Birth Certificate / 10th or 12th Marksheet / Passport</li>
              <li>PAN Card</li>
              <li>Medical Reports (if required by insurer)</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
