"use client";

import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";
import HomeLoanTabs from "../components/HomeLoanTabs";
import Head from "next/head";

export const metadata = {
  title: "Home Loan in India | Buy, Build, Renovate – Sivanto Capital",
  description:
    "Get home loans up to ₹10 Crore with low interest rates, flexible repayment, and quick approval. Apply online now with Sivanto Capital.",
  keywords: [
    "home loan",
    "house loan",
    "property loan",
    "home construction loan",
    "Sivanto Capital",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/home-loan",
  },
};

export default function HomeLoanClient() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>Home Loan in India | Buy, Build, Renovate – Sivanto Capital</title>
        <meta
          name="description"
          content="Get home loans up to ₹10 Crore with low interest rates, flexible repayment, and quick approval. Apply online now with Sivanto Capital."
        />
        <meta
          name="keywords"
          content="Home Loan India, House Loan, Property Loan, Home Construction Loan, Home Renovation Loan, Sivanto Capital"
        />
        <link rel="canonical" href="https://www.sivantocapital.in/home-loan" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LoanOrCredit",
              name: "Home Loan",
              description:
                "Home loans for buying, constructing, or renovating property in India with funding up to ₹10 Crore, low interest rates, and flexible repayment options.",
              loanType: "Home Loan",
              areaServed: "IN",
              provider: {
                "@type": "Organization",
                name: "Sivanto Capital",
                url: "https://www.sivantocapital.in",
                logo: "https://www.sivantocapital.in/assets/logo.png",
              },
              url: "https://www.sivantocapital.in/home-loan",
            }),
          }}
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanHome.jpg')" }}
      >
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

      {/* ================= SERVICE SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Home Loan</h1>
            <h3 className="service-tagline">– Own Your Dream Home with Sivanto Capital</h3>

            <p className="service-desc">
              Your dream home is closer than you think. With Sivanto Capital Home Loans, 
              you can enjoy affordable interest rates starting at 8.65% p.a., flexible 
              repayment of up to 30 years, and loan amounts as high as ₹10 Crore. 
              Whether you want to buy a ready-to-move house, construct a new home, 
              or renovate your existing property, our home loan solutions are designed 
              to fit your needs. 
            </p>

            <p className="service-desc">
              With easy documentation, lowest processing fees, and quick disbursal, 
              Sivanto Capital makes your home-buying journey hassle-free and stress-free.
            </p>

            {/* ================= TABS ================= */}
            <HomeLoanTabs />

            {/* ================= ADDITIONAL CONTENT ================= */}
            <h4>Benefits of Sivanto Capital Home Loan</h4>
            <ul>
              <li><strong>Buy, build, or renovate –</strong> one loan for all home needs</li>
              <li><strong>Flexible repayment tenure –</strong> up to 30 years for easy EMIs</li>
              <li><strong>High-value financing –</strong> up to ₹10 Crore to match your dream home’s budget</li>
              <li><strong>Minimal paperwork & fast sanction –</strong> saves time and effort</li>
              <li><strong>Online application & digital approval –</strong> get sanctioned in just 5 steps</li>
            </ul>

            <h4>How to Apply for a Home Loan with Sivanto Capital?</h4>
            <ul>
              <li><strong>Check Eligibility –</strong> Confirm you meet the basic criteria.</li>
              <li><strong>Fill Online Application –</strong> Complete the simple loan form.</li>
              <li><strong>Upload Documents –</strong> Submit required documents online.</li>
              <li><strong>Get Digital Sanction –</strong> Instant approval with minimal wait time.</li>
              <li><strong>Loan Disbursal –</strong> Funds credited quickly to help you own your dream home.</li>
            </ul>

            <h4>Why Sivanto Capital is the Right Choice?</h4>
            <p>
              At Sivanto Capital, we make your home-buying journey effortless by combining 
              affordable rates, long tenures, digital approvals, and fast processing. 
              With our customer-first approach, we ensure you get the best home loan 
              deal tailored to your needs.
            </p>

            <p className="cta-text">
              👉 Apply Now for a Sivanto Capital Home Loan and take the first step toward owning your dream home.
            </p>

            <p className="disclaimer">
              Disclaimer: Loan eligibility, approval, interest rates, and repayment terms are subject to lender’s discretion. T&C apply.
            </p>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
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
