"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Head from "next/head";  // ✅ Import Head
import "../../styles/loan-common.css";

export default function BusinessLoan() {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>Business Loan India | Fast Approval & Low Interest – Sivanto Capital</title>
        <meta
          name="description"
          content="Apply for Business Loans up to ₹1 Crore at 14% p.a. Fast approval, minimal documentation, flexible tenure, and MSME benefits with Sivanto Capital."
        />
        <meta
          name="keywords"
          content="business loan, MSME loan, startup loan, loan for small business, low interest business loan, loan India"
        />
        <link rel="canonical" href="https://www.yourdomain.com/business-loan" />
        
        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Business Loan",
              "description": "Sivanto Capital Business Loans: Up to ₹1 Crore, low interest rates, quick approval, flexible repayment, MSME benefits.",
              "provider": {
                "@type": "Organization",
                "name": "Sivanto Capital",
                "url": "https://www.yourdomain.com",
                "logo": "https://www.yourdomain.com/assets/logo.png"
              },
              "interestRate": "14% p.a.",
              "loanType": "Business Loan",
              "amount": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": "10000000" // ₹1 Cr max
              },
              "url": "https://www.yourdomain.com/business-loan"
            })
          }}
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanBusiness.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />  {/* ✅ Add Navbar here */}

        <div className="loan-container">
          {/* LEFT */}
          <div className="loan-left">
            <h1>Business Loan</h1>
            <ul>
              <li>✅ Attractive interest rates from 14% p.a.</li>
              <li>✅ Loan up to ₹1 Crore for business growth</li>
              <li>✅ Approval in just 4 hours</li>
              <li>✅ Fast disbursal & easy documentation</li>
              <li>✅ Flexible tenure up to 36 months</li>
              <li>✅ T&C Apply</li>
            </ul>
            <button className="loan-btn">
              Boost Your Business – Apply Now
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="loan-right">
            <h2>Looking for a Business Loan?</h2>
            <p>Let us help you find the most suitable offers.</p>
            <input type="text" placeholder="Name as Per Pancard" />
            <input type="tel" placeholder="Your Mobile Number" />
            <button className="loan-btn loan-full">Apply</button>
          </div>
        </div>
      </section>

      {/* ================= SERVICE COMMON SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">

          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Business Loan</h1>
            <h3 className="service-tagline">
              – Fuel Your Growth with Sivanto Capital
            </h3>

            <p className="service-desc">
              Every growing business needs the right financial support to expand,
              upgrade, and manage operations seamlessly. With Sivanto Capital
              Business Loans, you can access funding up to ₹1 Crore with interest
              rates starting at 14% p.a., quick approvals, and simple documentation.
              Whether you are a startup, MSME, entrepreneur, or professional,
              our solutions are designed to help you scale faster.
            </p>

            <h4>What is a Business Loan?</h4>
            <p className="service-desc">
              A business loan is a financial facility offered by banks and NBFCs
              to meet working capital needs, purchase equipment, expand operations,
              or manage daily expenses.
            </p>

            <p className="service-desc">
              At Sivanto Capital, we offer both secured and unsecured business loans:
            </p>

            <ul>
              <li><strong>Secured Loans</strong> – Collateral required</li>
              <li><strong>Unsecured Loans</strong> – No collateral required</li>
            </ul>

            <p className="service-desc">
              We also provide access to:
            </p>

            <ul>
              <li>Term Loans (Short, Intermediate & Long-term)</li>
              <li>Working Capital Loans</li>
              <li>Cash Credit & Overdraft Facilities</li>
              <li>Letter of Credit & Invoice Discounting</li>
              <li>Equipment & Machinery Loans</li>
              <li>POS Loans / Merchant Cash Advance</li>
              <li>Loans under Government Schemes</li>
            </ul>

            {/* ================= TABS ================= */}
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

              {/* ✅ 4th TAB ONLY FOR BUSINESS LOAN */}
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

                  <h4>Eligible Entities</h4>
                  <ul>
                    <li>Individuals, Startups, Entrepreneurs</li>
                    <li>Self-Employed Professionals (Doctors, CAs, etc.)</li>
                    <li>MSMEs & SMEs</li>
                    <li>Proprietorships, Partnerships, LLPs, Pvt & Ltd Companies</li>
                    <li>NGOs, Trusts & Co-operative Societies</li>
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
                    <li>Non-Collateral Overdraft Copy (if applicable)</li>
                    <li>Any additional documents as per lender</li>
                  </ul>
                </>
              )}

              {activeTab === "msme" && (
                <>
                  <h4>Special MSME Loan with Sivanto Capital</h4>
                  <p className="service-desc">
                    We offer tailor-made MSME loans with government benefits
                    and subsidy schemes to help small businesses grow faster.
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

            {/* ================= APPLY SECTION ================= */}
            <div className="apply-steps">
              <h4>How to Apply for a Sivanto Capital Business Loan?</h4>
              <ul>
                <li>Check Eligibility</li>
                <li>Submit Application Online</li>
                <li>Get Approval in 4 Hours</li>
                <li>Loan Disbursal for Business Needs</li>
              </ul>

              <h4>Why Sivanto Capital is the Best Choice?</h4>
              <p>
                With competitive rates, fast approvals, MSME benefits,
                and flexible repayment options, we help businesses grow
                without financial hurdles.
              </p>

              <p className="cta-text">
                👉 Apply Now for a Sivanto Capital Business Loan and give your
                business the financial strength it deserves.
              </p>

              <p className="disclaimer">
                Disclaimer: Loan approval, eligibility, interest rates,
                and terms depend on lender’s discretion. T&C apply.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li className="active"><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
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
