"use client";
import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";

const LifeInsurance = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanLifeInsurance.jpg')" }}
      >
        <div className="loan-overlay"></div>
         <Navbar />  {/* ✅ Add Navbar here */}
        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Life Insurance</h1>
            <ul>
              <li>✅ Term Plans | ULIPs | Child Plans | Pension Plans</li>
              <li>✅ Affordable premiums with high coverage</li>
              <li>✅ Financial security & long-term protection</li>
              <li>✅ T&amp;C Apply</li>
            </ul>
            <button className="loan-btn">
              Secure Your Family's Future - Choose Your Plan
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="loan-right">
            <h2>Looking for a Life Insurance?</h2>
            <p>Let us help you find the most suitable offers.</p>

            <input type="text" placeholder="Name as Per Pancard" />
            <input type="tel" placeholder="Your Mobile Number" />

            <button className="loan-btn loan-full">Apply</button>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CONTENT ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          <div className="service-left">
            <h1 className="service-title">Life Insurance Plans</h1>
            <h3 className="service-tagline">– Secure Your Family’s Future with PaisaPulse</h3>

            <p>
              Life is unpredictable, and financial security for your loved ones is crucial. A Life Insurance Policy ensures that your family is protected against unforeseen circumstances such as death, disability, or critical illness, by offering financial stability through lump sum payouts, monthly income, or maturity benefits.
            </p>

            <p>
              At PaisaPulse, we bring you a wide range of life insurance plans – from Term Insurance, ULIPs, and Child Plans to Pension Plans – designed to suit every stage of life.
            </p>

            <h4>Key Features & Benefits of Life Insurance</h4>
            <ul>
              <li>Affordable Premiums – Get comprehensive life cover at low cost</li>
              <li>Flexible Payout Options – Choose between lump sum or monthly income for your family</li>
              <li>Custom Policy Terms – Coverage ranging from 5 years to 30 years</li>
              <li>Joint Life Coverage – Secure yourself & your spouse under a single policy</li>
              <li>Critical Illness Cover – Receive a lump sum if diagnosed with a major illness</li>
              <li>Accidental Death Benefit – Extra sum insured in case of accidental demise</li>
              <li>Income Protection – Supplementary income in case of disability or loss of income</li>
              <li>Preferred Rates for Non-Smokers – Pay lower premiums if you’re a non-smoker</li>
              <li>Tax Benefits – Save tax under Section 80C, 80D & 10(10D) of the Income Tax Act</li>
            </ul>

            <h4>Types of Life Insurance Plans</h4>
            <ul>
              <li>Term Insurance Plan – Pure protection plan offering high cover at low premiums</li>
              <li>ULIP (Unit Linked Insurance Plan) – Combines insurance with investment opportunities</li>
              <li>Child Insurance Plan – Secure your child’s education and future expenses</li>
              <li>Pension / Retirement Plan – Guaranteed income after retirement for lifelong financial security</li>
            </ul>

            <h4>How to Apply for Life Insurance?</h4>
            <ul>
              <li>Type of Plan – Do you need Term Insurance, ULIP, Child Plan, or a Pension Plan?</li>
              <li>Sum Assured & Policy Term – Choose coverage and maturity age that fits your financial goals.</li>
              <li>Claim Settlement Ratio – Check the insurer’s claim settlement history for reliability.</li>
              <li>Additional Riders – Add-on benefits like critical illness, accidental death, or disability cover.</li>
            </ul>

            <h4>Why Choose PaisaPulse for Life Insurance?</h4>
            <ul>
              <li>Wide range of customized life insurance plans</li>
              <li>Affordable premiums with maximum benefits</li>
              <li>Transparent policies with no hidden charges</li>
              <li>Trusted insurers with strong claim settlement records</li>
              <li>Tax savings while securing your family’s financial future</li>
            </ul>

            <p>
              👉 Apply Online for PaisaPulse Life Insurance Plans today and protect your loved ones against life’s uncertainties.
            </p>

            <p className="disclaimer">
              Disclaimer: Coverage, eligibility, and benefits depend on the chosen plan and insurer’s terms & conditions. T&C Apply.
            </p>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="service-right">
            <h3>OTHER SERVICES</h3>
            <ul>
              <li><Link href="/personal-loan">Personal Loan</Link></li>
              <li><Link href="/business-loan">Business Loan</Link></li>
              <li><Link href="/education-loan">Education Loan</Link></li>
              <li><Link href="/vehicle-loan">Vehicle Loan</Link></li>
              <li><Link href="/home-loan">Home Loan</Link></li>
              <li><Link href="/gold-loan">Gold Loan</Link></li>
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
