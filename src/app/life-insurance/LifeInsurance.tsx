import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

const LifeInsurance = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanLifeInsurance.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          {/* LEFT */}
          <div className="loan-left">
            <h1>Life Insurance</h1>
            <ul>
              <li>✅ Term Plans | ULIPs | Child Plans | Pension Plans</li>
              <li>✅ Affordable premiums with high coverage</li>
              <li>✅ Financial security & long-term protection</li>
              <li>✅ T&C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">
                Secure Your Family's Future - Choose Your Plan
              </button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="life-insurance" />
        </div>
      </section>

      {/* SERVICE CONTENT */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Life Insurance Plans</h1>
            <h3 className="service-tagline">
              – Secure Your Family’s Future with Sivanto Capital
            </h3>

            <p>
              Life is unpredictable, and financial security for your loved ones is crucial...
            </p>

            <h4>Key Features & Benefits of Life Insurance</h4>
            <ul>
              <li>Affordable Premiums – Get comprehensive life cover at low cost</li>
              <li>Flexible Payout Options – Choose between lump sum or monthly income</li>
              <li>Custom Policy Terms – Coverage from 5 to 30 years</li>
              <li>Joint Life Coverage – Secure you & your spouse</li>
              <li>Critical Illness Cover – Lump sum payout for major illnesses</li>
              <li>Accidental Death Benefit – Extra sum insured for accidental demise</li>
              <li>Income Protection – Monthly income for disability or loss of income</li>
              <li>Preferred Rates for Non-Smokers – Lower premiums for non-smokers</li>
              <li>Tax Benefits – Save under Section 80C, 80D & 10(10D)</li>
            </ul>

            <h4>Types of Life Insurance Plans</h4>
            <ul>
              <li>Term Insurance Plan – High cover at low premium</li>
              <li>ULIP – Insurance + investment</li>
              <li>Child Insurance Plan – Secure child’s future</li>
              <li>Pension Plan – Guaranteed retirement income</li>
            </ul>

            <h4>How to Apply for Life Insurance?</h4>
            <ul>
              <li>Choose plan type</li>
              <li>Decide sum assured & policy term</li>
              <li>Check insurer’s claim settlement ratio</li>
              <li>Add riders if needed</li>
            </ul>

            <h4>Why Choose Sivanto Capital?</h4>
            <ul>
              <li>Wide range of plans</li>
              <li>Affordable premiums</li>
              <li>Transparent policies</li>
              <li>Trusted insurers</li>
              <li>Tax benefits</li>
            </ul>

            <p>
              👉 Apply Online for Sivanto Capital Life Insurance Plans today.
            </p>

            <p className="disclaimer">
              Disclaimer: Coverage depends on plan and insurer terms. T&C Apply.
            </p>
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
              <li><Link href="/health-insurance">Health Insurance</Link></li>
              <li className="active"><Link href="/life-insurance">Life Insurance</Link></li>
              <li><Link href="/credit-cards">Credit Cards</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeInsurance;
