"use client";
import Link from "next/link";
import Head from "next/head";
import "../../styles/loan-process.css";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import your Navbar

// Make page static for SEO
export const dynamic = "force-static";

export default function LoanProcess() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inputs can be number or empty string
  const [loanAmount, setLoanAmount] = useState<number | "">("50000");
  const [interestRate, setInterestRate] = useState<number | "">(7);
  const [loanTenure, setLoanTenure] = useState<number | "">(24);

  const [emiResult, setEmiResult] = useState({
    totalInterestPayable: "3727.12",
    totalPayments: "53727.12",
    emiAmount: "2238.63",
  });

  const calculateEMI = (P: number, R: number, N: number): number => {
    const r = R / 12 / 100;
    if (r === 0) return P / N;
    return (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Convert empty strings to 0 for calculation
    const P = Number(loanAmount) || 0;
    const R = Number(interestRate) || 0;
    const N = Number(loanTenure) || 1;

    const emi = calculateEMI(P, R, N);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;
    setEmiResult({
      emiAmount: emi.toFixed(2),
      totalPayments: totalPayment.toFixed(2),
      totalInterestPayable: totalInterest.toFixed(2),
    });
  };

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Loan Process - Sivanto Capital Services</title>
        <meta
          name="description"
          content="Understand the complete loan process with Sivanto Capital Services, from eligibility check to document submission, approval, and EMI calculation. Apply for personal, business, or home loans easily."
        />
        <meta
          name="keywords"
          content="loan process, EMI calculator, personal loan, business loan, home loan, how to apply for loan, Sivanto Capital Services"
        />
        <link rel="canonical" href="https://www.sivantocapital.in/loan-process" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Sivanto Capital Services",
              url: "https://www.sivantocapital.in",
              logo: "https://www.sivantocapital.in/assets/logo.png",
              description:
                "Provides personal, business, home loans and insurance solutions with transparency and professionalism.",
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <div className="loan-process-page">
        <div className="loan-hero">
           <div className="hero-navbar">
          {/* Navbar with scroll effect */}
          <Navbar isScrolled={isScrolled} />
          </div>
          <img src="/assets/deal.jpeg" alt="Sivanto Capital Services Loan Process - Eligibility, Document Submission, Approval"
 className="loan-bg" />
          <div className="loan-overlay"></div>

          <div className="loan-content">
            <h1>Loan Process</h1>
            <p>Home &nbsp;&gt;&gt;&nbsp; Loan Process</p>
          </div>
        </div>

        {/* 3 Info Boxes */}
        <div className="info-boxes-container">
          <div className="info-box" tabIndex={0}>
            <div className="info-icon">✔️</div>
            <h3>Check Eligibility</h3>
            <p>Your eligibility is checked whether you are allowed to get the loan.</p>
          </div>
          <div className="info-box" tabIndex={0}>
            <div className="info-icon">📄</div>
            <h3>Submit Documents</h3>
            <p>After eligibility check, needed documents are to be submitted.</p>
          </div>
          <div className="info-box" tabIndex={0}>
            <div className="info-icon">✅</div>
            <h3>Approval In Principle</h3>
            <p>After submission of documents, your principle amount is approved.</p>
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="emi-calculator-container">
          <form className="emi-form" onSubmit={handleSubmit}>
            <h2>EMI CALCULATOR</h2>
            <p className="emi-desc">
              Get an approximate figure for the total monthly instalment payments along with a complete break-up of a loan.
            </p>

            {/* Loan Amount */}
            <label htmlFor="loanAmount">
              <span className="input-prefix">₹</span>
              <input
                id="loanAmount"
                type="number"
                min="0"
                value={loanAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  setLoanAmount(value === "" ? "" : Number(value));
                }}
                placeholder="Loan Amount"
                className="emi-input"
              />
              <span className="input-suffix">Amount</span>
            </label>

            {/* Interest Rate */}
            <label htmlFor="interestRate">
              <span className="input-prefix">%</span>
              <input
                id="interestRate"
                type="number"
                min="0"
                step="0.01"
                value={interestRate}
                onChange={(e) => {
                  const value = e.target.value;
                  setInterestRate(value === "" ? "" : Number(value));
                }}
                placeholder="Interest Rate"
                className="emi-input"
              />
              <span className="input-suffix">/ Annum</span>
            </label>

            {/* Loan Tenure */}
            <label htmlFor="loanTenure">
              <span className="input-prefix clock-icon" aria-label="Clock icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <input
                id="loanTenure"
                type="number"
                min="1"
                value={loanTenure}
                onChange={(e) => {
                  const value = e.target.value;
                  setLoanTenure(value === "" ? "" : Number(value));
                }}
                placeholder="Loan Tenure (Months)"
                className="emi-input"
              />
              <span className="input-suffix">/ Months</span>
            </label>

            <div className="emi-btn-group">
              <button type="submit" className="emi-submit-btn">
                Submit
              </button>

              <Link href="/quick-loan-app-form" className="emi-apply-btn">
                Apply Now
              </Link>
            </div>
          </form>

          {/* EMI Result Box */}
          <div className="emi-result-box">
            <h3>Your EMI Amount</h3>

            <p className="result-label">Total Interest Payable</p>
            <p className="result-value">{emiResult.totalInterestPayable}</p>

            <p className="result-label">Total of Payments</p>
            <p className="result-value">{emiResult.totalPayments}</p>

            <p className="result-label">EMI Amount</p>
            <p className="result-emi">{emiResult.emiAmount}</p>

            <CalculatorIcon />
          </div>
        </div>
      </div>
    </>
  );
}

// Small glowing calculator icon
const CalculatorIcon = () => {
  return (
    <svg
      className="calculator-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="7" y1="12" x2="7" y2="16" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="17" y1="12" x2="17" y2="16" />
    </svg>
  );
};
