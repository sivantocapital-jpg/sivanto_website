import Link from "next/link";
import Navbar from "../components/Navbar";
import ClientTabs from "../components/ClientTabs";
import CommonSmallFormClient from "../components/CommonSmallFormClient";
import "../../styles/loan-common.css";

export const metadata = {
  title: "Business Loan India | Fast Approval & Low Interest – Sivanto Capital",
  description:
    "Apply for Business Loans up to ₹1 Crore at 14% p.a. Fast approval, minimal documentation, flexible tenure, and MSME benefits with Sivanto Capital.",
  keywords:
    "business loan, MSME loan, startup loan, loan for small business, low interest business loan, loan India",
  alternates: {
    canonical: "https://www.sivantocapital.in/business-loan",
  },
};

const faq = [
  {
    question: "What is a Business Loan?",
    answer:
      "A business loan is a financial facility offered by banks and NBFCs to meet working capital needs, purchase equipment, expand operations, or manage daily expenses.",
  },
  {
    question: "Who is eligible for a Business Loan?",
    answer:
      "Eligibility depends on business vintage, turnover, credit score, and type of entity. Typically, startups, MSMEs, proprietorships, partnerships, and companies can apply.",
  },
  {
    question: "What documents are required?",
    answer:
      "Documents include KYC (PAN, Aadhaar), business incorporation certificate, bank statements, financials, and additional documents as per lender requirements.",
  },
  {
    question: "How fast is the approval?",
    answer:
      "Sivanto Capital offers approval within 4 hours for most cases, with fast disbursal after document verification.",
  },
  {
    question: "Is there an MSME loan option?",
    answer:
      "Yes, tailor-made MSME loans with government benefits and subsidy schemes are available for eligible businesses.",
  },
];

// Structured Data for SEO
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function BusinessLoan() {
  return (
    <>
      {/* ================= Structured Data for SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanBusiness.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT */}
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

          {/* RIGHT FORM */}
          <CommonSmallFormClient formType="business-loan" />
        </div>
      </section>

      {/* ================= SERVICE COMMON SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Business Loan</h1>
            <h3 className="service-tagline">
              – Fuel Your Growth with Sivanto Capital
            </h3>

            <p className="service-desc">
              Every growing business needs the right financial support to expand, 
              upgrade, and manage operations seamlessly. With Sivanto Capital Business Loans,
               you can access funding up to ₹1 Crore with interest rates starting 
               at 14% p.a., quick approvals, and simple documentation. Whether you 
               are a startup, MSME, entrepreneur, or professional, our business loan 
               solutions are designed to help you take your business to the next level. 
            </p>

            <h3>What is a Business Loan?</h3>
            <p className="service-desc">
              A business loan is a financial facility offered by banks and NBFCs
              to meet working capital needs, purchase equipment, expand operations,
              or manage daily expenses.
            </p>

            <p className="service-small-heading">
              At Sivanto Capital, we offer both secured and unsecured business loans:
            </p>

            <ul>
              <li><strong>Secured Loans</strong> – Collateral required/security to avail funding. </li>
              <li><strong>Unsecured Loans</strong> – No collateral required, making it easier for 
              small businesses and startups to access funds. </li>
            </ul>
            <br></br>
            <p className="service-small-heading">
              We also provide access to various loan types, including: 
            </p>

            <ul>
              <li>Term Loans (Short, Intermediate & Long-term)</li>
              <li>Working Capital Loans</li>
              <li>Cash Credit & Overdraft Facilities</li>
              <li>Letter of Credit & Invoice Discounting</li>
              <li>Equipment & Machinery Loans</li>
              <li>POS Loans / Merchant Cash Advance</li>
              <li>Loans under Government Schemes</li>
            </ul>

            {/* ================= CLIENT-SIDE TABS ================= */}
            <ClientTabs />

            {/* ================= APPLY SECTION ================= */}
            <div className="apply-steps">
  <h3 className="service-small-heading">How to Apply for a Personal Loan with Sivanto Capital?</h3>
  <ul>
    <li>
      <strong>Check Your Eligibility – </strong>
      Quickly verify if you meet our loan criteria.
    </li>
    <li>
      <strong>Submit Your Application Online – </strong>
      Fill out the simple form and upload your documents.
    </li>
    <li>
      <strong>Instant Approval – </strong>
      Get a quick loan decision within minutes.
    </li>
    <li>
      <strong>Loan Disbursal – </strong>
      Receive funds directly in your bank account within 24 hours.
    </li>
  </ul>

  <h3 className="service-small-heading">Why Sivanto Capital is the Right Choice for You?</h3>
  <p>
    At Sivanto Capital, we understand that every business has unique financial needs.
     With our competitive rates, fast approvals, MSME benefits, and flexible repayment 
     options, we empower entrepreneurs, startups, and enterprises to grow without 
     financial hurdles. 
  </p>

  <p className="cta-text">
    👉 Apply Now for a Sivanto Capital Personal Loan and enjoy
    quick approvals and peace of mind.
  </p>

  <p className="disclaimer">
    Disclaimer: Loan approval, interest rates, and terms are subject
    to eligibility and lender’s discretion. T&C apply.
  </p>
</div>

          </div>

          {/* RIGHT SIDEBAR */}
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
