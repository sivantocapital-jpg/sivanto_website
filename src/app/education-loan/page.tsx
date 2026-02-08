"use client";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";
 

export default function EducationLoan() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>
          Education Loan in India | Study Abroad & Domestic Loans – Sivanto Capital
        </title>

        <meta
          name="description"
          content="Apply for Education Loans up to ₹1 Crore in India and ₹2 Crore for overseas studies. Low interest rates starting from 9.25% p.a., quick approval, and flexible repayment with Sivanto Capital."
        />

        <meta
          name="keywords"
          content="Education Loan India, Study Abroad Education Loan, Student Loan, Overseas Education Loan, Education Loan Interest Rates, Sivanto Capital"
        />

        <link
          rel="canonical"
          href="https://www.yourdomain.com/education-loan"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LoanOrCredit",
              "name": "Education Loan",
              "description":
                "Education loans for domestic and international studies with funding up to ₹2 Crore, low interest rates, and flexible repayment options.",
              "loanType": "Education Loan",
              "areaServed": "IN",
              "provider": {
                "@type": "Organization",
                "name": "Sivanto Capital",
                "url": "https://www.sivantocapital.in",
                "logo": "https://www.yourdomain.com/assets/logo.png"
              },
              "url": "https://www.sivantocapital.in/education-loan"
            })
          }}
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanEducation.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT */}
          <div className="loan-left">
            <h1>Education Loan</h1>
            <ul>
              <li>✅ Attractive interest rates starting from 9.25% p.a.</li>
              <li>
                ✅ Loan up to ₹1 Crore for domestic & ₹2 Crore for international
                studies
              </li>
              <li>✅ Quick sanction & flexible repayment options</li>
              <li>✅ Hassle-free documentation process</li>
              <li>✅ Covers tuition, hostel, travel, books & more</li>
              <li>✅ T&C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
  <button className="loan-btn">
    Invest in Your Future – Apply Now
  </button>
</Link>
            
          </div>

          {/* RIGHT FORM */}
      
 <CommonSmallForm formType="education-loan" />
        </div>
      </section>

      {/* ================= SERVICE COMMON SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Education Loan</h1>
            <h3 className="service-tagline">
              – Invest in Your Future with Sivanto Capital
            </h3>

            <p className="service-desc">
              Dreaming of higher education but worried about rising costs? Whether
              you plan to study in India or abroad, Sivanto Capital Education Loans
              help you finance your education with ease. Get funding up to ₹2
              Crore at attractive interest rates with quick sanction and flexible
              repayment options.
            </p>

            {/* ================= TABS ================= */}
            <div className="service-tabs">
              <button
                className={`tab-btn ${
                  activeTab === "why" ? "active" : ""
                }`}
                onClick={() => setActiveTab("why")}
              >
                Why Sivanto Capital
              </button>

              <button
                className={`tab-btn ${
                  activeTab === "eligibility" ? "active" : ""
                }`}
                onClick={() => setActiveTab("eligibility")}
              >
                Eligibility
              </button>

              <button
                className={`tab-btn ${
                  activeTab === "documents" ? "active" : ""
                }`}
                onClick={() => setActiveTab("documents")}
              >
                Documents Required
              </button>
            </div>

            {/* ================= TAB CONTENT ================= */}
            <div className="tab-content">
              {activeTab === "why" && (
                <>
                  <h4>Why Choose Sivanto Capital Education Loan?</h4>
                  <ul>
                    <li>Interest Rates starting from 9.25% p.a.</li>
                    <li>
                      Loan up to ₹1 Crore (India) & ₹2 Crore (Abroad)
                    </li>
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

            <p className="cta-text">
              👉 Apply Now for a Sivanto Capital Education Loan and take the first step
              towards your dream career.
            </p>

            <p className="disclaimer">
              Disclaimer: Loan approval, interest rates, and eligibility are
              subject to lender policies. T&C apply.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
    <li><Link href="/personal-loan">Personal Loan</Link></li>
    <li><Link href="/business-loan">Business Loan</Link></li>
    <li className="active"><Link href="/education-loan">Education Loan</Link></li>
    <li><Link href="/home-loan">Home Loan</Link></li>
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
}
