import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";
import HomeLoanTabs from "../components/HomeLoanTabs";

export default function HomeLoanClient() {
  return (
    <>
      {/* HERO */}
      <section className="loan-hero" style={{ backgroundImage: "url('/assets/loanHome.jpg')" }}>
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          <div className="loan-left">
            <h1>Home Loan</h1>
            <ul>
              <li>✅ Attractive interest rates from 8.65% p.a.</li>
              <li>✅ Loan amount up to ₹10 Crore</li>
              <li>✅ Flexible repayment tenure – up to 30 years</li>
              <li>✅ Fast disbursal & minimal documentation</li>
              <li>✅ Lowest processing fees in the market</li>
              <li>✅ T&C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Own Your Dream Home – Apply Now</button>
            </Link>
          </div>

          <CommonSmallForm formType="home-loan" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Home Loan</h1>
            <h3 className="service-tagline">– Own Your Dream Home with Sivanto Capital</h3>

            <p className="service-desc">
              Your dream home is closer than you think...
            </p>

            <HomeLoanTabs />

            {/* OTHER CONTENT */}
          </div>

          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li className="active"><Link href="/home-loan">Home Loan</Link></li>
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
