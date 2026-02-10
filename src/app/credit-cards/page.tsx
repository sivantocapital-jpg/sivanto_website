import Link from "next/link";
import Navbar from "../components/Navbar";
import "../../styles/loan-common.css";
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "Sivanto Capital Credit Cards – Compare & Apply Online",
  description:
    "Compare 50+ credit cards from top banks, check eligibility instantly, and apply online with Sivanto Capital. Get cashback, rewards, travel perks, and instant approval.",
  keywords:
    "Credit Cards, Pre-approved Credit Card, Sivanto Capital, Rewards, Cashback, Travel Perks, Online Application",
  alternates: {
    canonical: "https://www.sivantocapital.in/credit-cards",
  },
};

export default function CreditCards() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanCreditCards.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />

        <div className="loan-container">
          <div className="loan-left">
            <h1>Credit Cards</h1>
            <ul>
              <li>✅ Check pre-approved credit cards instantly</li>
              <li>✅ Quick online application with instant eligibility check</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">
                Find the Right Card in One Click
              </button>
            </Link>
          </div>

          {/* RIGHT FORM */}
          <CommonSmallForm formType="credit-cards" />
        </div>
      </section>

      {/* ================= SERVICE CONTENT ================= */}
      <section className="service-common">
        <div className="service-wrapper">
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">
              Check Pre-Approved Credit Cards in Just One Click
            </h1>

            <p>
              Looking for the best credit card to match your lifestyle and
              spending habits? At Sivanto Capital, we make it simple to compare,
              choose, and apply for credit cards from 50+ leading banks — all in
              one place. Whether you want cashback, rewards, travel perks, or
              easy EMIs, we help you find the perfect card instantly.
            </p>

            <h3 className="extra-space">Why Choose Credit Cards from Sivanto Capital?</h3>
            <ul>
              <li>
                Compare 50+ Cards – From top banks like HDFC, SBI, ICICI, Axis,
                Citi, Standard Chartered, American Express & more
              </li>
              <li>Check Eligibility Instantly – Know your chances of approval in just seconds </li>
              <li>Smart Comparisons – Compare benefits, rewards & fees, and cashback offers easily </li>
              <li>Instant Approval – Apply online and get quick approval with minimal hassle</li>
              <li>Personalized Matches – Get card recommendations based on your profile & spending habits </li>
            </ul>

            <h3 className="extra-space">Benefits of Having a Credit Card</h3>
            <ul>
              <li>Welcome Offers –  Get exciting vouchers, cashback, or bonus reward points on joining </li>
              <li>Reward Points & Cashback – Earn points on every purchase and redeem them easily </li>
              <li>Fuel Surcharge Waiver – Save more when you fuel up at partnered petrol pumps s</li>
              <li>Easy EMI Conversions – Convert high-ticket purchases into affordable EMIs </li>
              <li>Add-on Cards – Get supplementary cards for family members </li>
              <li>Concierge Services – Get 24x7 assistance for travel, dining, and entertainment bookings </li>
              <li>Insurance Cover – Complimentary travel, health, and accidental insurance with select cards </li>
            </ul>

            <h3 className="extra-space">How to Choose the Best Credit Card for You</h3>
            <p className="top-margin-only">Before applying, ask yourself these 7 important questions to pick the right credit card: </p>
            <ul>
              <li>Are you new to credit or already have a card?</li>
              <li>Do you prefer cashback, rewards, or air miles?</li>
              <li>What type of purchases do you spend most on – shopping, fuel, travel, dining, or utilities?</li>
              <li>Do you prefer certain airlines, brands, or online platforms? </li>
              <li>Are you okay with paying an annual fee if the card gives maximum benefits? </li>
              <li>Are you a heavy spender who can reach spending milestones for bonus rewards or annual fee waivers? </li>
              <li>Do you need lifestyle perks like airport lounge access, dining discounts, or fuel benefits? </li>
            </ul>

            <h3 className="extra-space">Apply Online & Get Instant Credit Card Approval</h3>
            <p className="top-margin-only">With Sivanto Capital, your journey is quick, secure, and hassle-free: </p>
            <ul>
              <li>Check Eligibility – Answer quick questions</li>
              <li>Compare Cards – Shortlist based on benefits, fees & approval chances </li>
              <li>Apply Online – Complete a simple digital form </li>
              <li>Get Instant Approval – Receive your pre-approved or eligible cards instantly </li>
            </ul>

            <p className="education-extra">
              👉 Start your credit card journey today with Sivanto Capital and
              unlock rewards, cashback, and financial flexibility.
            </p>

            <p className="disclaimer">
              Disclaimer: Credit card eligibility, benefits, and offers depend
              on the bank’s policies. Terms & Conditions apply.
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
              <li><Link href="/life-insurance">Life Insurance</Link></li>
              <li className="active"><Link href="/credit-cards">Credit Cards</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
