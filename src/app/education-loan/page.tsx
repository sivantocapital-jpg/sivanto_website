import "../../styles/loan-common.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import EducationTabs from "../components/EducationTabs"; // new client component
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "Education Loan in India | Fast Approval & Low Interest – Sivanto Capital",
  description:
    "Get education loans up to ₹2 Crore for India & abroad with low interest, quick approval, and flexible repayment. Apply online now!",
  keywords: [
    "education loan",
    "student loan",
    "loan for education",
    "study abroad loan",
    "Sivanto Capital",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/education-loan",
  },
};

export default function EducationLoan() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanEducation.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT */}
          <div className="loan-left">
            <h1>Education Loan</h1>
            <ul>
              <li>✅ Attractive interest rates starting from 9.25% p.a.</li>
              <li>
                ✅ Loan up to ₹1 Crore for domestic & ₹2 Crore for international
                studies
              </li>
              <li>✅ Quick sanction & flexible repayment options</li>
              <li>✅ Hassle-free documentation process</li>
              <li>✅ Covers tuition, hostel, travel, books & more</li>
              <li>✅ T&C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">
                Invest in Your Future – Apply Now
              </button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="education-loan" />
        </div>
      </section>

      {/* ================= SERVICE COMMON SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Education Loan</h1>
            <h3 className="service-tagline">
              – Invest in Your Future with Sivanto Capital
            </h3>

            <p className="service-desc">
              Dreaming of higher education but worried about rising costs? Whether
              you plan to study in India or abroad, Sivanto Capital Education Loans
              help you finance your education with ease. Get funding up to ₹2
              Crore at attractive interest rates with quick sanction and flexible
              repayment options.
            </p>

            {/* ================= TABS ================= */}
            <EducationTabs />

            <p className="cta-text">
              👉 Apply Now for a Sivanto Capital Education Loan and take the first step
              towards your dream career.
            </p>

            <p className="disclaimer">
              Disclaimer: Loan approval, interest rates, and eligibility are
              subject to lender policies. T&C apply.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li className="active"><Link href="/education-loan">Education Loan</Link></li>
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
