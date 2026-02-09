"use client";

import { useState } from "react";
import Link from "next/link";

export default function EMICalculatorClient() {
  const [loanAmount, setLoanAmount] = useState<number | "">(50000);
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
    <div className="emi-calculator-container">
      <form className="emi-form" onSubmit={handleSubmit}>
        <h2>EMI CALCULATOR</h2>
        <p className="emi-desc">
          Get an approximate figure for the total monthly instalment payments along with a complete break-up of a loan.
        </p>

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

      {/* RESULT BOX */}
      <div className="emi-result-box">
        <h3>Your EMI Amount</h3>

        <p className="result-label">Total Interest Payable</p>
        <p className="result-value">{emiResult.totalInterestPayable}</p>

        <p className="result-label">Total of Payments</p>
        <p className="result-value">{emiResult.totalPayments}</p>

        <p className="result-label">EMI Amount</p>
        <p className="result-emi">{emiResult.emiAmount}</p>

        {/* SMALL CALCULATOR ICON */}
        <CalculatorIcon />
      </div>
    </div>
  );
}

function CalculatorIcon() {
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
}
