import Link from "next/link";
import "../../styles/loan-common.css";
import Navbar from "../components/Navbar";
import CommonSmallForm from "../components/CommonSmallForm";

export const metadata = {
  title: "Web Development Services | Sivanto Capital",
  description:
    "Professional website development services including business websites, e-commerce platforms, and custom web solutions tailored to your needs.",
  keywords:
    "web development, website design, ecommerce development, business website, custom web solutions",
  alternates: {
    canonical: "https://www.sivantocapital.in/web-development",
  },
};

export default function WebDevelopment() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="loan-hero web-dev-hero"
        style={{ backgroundImage: "url('/assets/webnew.png')" }}
      >
        <div className="loan-overlay-app"></div>
        <Navbar />

        <div className="loan-container">

          <div className="loan-left web-hero-content">

            <div className="web-badge">
              <span className="dot"></span>
              WEB DEVELOPMENT SOLUTIONS
            </div>
    
            <h1 className="web-title">
              Build Modern <br />
              Websites That <br />
              <span>Grow Your Business</span>
            </h1>

            <p className="web-description">
              We create fast, responsive, and visually stunning websites
              designed to elevate your brand and drive business growth.
            </p>

            <div className="web-features">

              <div className="feature-item">
                <img src="/assets/responsive.png" alt="" />
                <p>Responsive <br /> Design</p>
              </div>

              <div className="feature-item">
                <img src="/assets/seoicon.png" alt="" />
                <p>SEO <br /> Optimized</p>
              </div>

              <div className="feature-item">
                <img src="/assets/speed2.png" alt="" />
                <p>Fast <br /> Performance</p>
              </div>

              <div className="feature-item">
                <img src="/assets/uiuxx.png" alt="" />
                <p>Modern <br /> UI/UX</p>
              </div>

            </div>

            <div className="web-tech">

              <p>Technologies We Use</p>

              <div className="web-tech-icons">

                <div className="tech-item">
                  <img src="/assets/html.webp" alt="HTML" />
                  <span>HTML</span>
                </div>

                <div className="tech-item">
                  <img src="/assets/css3.webp" alt="CSS" />
                  <span>CSS</span>
                </div>

                <div className="tech-item">
                  <img src="/assets/js.webp" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>

                <div className="tech-item">
                  <img src="/assets/react.png" alt="React" />
                  <span>React</span>
                </div>

                <div className="tech-item">
                  <img src="/assets/nextwhite.png" alt="Next.js" />
                  <span>Next.js</span>
                </div>

                <div className="tech-item">
                  <img src="/assets/wordpress.png" alt="WordPress" />
                  <span>WordPress</span>
                </div>

                <div className="tech-item php-item">
                  <img src="/assets/php.png" alt="PHP" />
                  <span>PHP</span>
                </div>

              </div>

            </div>
          </div>




          {/* LEFT CONTENT */}
          {/*   <div className="loan-left">
            <h1>Web Development</h1>
            <ul>
              <li>✅ Professional & Responsive Website Design</li>
              <li>✅ E-commerce & Business Website Solutions</li>
              <li>✅ SEO Optimized & Fast Loading Pages</li>
              <li>✅ T&amp;C Apply</li>
            </ul>

            <Link href="/quick-loan-app-form">
              <button className="loan-btn">Get Started</button>
            </Link>
          </div>
*/}
          {/* RIGHT FORM */}
          {/*<CommonSmallForm formType="web-development" />*/}
        </div>
      </section>

      {/* ================= PRICING + ZIG-ZAG IMAGES + RIGHT SIDEBAR ================= */}
      <section className="service-common">
        <div
          className="service-wrapper"
          style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}
        >
          {/* LEFT SIDE – Pricing & Images */}
          <div className="service-left" style={{ flex: 2, minWidth: "300px" }}>
            <h1>WEB DESIGNING SERVICES WITH PRICING </h1>

            {/* CORE WEB DESIGN SERVICES */}
            <div className="pricing-row extra-space">
              <div className="pricing-text">
                <h3 className="top-margin-only">CORE WEB DESIGN SERVICES</h3>
                <ul>
                  <li>Business Website Design</li>
                  <li>Responsive Website Design</li>
                  <li>Landing Page Design</li>
                  <li>Website Redesign Solutions</li>
                  <li>UI/UX Wireframing & Prototyping</li>
                </ul>
              </div>
              <div className="pricing-image extra-space" >
                <img src="/assets/uiux.png" alt="UI/UX Design" />
              </div>
            </div>

            {/* WEBSITE DEVELOPMENT SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">WEBSITE DEVELOPMENT SERVICES</h3>
                <ul>
                  <li>Static Business Website</li>
                  <li>Dynamic Website Development</li>
                  <li>WordPress Website Development</li>
                  <li>Custom Web Application Development</li>
                  <li>E-Commerce Website Development</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/web2.png" alt="Website Development" />
              </div>
            </div>

            {/* E-COMMERCE SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">E-COMMERCE SERVICES</h3>
                <ul>
                  <li>Online Store Development</li>
                  <li>Secure Payment Gateway Integration</li>
                  <li>Shopping Cart Integration</li>
                  <li>Product Upload & Store Management</li>
                  <li>Order Management System Setup</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/ecom2.png" alt="E-Commerce Services" />
              </div>
            </div>

            {/* TECHNICAL SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">TECHNICAL SERVICES</h3>
                <ul>
                  <li>Domain & Hosting Support</li>
                  <li>Web Hosting Configuration</li>
                  <li>Website Migration Services</li>
                  <li>Website Speed Optimization</li>
                  <li>SSL Security Integration</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/technical2.png" alt="Technical Services" />
              </div>
            </div>

            {/* SEO SERVICES */}
            <div className="pricing-row">
              <div className="pricing-text">
                <h3 className="top-margin-only">SEO SERVICES</h3>
                <ul>
                  <li>On-Page SEO Optimization</li>
                  <li>Technical SEO Services</li>
                  <li>Google Analytics Integration</li>
                  <li>Google Search Console Setup</li>
                  <li>Local SEO Optimization</li>
                </ul>
              </div>
              <div className="pricing-image  extra-space">
                <img src="/assets/seo2.png" alt="SEO Services" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Other Services */}
          <div
            className="service-right"
            style={{ flex: 0.6, minWidth: "200px" }}
          >
            <h3>OTHER SERVICES</h3>
            <ul>
              <li className="active">
                <Link href="/web-development">Web Development</Link>
              </li>
              <li><Link href="/app-development">App Development</Link></li>
              <li>
                <Link href="/personal-loan">Personal Loan</Link>
              </li>
              <li>
                <Link href="/business-loan">Business Loan</Link>
              </li>

              <li>
                <Link href="/home-loan">Home Loan</Link>
              </li>
              <li>
                <Link href="/credit-cards">Credit Cards</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}