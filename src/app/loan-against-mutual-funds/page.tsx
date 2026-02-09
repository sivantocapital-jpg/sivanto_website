import Link from "next/link";
import Navbar from "../components/Navbar";
import "../../styles/loan-common.css";
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "Loan Against Mutual Funds & Shares | Sivanto Capital",
  description:
    "Get quick loans against your Mutual Funds & Shares with low interest rates, fast approval, and no redemption required. Apply online now!",
  alternates: {
    canonical: "https://www.sivantocapital.in/loan-against-mutual-funds",
  },
  openGraph: {
    title: "Loan Against Mutual Funds & Shares | Sivanto Capital",
    description:
      "Get quick loans against your Mutual Funds & Shares with low interest rates, fast approval, and no redemption required. Apply online now!",
    url: "https://www.sivantocapital.in/loan-against-mutual-funds",
    siteName: "Sivanto Capital",
    images: [
      {
        url: "https://www.sivantocapital.in/assets/loanAgainstMutualFunds.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const LoanAgainstMutualFunds = () => {
  return (
    <>
      {/* ================ HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanAgainstMutualFunds.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Loan Against Mutual Funds &amp; Shares</h1>
            <ul>
              <li>✅ Attractive rates starting at 10.5% p.a.</li>
              <li>✅ Quick disbursal & low interest</li>
              <li>✅ Flexible loan amounts as per your portfolio</li>
              <li>✅ No prepayment charges</li>
              <li>✅ T&amp;C Apply</li>
            </ul>
            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Get Started</button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="loan-against-mutual-funds" />
        </div>
      </section>

      {/* ================= SERVICE CONTENT ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Loan Against Mutual Funds &amp; Shares</h1>
            <h3 className="service-tagline">– Unlock Quick Cash Without Redemption</h3>

            <p>
              Need urgent funds but don’t want to redeem your Mutual Funds or Shares? With a Loan Against Mutual Funds & Shares, you can leverage your investments and get instant liquidity while still enjoying the potential growth of your portfolio.
            </p>
            <p>
              Sivanto Capital helps you access quick loans at attractive interest rates with minimal paperwork and complete flexibility.
            </p>

            <h4>Why Choose Loan Against Mutual Funds & Shares?</h4>
            <ul>
              <li>Low Interest Rates – Starting at just 10.5% p.a.</li>
              <li>Quick Disbursal – Loan approved and credited within 24 hours</li>
              <li>Flexible Loan Amount – From ₹15,000 up to ₹10 Lakhs</li>
              <li>No Prepayment Charges – Repay anytime without penalties</li>
              <li>High Loan-to-Value (LTV) – Avail up to 75% of your MF unit value</li>
              <li>Pay Only on Used Amount – Interest is charged only on the amount utilized</li>
              <li>Minimal Documentation – Apply online with ease</li>
            </ul>

            <h4>Key Features of Loan Against Mutual Funds</h4>
            <ul>
              <li>Loan Amount: ₹15,000 – ₹10,00,000</li>
              <li>EMI Example: As low as ₹1,500 for ₹1,00,000 loan</li>
              <li>Approval Time: Within 24 office hours</li>
              <li>Security: Mutual Fund Units / Shares pledged</li>
              <li>Repayment: Flexible EMI options or pay as you go</li>
            </ul>

            <h4>Eligibility Criteria</h4>
            <ul>
              <li>Must be a single unit holder of Mutual Funds</li>
              <li>Mutual Fund units should be available in CAMS (Registrar & Transfer Agent)</li>
              <li>Applicant must be an Indian resident (salaried or self-employed)</li>
              <li>Minimum age: 21 years</li>
            </ul>

            <h4>Documentation Required</h4>
            <ul>
              <li>KYC Documents (PAN, Aadhaar, Address Proof)</li>
              <li>Or quick digital verification via DigiLocker</li>
              <li>Mutual Funds reflected in CAMS Portal</li>
            </ul>

            <h4>Benefits of Loan Against Mutual Funds & Shares</h4>
            <ul>
              <li>Preserve Your Investments – No need to redeem mutual funds/shares</li>
              <li>Instant Liquidity – Quick solution for emergency needs</li>
              <li>Lower Interest Rates – Cheaper than personal loans or credit card debt</li>
              <li>Safe & Secured – Backed by your existing investments</li>
              <li>Hassle-free Online Process – Apply, verify, and get funds disbursed quickly</li>
            </ul>

            <h4>Ideal For</h4>
            <ul>
              <li>Medical emergencies</li>
              <li>Business working capital</li>
              <li>Education expenses</li>
              <li>Travel or wedding needs</li>
              <li>Short-term cash requirements</li>
            </ul>

            <p>
              With Sivanto Capital Loan Against Mutual Funds & Shares, you get quick access to funds without disturbing your long-term investments. Apply online today and enjoy instant approval, low interest rates, and complete repayment flexibility.
            </p>

            <p className="disclaimer">
              Disclaimer: Loan amount, interest rate, and eligibility are subject to bank/NBFC policy. Terms & Conditions apply.
            </p>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li><Link href="/home-loan">Home Loan</Link></li>
              <li><Link href="/loan-against-property">Loan Against Property</Link></li>
              <li><Link href="/loan-against-insurance">Loan Against Insurance Policies</Link></li>
              <li className="active"><Link href="/loan-against-mutual-funds">Loan Against Mutual Funds & Shares</Link></li>
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

export default LoanAgainstMutualFunds;
