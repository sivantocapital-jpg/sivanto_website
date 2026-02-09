import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";
import HealthInsuranceTabs from "../components/HealthInsuranceTabs";

export const metadata = {
  title: "Health Insurance Plans in India | Sivanto Capital",
  description:
    "Get health insurance plans with cashless treatment, free check-ups, and tax benefits under Section 80D. Compare & apply online with Sivanto Capital.",
  keywords:
    "health insurance, cashless treatment, section 80D, family health insurance, senior citizen health insurance",
  alternates: {
    canonical: "https://www.sivantocapital.in/health-insurance",
  },
};

export default function HealthInsurance() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanHealthInsurance.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Health Insurance</h1>
            <ul>
              <li>✅ Cashless treatment across network hospitals</li>
              <li>✅ Free medical check-ups included</li>
              <li>✅ Income tax benefits under section 80D</li>
              <li>✅ T&amp;C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Get Started</button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="health-insurance" />
        </div>
      </section>

      {/* ================= SERVICE SECTION ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Health Insurance Plans</h1>
            <h3 className="service-tagline">
              – Secure Your Health & Future with Sivanto Capital
            </h3>

            <p className="service-desc">
             Health is unpredictable, and medical expenses can arise at any time. 
             With PaisaPulse Health Insurance Plans, you and your family can stay 
             financially protected against unexpected medical emergencies. Whether 
             it’s hospitalisation, surgeries, daycare treatments, or medical check-ups, 
             our policies cover a wide range of expenses while ensuring peace of mind. 
            </p>
            <p>Enjoy benefits like cashless treatment, income tax deductions, 
              and reimbursement of medical costs with a plan tailored to your healthcare needs. </p>

            {/* TABS */}
            <HealthInsuranceTabs />

            {/* BENEFITS */}
            <div className="apply-steps">
              <h4>Key Benefits of Health Insurance</h4>
              <ul>
                <li>Cashless Treatment – Get hassle-free treatment at network hospitals</li>
                <li>Pre & Post-Hospitalisation Cover – Expenses before & after hospital stay included</li>
                <li>Ambulance Charges – Coverage for emergency transportation</li>
                <li>Medical Check-ups – Preventive health check-ups included in select plans</li>
                <li>Tax Benefits – Premiums eligible for deductions under Section 80D of the Income Tax Act </li>
                <li>Reimbursement Facility – Get back medical costs incurred at non-network hospitals</li>
              </ul>

              <h4>Types of Health Insurance Policies</h4>
              <ul>
                <li>Individual Health Insurance – Covers a single individual</li>
                <li>Family Floater Health Insurance – One plan for the entire family</li>
                <li>Group / Employee Health Insurance – For organizations and their employees</li>
                <li>Senior Citizen Health Insurance – Tailored for individuals aged 60+</li>
                <li>Critical Illness Insurance – Coverage against life-threatening diseases</li>
                <li>Top-Up Health Insurance – Extra coverage at affordable premiums</li>
                <li>Personal Accident Insurance – Compensation for accidental injuries or death</li>
                <li>Maternity Health Insurance – Coverage for pregnancy and childbirth-related expenses</li>
              </ul>

              <p className="cta-text">
                👉 Apply Online for Sivanto Capital Health Insurance Plans today and safeguard your health, wealth, and peace of mind.
              </p>

              <p className="disclaimer">
                Disclaimer: Coverage, eligibility, and benefits depend on the chosen plan and insurer’s terms & conditions. T&C Apply.
              </p>
            </div>
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
              <li><Link href="/loan-against-insurance">Loan Against Insurance Policies</Link></li>
              <li><Link href="/loan-against-mutual-funds">Loan Against Mutual Funds & Shares</Link></li>
              <li className="active"><Link href="/health-insurance">Health Insurance</Link></li>
              <li><Link href="/life-insurance">Life Insurance</Link></li>
              <li><Link href="/credit-cards">Credit Cards</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
