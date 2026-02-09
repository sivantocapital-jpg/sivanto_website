import Link from "next/link";
import Navbar from "../components/Navbar";
import ClientTabs from "../components/ClientTabs";
import "../../styles/loan-common.css";
import CommonSmallFormClient from "../components/CommonSmallFormClient";

export const metadata = {
  title: "Business Loan India | Fast Approval & Low Interest – Sivanto Capital",
  description:
    "Apply for Business Loans up to ₹1 Crore at 14% p.a. Fast approval, minimal documentation, flexible tenure, and MSME benefits with Sivanto Capital.",
  keywords:
    "business loan, MSME loan, startup loan, loan for small business, low interest business loan, loan India",
  alternates: {
    canonical: "https://www.yourdomain.com/business-loan",
  },
};

export default function BusinessLoan() {
  return (
    <>
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanBusiness.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
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
            <Link href="/quick-loan-app-form">
              <button className="loan-btn">
                Boost Your Business – Apply Now
              </button>
            </Link>
          </div>

          <CommonSmallFormClient formType="business-loan" />
        </div>
      </section>

      <section className="service-common">
        <div className="service-wrapper">
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
            </p>

            <ClientTabs />
          </div>

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
