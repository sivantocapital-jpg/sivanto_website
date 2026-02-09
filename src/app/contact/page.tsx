import "../../styles/contact.css";
import NavbarClient from "../components/NavbarClient";
import ContactFormClient from "../components/ContactFormClient";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact Us - Sivanto Capital Services",
  description:
    "Contact Sivanto Capital Services for personal, business, home loans, insurance and credit card assistance. Call us or send a message and we will respond quickly.",
  keywords: [
    "contact sivanto capital",
    "loan services contact",
    "personal loan contact",
    "business loan contact",
    "home loan contact",
    "loan against property contact",
    "credit card help",
    "insurance contact",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        {/* Navbar */}
        <NavbarClient />

        <img src="/assets/deal.jpeg" alt="Contact" className="contact-bg" />
        <div className="contact-overlay"></div>
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Home &nbsp;&gt;&gt;&nbsp; Contact</p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <ContactFormClient />

          {/* SEO CONTENT SECTION */}
          <div className="contact-info">
            <h2>Get in Touch with Sivanto Capital</h2>
            <p>
              Need help choosing the right loan or insurance plan? Our team is here
              to guide you through every step — from eligibility to final approval.
              Fill out the form and we will respond within 24 hours.
            </p>

            <h3>Contact Details</h3>
            <ul>
              <li><strong>Phone:</strong> +91-8639841133</li>
              <li><strong>Email:</strong> info@sivantocapital.in</li>
              <li><strong>Address:</strong> Vijaywada, Andhra Pradesh 520008, India</li>
            </ul>

            <h3>Office Hours</h3>
            <p>Monday to Saturday: 10:00 AM – 7:00 PM</p>

            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/personal-loan">Personal Loan</a></li>
              <li><a href="/business-loan">Business Loan</a></li>
              <li><a href="/home-loan">Home Loan</a></li>
              <li><a href="/credit-cards">Credit Cards</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sivanto Capital Services",
            url: "https://www.sivantocapital.in",
            logo: "https://www.sivantocapital.in/assets/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
