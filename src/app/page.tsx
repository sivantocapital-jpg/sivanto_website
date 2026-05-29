import "../styles/home.css";
import Link from "next/link";
import Head from "next/head";
import NavbarClient from "./components/NavbarClient";




export const dynamic = "force-static";

export const metadata = {
  title: "Sivanto Capital Services Pvt. Ltd. | Official Website - Personal, Business, Home Loans and web development solutions",
  description:
    "Sivanto Capital delivers expert web development solutions and reliable financial services, including personal, business, home, and education loans with fast approval and flexible repayment plans.",
  keywords: [
    "web development",
    "personal loan",
    "business loan",
    "home loan",
    "education loan",
    "loan services India",
    "credit cards",
    "insurance",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const services = [
  { img: "webdevelopment.jpg", title: "Web Development", slug: "web-development", desc: "Launch your website today and take your business or school global. Our experienced developers create modern, high-performance websites designed to help you stand out in the digital world." },
  {
    img: "appdevelopment.jpg", title: "App Development", slug: "app-development", desc: "Build powerful Android and iOS applications for your business with modern, scalable, and high-performance mobile app solutions tailored to your needs."
  },
  { img: "loanPersonal.jpeg", title: "Personal Loan", slug: "personal-loan", desc: "Get instant personal loans up to ₹1 Cr at 10.25% p.a. Fast approval, minimal docs & 24-hr disbursal for weddings, medical, travel & more.", rate: "10.25% p.a." },
  { img: "loanBusiness.jpg", title: "Business Loan", slug: "business-loan", desc: "Fuel your business growth with loans up to ₹1 Cr at 14% p.a. Quick approval, easy docs & flexible repayment for startups, MSMEs & entrepreneurs.", rate: "14% p.a." },
  { img: "loanHome.jpg", title: "Home Loan", slug: "home-loan", desc: "Buy, build, or renovate your dream home with loans up to ₹10 Cr at 8.65% p.a. Easy documentation, low fees & tenure up to 30 years.", rate: "8.65% p.a." },
  { img: "loanCreditCards.jpg", title: "Credit Card", slug: "credit-cards", desc: "Compare & apply from 50+ bank credit cards. Get cashback, rewards, travel perks and easy EMIs—all in one place with Sivanto Capital." }
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for Google Organization logo */}
      <Head>
        {/* Organization schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sivanto Capital Services Pvt. Ltd.",
              url: "https://www.sivantocapital.in/",
              logo: "https://www.sivantocapital.in/google-icon.png",
            }),
          }}
        />
      </Head>
      {/* HERO SECTION */}
      <div className="slider-container">
        <NavbarClient />

        <div className="slider-overlay"></div>
        <div className="slider-content">
          {/* Hidden H1 for SEO (no design change) */}
          <h1 className="sr-only">Sivanto Capital Services Pvt. Ltd.</h1>

          <div className="hero-left-content">

            {/* Orange bordered company name */}
            <div className="hero-company-box">
              SIVANTO CAPITAL SERVICES PVT. LTD.
            </div>

            {/* Main heading */}
            <h2 className="hero-main-heading">
              Smart <span className="highlight-text">Financial &</span> <br />
              <span className="highlight-text">Digital</span> Solutions
            </h2>

            {/* Sub heading */}
            <p className="hero-subtext">
              Empowering Business. Funding Dreams. <br />
              Building Digital Futures.
            </p>

            {/* Bullet points */}
            <div className="hero-points">
              <span><span className="bullet">•</span> Business Loans</span>
              <span><span className="bullet">•</span> MSME Funding</span>
              <span><span className="bullet">•</span> Startup Finance</span>
              <span><span className="bullet">•</span> Website Development</span>
              <span><span className="bullet">•</span> Digital Marketing</span>
            </div>

            {/* Buttons */}
            <div className="hero-buttons">
              <Link href="/quick-loan-app-form" className="hero-btn apply-hero-btn">
                Apply Now <span className="btn-arrow">→</span>
              </Link>

              <Link href="/contact" className="hero-btn contact-hero-btn">
                Contact Us <span className="btn-arrow">→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* HERO STATS BAR */}
      <div className="hero-stats-wrapper">
        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-icon">
              <img src="/assets/clients.png" alt="Clients" />
            </div>
            <div>
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <img src="/assets/speed.png" alt="Speed" />
            </div>
            <div>
              <h3>24–48 Hrs</h3>
              <p>Fast Processing</p>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <img src="/assets/secure.png" alt="Secure" />
            </div>
            <div>
              <h3>100%</h3>
              <p>Secure Process</p>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">
              <img src="/assets/support.png" alt="Support" />
            </div>
            <div>
              <h3>Expert</h3>
              <p>Support Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your page content */}
      <div className="home-page">
        {/* Heading */}
        

        {/* Services Grid */}
        {/* ================= SOLUTIONS SECTION ================= */}
        <div className="solutions-section">

          <h2 className="solutions-heading">
            Solutions That Drive Your Growth
          </h2>

          <div className="solutions-grid">

            <Link href="/web-development" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/webhomeicon.svg" alt="Web Development" />
              </div>

              <h3>Web Development</h3>

              <p>
                Modern responsive websites for businesses and brands.
              </p>
            </Link>


            <Link href="/app-development" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/appdevelopmenthomeicon.svg" alt="App Development" />
              </div>

              <h3>App Development</h3>

              <p>
                Android & iOS applications with scalable architecture.
              </p>
            </Link>


            <Link href="/personal-loan" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/personalloanhomeicon.svg" alt="Personal Loan" />
              </div>

              <h3>Personal Loan</h3>

              <p>
                Quick personal loans with easy approval process.
              </p>
            </Link>


            <Link href="/business-loan" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/businessloanhomeicon.svg" alt="Business Loan" />
              </div>

              <h3>Business Loan</h3>

              <p>
                Business funding solutions for startups and MSMEs.
              </p>
            </Link>


            <Link href="/home-loan" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/homeloanshomeicon.svg" alt="Home Loan" />
              </div>

              <h3>Home Loan</h3>

              <p>
                Affordable home loans with flexible repayment plans.
              </p>
            </Link>


            <Link href="/credit-cards" className="solution-card">
              <div className="solution-icon">
                <img src="/assets/creditcardhomeicon.svg" alt="Credit Card" />
              </div>

              <h3>Credit Card</h3>

              <p>
                Compare and apply for top cashback credit cards.
              </p>
            </Link>

          </div>
        </div>

        {/* ================= WHY + PROCESS SECTION ================= */}

        <div className="info-process-wrapper">

          {/* LEFT IMAGE */}
          <div className="info-image">
            <img src="/assets/homehandshake.jpg" alt="Business Meeting" />
          </div>

          {/* WHY CHOOSE US */}
          <div className="why-choose-box">
            <h3>WHY CHOOSE US?</h3>

            <ul>
              <li>Fast Approval</li>
              <li>Low Documentation</li>
              <li>Competitive Interest Rates</li>
              <li>Expert Financial Guidance</li>
              <li>Transparent & Secure Process</li>
              <li>End-to-End Digital Support</li>
            </ul>
          </div>

          {/* LOAN PROCESS */}
          <div className="loan-process-box">

            <h3>OUR LOAN PROCESS</h3>

            <div className="loan-steps">

              {/* STEP 1 */}
              <div className="loan-step">
                <span className="step-number">1</span>

                <div className="step-icon">
                  <img src="/assets/documenthomeedit.svg" alt="Apply" />
                </div>

                <h4>Apply Online</h4>

                <p>Fill simple application form</p>
              </div>

              {/* STEP 2 */}
              <div className="loan-step">
                <span className="step-number">2</span>

                <div className="step-icon">
                  <img src="/assets/documenthome.svg" alt="Verification" />
                </div>

                <h4>Document Verification</h4>

                <p>We verify your documents</p>
              </div>

              {/* STEP 3 */}
              <div className="loan-step">
                <span className="step-number">3</span>

                <div className="step-icon">
                  <img src="/assets/approvalhome.svg" alt="Approval" />
                </div>

                <h4>Approval Process</h4>

                <p>Quick approval by our experts</p>
              </div>

              {/* STEP 4 */}
              <div className="loan-step">
                <span className="step-number">4</span>

                <div className="step-icon">
                  <img src="/assets/disbursementhome.svg" alt="Disbursement" />
                </div>

                <h4>Amount Disbursement</h4>

                <p>Funds transferred to your bank</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ================= WEBSITE DEVELOPMENT ================= */}

      <div className="website-showcase-section">

        <span className="section-tag">
          WEBSITE DEVELOPMENT
        </span>

        <h2 className="website-heading">
          We Build Websites That Build Your Business
        </h2>

        <div className="website-grid">

          {/* CARD 1 */}
          <div className="website-card">
            <img src="/assets/demobusiness.png" alt="Business Website" />

            <h3>Business Website</h3>

            <Link href="/demo-demo/business" className="demo-btn">
              View Demo
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="website-card">
            <img src="/assets/demoschool.png" alt="School Website" />

            <h3>School Website</h3>

            <Link href="/demo-demo/school" className="demo-btn">
              View Demo
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="website-card">
            <img src="/assets/demoecom.png" alt="Ecommerce Website" />

            <h3>E-Commerce Website</h3>

            <Link href="/demo-demo/ecommerce" className="demo-btn">
              View Demo
            </Link>
          </div>

          {/* CARD 4 */}
          <div className="website-card">
            <img src="/assets/demoportfo.png" alt="Portfolio Website" />

            <h3>Portfolio Website</h3>

            <Link href="/demo-demo/portfolio" className="demo-btn">
              View Demo
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
