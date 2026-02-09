import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

const LoanAgainstInsurance = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanAgainstInsurancePolicy.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT */}
          <div className="loan-left">
            <h1>Loan Against Insurance Policies</h1>
            <ul>
              <li>✅ Flexible repayment options</li>
              <li>✅ Hassle-free access with easy eligibility</li>
              <li>✅ Flexi loan facility for convenience</li>
              <li>✅ T&C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">
                Turn Your Policy Into Instant Cash
              </button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="loan-against-insurance" />
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Loan Against Insurance Policies</h1>
            <h3 className="service-tagline">– Quick Funds Made Simple</h3>

            <p>
              Life is full of uncertainties... With Loan Against Insurance Policies, you can unlock funds easily...
            </p>

            <h4>Why Choose a Loan Against Insurance Policy?</h4>
            <ul>
              <li>Easy Repayments – Flexible EMI options</li>
              <li>Hassle-free Access – Manage online</li>
              <li>Simple Eligibility – Minimal requirements</li>
              <li>Flexi Loan Facility – Withdraw funds as needed</li>
              <li>No Extra Collateral – Policy acts as security</li>
              <li>Lower Interest Rates – Cheaper than personal loans</li>
            </ul>

            <h4>What is a Loan Against Insurance Policy?</h4>
            <p>
              An insurance policy is usually meant to protect your family’s future, but it can also serve as a financial safety net...
            </p>

            <h4>Eligibility Criteria for Loan Against Insurance</h4>
            <ul>
              <li>Minimum Age: 21 years</li>
              <li>Employment: Salaried or self-employed</li>
              <li>Residency: Resident of India</li>
              <li>Insurance Requirement: Minimum policy amount</li>
              <li>Income: Regular income for repayment</li>
            </ul>

            <h4>Key Benefits of Loan Against Insurance Policy</h4>
            <ul>
              <li>No Additional Collateral Needed</li>
              <li>Lower Interest Rates</li>
              <li>High Approval Chances</li>
              <li>Nominee Protection</li>
              <li>Fast & Easy Process</li>
            </ul>

            <h4>Why Loan Against Insurance is a Smart Choice</h4>
            <ul>
              <li>Emergency medical funds</li>
              <li>Short-term working capital</li>
              <li>Education expenses</li>
              <li>Wedding or travel needs</li>
              <li>Any urgent financial requirement</li>
            </ul>

            <p className="cta-text">
              👉 Start your application with Sivanto Capital today...
            </p>

            <p className="disclaimer">
              Disclaimer: Loan eligibility, interest rates, and approval depend on the bank/NBFC...
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li><Link href="/home-loan">Home Loan</Link></li>
              <li><Link href="/loan-against-property">Loan Against Property</Link></li>
              <li className="active"><Link href="/loan-against-insurance">Loan Against Insurance Policies</Link></li>
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

export default LoanAgainstInsurance;
