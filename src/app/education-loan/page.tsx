import "../../styles/loan-common.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import EducationTabs from "../components/EducationTabs"; // new client component
import CommonSmallForm from "../components/CommonSmallForm";
import Head from "next/head";

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
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>
          Education Loan in India | Study Abroad & Domestic Loans – Sivanto Capital
        </title>
        <meta
          name="description"
          content="Apply for Education Loans up to ₹1 Crore in India and ₹2 Crore for overseas studies. Low interest rates starting from 9.25% p.a., quick approval, and flexible repayment with Sivanto Capital."
        />
        <meta
          name="keywords"
          content="Education Loan India, Study Abroad Education Loan, Student Loan, Overseas Education Loan, Education Loan Interest Rates, Sivanto Capital"
        />
        <link
          rel="canonical"
          href="https://www.sivantocapital.in/education-loan"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LoanOrCredit",
              "name": "Education Loan",
              "description":
                "Education loans for domestic and international studies with funding up to ₹2 Crore, low interest rates, and flexible repayment options.",
              "loanType": "Education Loan",
              "areaServed": "IN",
              "provider": {
                "@type": "Organization",
                "name": "Sivanto Capital",
                "url": "https://www.sivantocapital.in",
                "logo": "https://www.sivantocapital.in/assets/logo.png"
              },
              "url": "https://www.sivantocapital.in/education-loan"
            })
          }}
        />
      </Head>

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
                ✅ Quick loan sanction for higher studies 
              </li>
              <li>✅ Part-prepayment option available </li>
              <li>✅ Hassle-free documentation process</li>
              <li>✅ Loan amount up to ₹1 Crore</li>
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
              Dreaming of higher education but worried about the rising costs?
               Whether it’s pursuing a professional course in India or studying at a 
               prestigious university abroad, financing your education is no longer a 
               challenge. With Sivanto Capital Education Loans, you can avail funding up 
               to ₹1 Crore at affordable interest rates starting from 9.25% p.a., 
               with quick loan sanction and flexible repayment options. 
            </p>

            <p className="service-desc">
              At Sivanto Capital, we believe financial barriers should never stop you 
              from achieving your academic aspirations. Our student loan solutions are 
              designed to give you the financial confidence to focus on your education 
              while we take care of the expenses. 
            </p>

            {/* ================= TABS ================= */}
            <EducationTabs />

            {/* ================= NEW CONTENT ================= */}
            <div className="education-extra" >
              <h3 className="service-small-heading">What Expenses Does the Loan Cover?</h3>
              <ul>
                <li>Tuition fees and admission charges</li>
                <li>Hostel or accommodation expenses</li>
                <li>Examination and library fees</li>
                <li>Purchase of books, laptops, and study equipment</li>
                <li>Travel expenses for overseas education</li>
                <li>Other related costs required by the institution</li>
              </ul>

              <h3 className="education-extra">How to Apply for Sivanto Capital Education Loan?</h3>
              <ul className="service-small-heading">
                <li>
                  <strong>Check Eligibility – </strong>
                  Verify basic academic and financial requirements.
                </li>
                <li>
                  <strong>Submit Documents – </strong>
                  Upload all necessary documents online.
                </li>
                <li>
                  <strong>Get Loan Sanction – </strong>
                  Approval within a quick turnaround time.
                </li>
                <li>
                  <strong>Loan Disbursal – </strong>
                  Funds directly credited as per the requirement (domestic or international).
                </li>
              </ul>

              <h3 className="extra-space">Why Sivanto Capital for Education Loans?</h3>
              <ul>
                <li>Tailored loan solutions for domestic & international studies</li>
                <li>Quick sanction process to meet admission deadlines</li>
                <li>Competitive interest rates & flexible repayment options</li>
                <li>Support for students & parents through co-borrower facility</li>
                <li>Coverage of all major educational expenses</li>
              </ul>
            </div>

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
