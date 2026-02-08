"use client";
import { useState } from "react";
import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

const LoanAgainstProperty = () => {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanAgainstProperty.jpg')" }}
      >
        <div className="loan-overlay"></div>
          <Navbar />  {/* ✅ Add Navbar here */}

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Loan Against Property</h1>
            <ul>
              <li>✅ Interest rates starting at 9% p.a.</li>
              <li>✅ Quick & easy processing</li>
              <li>✅ Multiple types of collateral accepted</li>
              <li>✅ Overdraft facility available</li>
              <li>✅ T&amp;C Apply</li>
            </ul>
            <Link href="/quick-loan-app-form">
  <button className="loan-btn">
    Leverage Your Property Value Today
  </button>
</Link>
          
          </div>

          {/* RIGHT FORM */}
           <CommonSmallForm formType="loan-against-property" />
        </div>
      </section>

      {/* ================= SERVICE SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT */}
          <div className="service-left">
            <h1 className="service-title">Loan Against Property</h1>
            <h3 className="service-tagline">
              – Unlock the Value of Your Property with Sivanto Capital
            </h3>

            <p className="service-desc">
              Need funds for business expansion, higher education, wedding expenses, or medical emergencies? A Loan Against Property (LAP) from Sivanto Capital allows you to leverage the value of your residential, commercial, or special-use property and get access to substantial financing at competitive rates. With interest rates starting at 9% p.a., flexible tenure of up to 15 years, and an overdraft facility, we make borrowing against your property simple, secure, and stress-free.
            </p>

            {/* ================= TABS ================= */}
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

            {/* ================= TAB CONTENT ================= */}
            <div className="tab-content">
              {activeTab === "why" && (
                <>
                  <h4>Why Choose Sivanto Capital Loan Against Property?</h4>
                  <ul>
                    <li>Lower interest rates compared to personal loans</li>
                    <li>Higher loan eligibility depending on property value</li>
                    <li>Flexible usage – business, education, medical, or personal needs</li>
                    <li>Secure process – your property stays safe while you enjoy liquidity</li>
                    <li>Trusted financial partner with a customer-first approach</li>
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
                        <td>Age (Salaried)</td>
                        <td>23 to 62 years</td>
                      </tr>
                      <tr>
                        <td>Age (Self-Employed)</td>
                        <td>25 to 70 years</td>
                      </tr>
                      <tr>
                        <td>Employment / Income</td>
                        <td>
                          Salaried – Minimum 3 years experience<br />
                          Self-Employed – Steady & proven income
                        </td>
                      </tr>
                      <tr>
                        <td>Credit Score</td>
                        <td>Depends on credit score & repayment history</td>
                      </tr>
                      <tr>
                        <td>Property Valuation</td>
                        <td>Eligibility depends on property value</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}

              {activeTab === "documents" && (
                <>
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
                </>
              )}
            </div>

            {/* ================= BOTTOM SECTION ================= */}
            <div className="apply-steps">
              <h4>Key Features of Sivanto Capital LAP</h4>
              <ul>
                <li>Attractive Interest Rates – Starting at 9% p.a.</li>
                <li>Quick & Hassle-Free Processing – Simple online application & fast approvals</li>
                <li>High Loan Amount – Based on the property’s market value</li>
                <li>Flexible Tenure – Repay comfortably over up to 15 years</li>
                <li>Overdraft Facility – Withdraw as needed & pay interest only on usage</li>
                <li>Collateral Accepted – Residential, commercial & special-use properties</li>
                <li>Transparent Process – No hidden charges, clear documentation</li>
              </ul>

              <p className="cta-text">
                👉 Apply Online for Sivanto Capital Loan Against Property today and unlock the hidden value of your property with ease.
              </p>

              <p className="disclaimer">
                Disclaimer: Loan eligibility, interest rate, and amount depend on applicant profile, income stability, property valuation, and lender’s discretion. T&C apply.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li><Link href="/home-loan">Home Loan</Link></li>
              <li className="active"><Link href="/loan-against-property">Loan Against Property</Link></li>
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

export default LoanAgainstProperty;
