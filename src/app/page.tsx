import "../styles/home.css";
import Link from "next/link";
import Head from "next/head";
import NavbarClient from "./components/NavbarClient";




export const dynamic = "force-static";

export const metadata = {
  title: "Sivanto Capital Services Pvt. Ltd. | Official Website - Personal, Business, Home Loans",
  description:
    "Sivanto Capital provides trusted personal, business, home, and education loans with fast approval, low interest rates, and flexible repayment options.",
  keywords: [
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
  { img: "loanPersonal.jpg", title: "Personal Loan", slug: "personal-loan", desc: "Get instant personal loans up to ₹1 Cr at 10.25% p.a. Fast approval, minimal docs & 24-hr disbursal for weddings, medical, travel & more.", rate: "10.25% p.a." },
  { img: "loanBusiness.jpg", title: "Business Loan", slug: "business-loan", desc: "Fuel your business growth with loans up to ₹1 Cr at 14% p.a. Quick approval, easy docs & flexible repayment for startups, MSMEs & entrepreneurs.", rate: "14% p.a." },
  { img: "loanEducation.jpg", title: "Education Loan", slug: "education-loan", desc: "Achieve your study goals in India or abroad with loans up to ₹1 Cr at 9.25% p.a. Quick sanction & flexible repayment for higher education.", rate: "9.25% p.a." },
  { img: "loanHome.jpg", title: "Home Loan", slug: "home-loan", desc: "Buy, build, or renovate your dream home with loans up to ₹10 Cr at 8.65% p.a. Easy documentation, low fees & tenure up to 30 years.", rate: "8.65% p.a." },
  { img: "loanAgainstProperty.jpg", title: "Loan Against Property", slug: "loan-against-property", desc: "Leverage your property's value for loans at 9% p.a. Flexible tenure up to 15 yrs & overdraft facility for business, education, or personal needs.", rate: "9% p.a." },
  { img: "loanAgainstInsurancePolicy.jpg", title: "Loan Against Insurance Policy", slug: "loan-against-insurance", desc: "Raise instant funds using your insurance policies. unlock funds easily, no extra collateral needed, quick processing and flexible repayment options." },
  { img: "loanAgainstMutualFunds.jpg", title: "Loan Against Mutual Funds", slug: "loan-against-mutual-funds", desc: "Get instant funds without redeeming your investments. Leverage your shares & mutual funds with quick approval, low rates & flexible repayment.", rate: "10.5% p.a." },
  { img: "loanHealthInsurance.jpg", title: "Health Insurance", slug: "health-insurance", desc: "Stay protected from medical expenses. Cashless treatments, tax benefits & wide coverage for you & your family's healthcare needs." },
  { img: "loanLifeInsurance.jpg", title: "Life Insurance", slug: "life-insurance", desc: "Secure your family's future with life insurance. Choose term, child, ULIPs & pension plans for protection & financial stability." },
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

          <h3>
            Sivanto Capital Services Pvt. Ltd. is a trusted
            and professionally managed Private Limited loan and financial services provider,
            clearly presenting a wide range of loan solutions for individuals and
            businesses while building strong customer confidence through transparent
            processes, fast turnaround, and expert guidance. Our goal is to connect
            customers with the right lenders, simplify the loan journey from enquiry to
            approval, and encourage immediate action through reliable support and
            result-driven service.
          </h3>
        </div>
      </div>

      {/* Rest of your page content */}
      <div className="home-page">
        {/* Heading */}
        <div className="bottom-text-section">
          <h2 className="bottom-text">Discover the Services You Deserve</h2>
          <div className="bottom-lines">
            <div className="line black-line"></div>
            <div className="line red-line"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-box" key={service.title}>
                <div className="img-wrapper">
                  <img
                    src={`/assets/${service.img}`}
                    alt={service.title}
                    className="service-img"
                  />
                  {service.rate && <div className="rate-pill">{service.rate}</div>}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-buttons">
                  <Link href={`/${service.slug}`} className="pill-btn learn-btn">
                    Learn More
                  </Link>
                  <Link href="/quick-loan-app-form" className="pill-btn apply-btn">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Sivanto Section */}
        <div className="why-sivanto-section">
          <h2 className="why-heading">Why Choose Sivanto?</h2>

          <div className="why-grid">
            <div className="why-box">
              <img src="/assets/lowerInterestRates.png" alt="Lower Interest Rates" />
              <h4>Lower Interest Rates</h4>
              <p>
                We ensure your loan gets sanctioned at the most competitive interest rates
                in the market, helping you save more over time with manageable EMIs.
              </p>
            </div>

            <div className="why-box">
              <img src="/assets/fastProcessing.png" alt="Fast Processing" />
              <h4>Fast Processing & Disbursal</h4>
              <p>
                Our loan process is quick and efficient—right from application to
                disbursal—ensuring you get funds without unnecessary delays.
              </p>
            </div>

            <div className="why-box">
              <img src="/assets/easyReturn.png" alt="Easy Repayment" />
              <h4>Easy Repayment Options</h4>
              <p>
                Enjoy flexible and simple repayment options that suit your financial comfort.
              </p>
            </div>

            <div className="why-box">
              <img src="/assets/paperLess.png" alt="Paperless" />
              <h4>100% Paperless</h4>
              <p>
                Experience a seamless digital loan process with zero paperwork.
              </p>
            </div>

            <div className="why-box">
              <img src="/assets/safeSecure.png" alt="Safe & Secure" />
              <h4>Safe, Secure & Transparent</h4>
              <p>
                We are ISO 27001:2017 certified with strict data security protocols.
              </p>
            </div>

            <div className="why-box">
              <img src="/assets/collateral.png" alt="Collateral Free" />
              <h4>Collateral Free</h4>
              <p>
                Access collateral-free loans without risking your assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
