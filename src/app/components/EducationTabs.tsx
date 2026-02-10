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
            <ul className="bullet-margin">
              <li>Attractive Interest Rates – Starting at just 9.25% p.a. </li>
              <li>Loan Amount – Up to ₹1 Crore for domestic studies and up to ₹2 Crore for international studies </li>
              <li>Quick Loan Sanction – Fast and easy approval process</li>
              <li>Flexible Repayment – Part-prepayment option available </li>
              <li>Covers Wide Range of Expenses – Tuition fee, accommodation, travel, books, and more </li>
              <li>Trusted Co-Borrower Support – Parents, guardians, or relatives can co-sign </li>
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
                  <td>Academic Record </td>
                  <td>Proven good track record </td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>Completed 12th Standard </td>
                </tr>
                
                <tr>
                  <td>Institutes</td>
                  <td>Recognized and accredited institutes in India & overseas </td>
                </tr>
                
                <tr>
                  <td>Course</td>
                  <td>Graduate / Postgraduate / PG Diploma in Professional</td>
                </tr>
            <tr>
                  <td>Loan Amount </td>
                  <td>Domestic – Up to ₹1 Crore and for International – Up to ₹2 Crore </td>
                </tr>
                <tr>
                  <td>Co-Borrower</td>
                  <td>Parents, Spouse, Siblings, Grandparents, In-laws, Uncles/Aunts (Maternal/Paternal) </td>
                </tr>
                <tr>
                  <td>Security</td>
                  <td>Residential Property, Fixed Deposit, or Cross-collateral with Home Loan </td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {activeTab === "documents" && (
          <>
            <h4>Documents Required for Education Loan</h4>
            <p className="top-margin-only">Here’s the list of documents required while applying: </p>
            <ul className="bullet-margin">
              <li>Application Form – Duly filled online iLENS form with photographs</li>
              <li>Photographs – 2 recent passport-sized photographs </li>
              <li>Academic Records – Mark sheets of 10th/12th or latest education certificate </li>
              <li>Admission Proof – Admission letter from the institute with fee structure </li>
              <li>Identity Proof – Aadhaar Card, PAN Card, Passport, Driving License, or Voter ID </li>
              <li>Age Proof – Birth Certificate, Aadhaar, Passport, or School Certificate </li>
              <li>Residence Proof – Ration Card, Gas Book, Utility Bills, Bank Statement, or Aadhaar </li>
              <li>Bank Statements – Last 6 months of student/co-borrower/guarantor </li>
              <li>Income Proof – Salary slips, Form 16, ITR of past 2 years of parent/guardian/co-borrower </li>
              <li>Asset & Liability Documents – Latest statements of financial holdings </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
