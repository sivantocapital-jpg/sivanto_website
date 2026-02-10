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
              Life is full of uncertainties, and sometimes financial emergencies demand 
              instant access to funds. Did you know your existing insurance policy can help
               you raise money without the need for extra collateral? With Loan Against 
               Insurance Policies, you can unlock funds easily, enjoy flexible repayment 
               options, and meet your urgent financial needs stress-free. 
            </p>

            <h3 className="top-margin-only">Why Choose a Loan Against Insurance Policy?</h3>
            <ul>
              <li>Easy Repayments – Flexible EMI options to suit your budget </li>
              <li>Hassle-free Access –  Manage your loan and track repayments online </li>
              <li>Simple Eligibility –  Quick approval with minimal requirements </li>
              <li>Flexi Loan Facility – Withdraw funds as needed within your sanctioned limit </li>
              <li>No Extra Collateral – Your insurance policy acts as security </li>
              <li>Lower Interest Rates – More affordable than a personal loan </li>
            </ul>

            <h3 className="top-margin-only">What is a Loan Against Insurance Policy?</h3>
            <p>
              An insurance policy is usually meant to protect your family’s future,
               but it can also serve as a financial safety net for you. Many banks and 
               NBFCs allow you to borrow against your endowment plans, money-back policies,
                or unit-linked insurance plans (ULIPs). 
            </p>

            <p>This makes it one of the fastest and most convenient ways to raise funds during 
                emergencies—without liquidating your investments or pledging additional assets. </p>

            <h3>Eligibility Criteria for Loan Against Insurance</h3>
            <p className="top-margin-only">Getting a loan against your insurance policy is simpler compared to most loans: </p>
            <ul>
              <li>Minimum Age: 21 years</li>
              <li>Employment: Salaried or self-employed individuals with an active policy </li>
              <li>Residency: Must be a resident of India</li>
              <li>Insurance Requirement: Some banks require a minimum policy amount </li>
              <li>Income: Must have a regular source of income for repayment assurance </li>
            </ul>

            <h3 className="top-margin-only">Key Benefits of Loan Against Insurance Policy</h3>
            <ul>
              <li>No Additional Collateral Needed  – Policy itself is the guarantee </li>
              <li>Lower Interest Rates – Usually cheaper than unsecured personal loans </li>
              <li>High Approval Chances – Since the loan is secured, rejection risk is minimal </li>
              <li>Nominee Protection – If the policyholder passes away, the outstanding loan is adjusted
                 from the policy amount; balance is given to the nominee </li>
              <li>Fast & Easy Process – Apply online and get funds disbursed quickly </li>
            </ul>

            <h3>Why Loan Against Insurance is a Smart Choice</h3>
            <p className="top-margin-only">A Loan Against Insurance Policy is ideal if you need: </p>
            <ul>
              <li>Emergency medical funds</li>
              <li>Short-term working capital</li>
              <li>Education expenses</li>
              <li>Wedding or travel needs</li>
              <li>Any urgent financial requirement</li>
            </ul>

            <p className="extra-space">Instead of liquidating your investments or taking a high-interest personal loan,
                use your insurance policy as leverage and get funds instantly. </p>

            <p className="cta-text">
              👉 Start your application with Sivanto Capital today and get quick approval 
              on loans against your insurance policy — with ease, transparency, and security. 
            </p>

            <p className="disclaimer">
             Disclaimer: Loan eligibility, interest rates, and approval depend on the bank/NBFC and the type of insurance policy. Terms & Conditions apply. 
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
