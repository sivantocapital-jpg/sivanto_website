"use client";

import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";
import LoanTabsWrapper from "../components/LoanTabsWrapper";
import Link from "next/link";
import "../../styles/loan-common.css";

export default function LoanAgainstPropertyPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanAgainstProperty.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Loan Against Property</h1>
            <ul>
              <li>✅ Interest rates starting at 9% p.a.</li>
              <li>✅ Quick & easy processing</li>
              <li>✅ Multiple types of collateral accepted</li>
              <li>✅ Overdraft facility available</li>
              <li>✅ T&C Apply</li>
            </ul>
            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Leverage Your Property Value Today</button>
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
              Need funds for business expansion, higher education, wedding expenses, 
              or medical emergencies? A Loan Against Property (LAP) from Sivanto Capital allows 
              you to leverage the value of your residential, commercial, or special-use 
              property and get access to substantial financing at competitive rates. 
            </p>
            <p className="service-desc">
              With interest rates starting at just 9% p.a., flexible tenure of up to 15 years, 
              and an overdraft facility, Sivanto Capital makes borrowing against your property simple, 
              secure, and stress-free.
            </p>

            <h3  className="extra-space">What is Loan Against Property?</h3>
            <p>
              A Loan Against Property (LAP) is a secured loan that allows you to borrow by mortgaging 
              your owned property. Instead of selling your asset, you can unlock its value 
              to meet your financial needs.
            </p>
            <p>
              Both salaried professionals and self-employed individuals can apply online with minimal 
              documentation and enjoy comfortable EMIs and flexible repayment options.
            </p>

            {/* ================= CLIENT-SIDE TABS ================= */}
            <LoanTabsWrapper />

            {/* ================= BOTTOM FEATURES ================= */}
            <div className="apply-steps">
              <h3  className="extra-space">Key Features of Sivanto Capital LAP</h3>
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

          {/* RIGHT SIDEBAR */}
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
}
