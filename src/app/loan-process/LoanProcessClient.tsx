"use client";

import "../../styles/loan-process.css";
import NavbarClient from "../components/NavbarClient";
import EMICalculatorClient from "../components/EMICalculatorClient";

const LoanProcessClient = () => {
  const faq = [
    {
      question: "How do I check loan eligibility with Sivanto Capital?",
      answer:
        "You can check your eligibility by filling out our quick form. Our team evaluates your income, credit score, and documents to determine eligibility.",
    },
    {
      question: "What documents are required for a loan?",
      answer:
        "Typically, we require PAN, Aadhaar, income proof, bank statements, and address proof. Specific documents may vary based on loan type.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "Once documents are submitted, approval can take anywhere from 24 hours to 3 days depending on the lender and verification process.",
    },
    {
      question: "What is EMI calculation?",
      answer:
        "EMI is calculated based on loan amount, interest rate, and tenure. You can use our EMI calculator to estimate your monthly payments.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="loan-process-page">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="loan-hero">
        <div className="hero-navbar">
          <NavbarClient />
        </div>

        <img
          src="/assets/deal.jpeg"
          alt="Sivanto Capital Services Loan Process - Eligibility, Document Submission, Approval"
          className="loan-bg"
        />

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
          <p>
            We evaluate your profile, income & credit score to determine your
            loan eligibility.
          </p>
        </div>

        <div className="info-box" tabIndex={0}>
          <div className="info-icon">📄</div>
          <h3>Submit Documents</h3>
          <p>Upload required documents online for verification and approval.</p>
        </div>

        <div className="info-box" tabIndex={0}>
          <div className="info-icon">✅</div>
          <h3>Approval In Principle</h3>
          <p>
            Once documents are verified, your loan gets approved and disbursed
            quickly.
          </p>
        </div>
      </div>

      {/* EMI Calculator */}
      <EMICalculatorClient />
    </div>
  );
};

export default LoanProcessClient;
