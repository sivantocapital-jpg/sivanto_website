"use client";
import Link from "next/link";
import Head from "next/head";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";

const CreditCards = () => {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>PaisaPulse Credit Cards – Compare & Apply Online</title>
        <meta
          name="description"
          content="Compare 50+ credit cards from top banks, check eligibility instantly, and apply online with PaisaPulse. Get cashback, rewards, travel perks, and instant approval."
        />
        <meta
          name="keywords"
          content="Credit Cards, Pre-approved Credit Card, PaisaPulse, Rewards, Cashback, Travel Perks, Online Application"
        />
        <link rel="canonical" href="https://www.yourdomain.com/credit-cards" />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              "name": "Credit Cards",
              "description": "Compare and apply online for credit cards from leading banks with PaisaPulse. Check eligibility instantly and get rewards, cashback, and travel perks.",
              "provider": {
                "@type": "Organization",
                "name": "PaisaPulse",
                "url": "https://www.yourdomain.com",
                "logo": "https://www.yourdomain.com/assets/logo.png"
              },
              "loanType": "Credit Card",
              "url": "https://www.yourdomain.com/credit-cards"
            })
          }}
        />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero"
        style={{ backgroundImage: "url('/assets/loanCreditCards.jpg')" }}
      >
        <div className="loan-overlay"></div>
        <Navbar />  {/* ✅ Add Navbar here */}

        <div className="loan-container">
          {/* LEFT CONTENT */}
          <div className="loan-left">
            <h1>Credit Cards</h1>
            <ul>
              <li>✅ Check pre-approved credit cards instantly</li>
              <li>✅ Quick online application with instant eligibility check</li>
            </ul>
            <button className="loan-btn">
              Find the Right Card in One Click
            </button>
          </div>

          {/* RIGHT FORM */}
          <div className="loan-right">
            <h2>Looking for Credit Cards?</h2>
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
          {/* LEFT CONTENT */}
          <div className="service-left">
            <h1 className="service-title">Check Pre-Approved Credit Cards in Just One Click</h1>
            <p>
              Looking for the best credit card to match your lifestyle and spending habits? At PaisaPulse, we make it simple to compare, choose, and apply for credit cards from 50+ leading banks — all in one place. Whether you want cashback, rewards, travel perks, or easy EMIs, we help you find the perfect card instantly.
            </p>

            <h4>Why Choose Credit Cards from PaisaPulse?</h4>
            <ul>
              <li>Compare 50+ Cards – From top banks like HDFC, SBI, ICICI, Axis, Citi, Standard Chartered, American Express & more</li>
              <li>Check Eligibility Instantly – Know your chances of approval in just seconds</li>
              <li>Smart Comparisons – Compare benefits, rewards, fees, and cashback offers easily</li>
              <li>Instant Approval – Apply online and get quick approval with minimal hassle</li>
              <li>Personalized Matches – Get card recommendations based on your profile & spending habits</li>
            </ul>

            <h4>Benefits of Having a Credit Card</h4>
            <ul>
              <li>Welcome Offers – Exciting vouchers, cashback, or bonus reward points on joining</li>
              <li>Reward Points & Cashback – Earn points on every purchase and redeem them easily</li>
              <li>Fuel Surcharge Waiver – Save more when you fuel up at partnered petrol pumps</li>
              <li>Easy EMI Conversions – Convert high-ticket purchases into affordable EMIs</li>
              <li>Add-on Cards – Get supplementary cards for family members</li>
              <li>Concierge Services – 24x7 assistance for travel, dining, and entertainment bookings</li>
              <li>Insurance Cover – Complimentary travel, health, and accidental insurance with select cards</li>
            </ul>

            <h4>How to Choose the Best Credit Card for You</h4>
            <ul>
              <li>Are you new to credit or already have a card?</li>
              <li>Do you prefer cashback, rewards, or air miles?</li>
              <li>What type of purchases do you spend most on – shopping, fuel, travel, dining, or utilities?</li>
              <li>Do you prefer certain airlines, brands, or online platforms?</li>
              <li>Are you okay with paying an annual fee if the card gives maximum benefits?</li>
              <li>Are you a heavy spender who can reach spending milestones for bonus rewards or annual fee waivers?</li>
              <li>Do you need lifestyle perks like airport lounge access, dining discounts, or fuel benefits?</li>
            </ul>

            <h4>Apply Online & Get Instant Credit Card Approval</h4>
            <ul>
              <li>Check Eligibility – Answer a few quick questions</li>
              <li>Compare Cards – Shortlist based on benefits, fees & approval chances</li>
              <li>Apply Online – Complete a simple digital form</li>
              <li>Get Instant Approval – Receive your pre-approved or eligible cards instantly</li>
            </ul>

            <p>
              👉 Start your credit card journey today with PaisaPulse and unlock rewards, cashback, and financial flexibility.
            </p>

            <p className="disclaimer">
              Disclaimer: Credit card eligibility, benefits, and offers depend on the bank’s policies. Terms & Conditions apply.
            </p>
          </div>

          {/* RIGHT SIDEBAR */}
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
              <li><Link href="/life-insurance">Life Insurance</Link></li>
              <li className="active"><Link href="/credit-cards">Credit Cards</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditCards;
