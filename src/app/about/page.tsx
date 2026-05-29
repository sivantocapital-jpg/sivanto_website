import "../../styles/about.css";
import NavbarClient from "../components/NavbarClient";

export const dynamic = "force-static";

export const metadata = {
  title: "About Us - Sivanto Capital Services",
  description:
    "Learn about Sivanto Capital Services Pvt. Ltd., a trusted financial services company providing personal, business, home loans, insurance, and more with transparency and professionalism.",
  keywords: [
    "Sivanto Capital",
    "about us",
    "financial services India",
    "personal loans",
    "business loans",
    "home loans",
    "insurance",
    "trusted financial partner",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/about"
,
  },
};

export default function About() {
  return (
    <>
      <div className="about-page">
        {/* HERO */}
        <div className="about-hero">
          {/* Navbar with scroll effect */}
          <NavbarClient />

          <img src="/assets/deal.jpeg" alt="About Us" className="about-bg" />
          <div className="about-overlay"></div>
          <div className="about-content">
            {/* Hidden H1 for SEO */}
            <h1 className="sr-only">About Us - Sivanto Capital Services</h1>

            <h1>About Us</h1>
            <p>Home &nbsp;&gt;&gt;&nbsp; About Us</p>
          </div>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="who-we-are-section">
          <div className="who-we-are-container">
            <div className="who-text">
              <h2>Who We Are</h2>
              <p>
                Sivanto Capital Services Pvt. Ltd. is a professionally managed financial and digital solutions 
                company committed to delivering reliable, transparent, and customer-focused services for individuals, 
                startups, self-employed professionals, and business enterprises.
                <br /><br />
                We specialize in providing comprehensive loan assistance, insurance solutions, and modern technology 
                services tailored to meet the evolving needs of our clients. Our company acts as a trusted bridge between 
                customers and reputed banks, NBFCs, and financial institutions, helping clients identify and secure the most
                 suitable financial products based on their eligibility and requirements.
                <br /><br />
                Along with financial services, we also provide professional website development and mobile application development
                 services designed to help businesses establish a strong digital presence and grow in today’s competitive market.
                  From business websites and e-commerce platforms to Android and iOS applications, we build modern, responsive, secure, 
                  and user-friendly digital solutions that support business growth and customer engagement.
                <br /><br />
                At Sivanto Capital Services Pvt. Ltd., we believe every customer requirement is unique. Our team follows a personalized 
                and result-oriented approach, offering end-to-end support from consultation and eligibility assessment to documentation 
                assistance, technical development, deployment, and ongoing support services.
                <br /><br />
                Our organization is built on the core values of professionalism, innovation, transparency, ethical business 
                practices, data confidentiality, and long-term customer relationships. With a strong commitment to quality, 
                speed, and accountability, we strive to deliver dependable financial and digital solutions that create lasting
                 value for our customers and partners.
              </p>
            </div>

            <div className="who-image">
              <img src="/assets/aboutwhoweare.jpg" alt="Who We Are" />
            </div>
          </div>
        </div>

        {/* WHAT WE BELIEVE IN SECTION */}
        <div className="what-we-believe-section">
          <div className="what-we-believe-container">
            <div className="believe-image">
              <img src="/assets/aboutwhatwebelievein.png" alt="What We Believe In" />
            </div>
            <div className="believe-text">
              <h2>What We Believe In</h2>

              <p>
                At Sivanto Capital Services Pvt. Ltd., we believe in building trust through transparency, 
                professionalism, and customer-focused service.
              </p>

              <p>
                We are committed to delivering reliable financial and digital solutions that help individuals 
                and businesses grow with confidence. Our approach is centered on understanding customer needs, 
                providing honest guidance, and ensuring smooth and hassle-free service experiences.
              </p>

              <p>
                We believe technology and finance together can create better opportunities for businesses 
                and individuals. Through innovative web development, mobile application solutions, and dependable 
                financial assistance, we aim to empower our clients in the digital and financial world.
              </p>

              <p>
                Integrity, data confidentiality, quality service, and long-term relationships are the core values 
                that drive our organization. We continuously strive to deliver excellence, innovation, and value in 
                every service we provide.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION & VISION SECTION */}
        <div className="mission-vision-section">
          <div className="mission-vision-container">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide trusted financial and digital solutions that simplify growth for individuals, 
                startups, and businesses. We are committed to delivering transparent loan and insurance assistance along 
                with innovative website and mobile application development services that help our clients succeed in the 
                modern digital world.
                <br></br><br></br>
                Through professionalism, technology, and customer-focused support, we aim to create long-term value and 
                dependable service experiences for every client we serve.
              </p>
            </div>

            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>
                Our vision is to become a leading and trusted financial and digital solutions company recognized for 
                innovation, transparency, service excellence, and customer satisfaction.
                <br></br><br></br>
                We aspire to empower businesses and individuals by combining smart financial guidance with advanced 
                digital technologies that drive growth, stability, and long-term success.
              </p>
            </div>
          </div>

          <div className="core-values-container">
            <div className="core-values-box">
              <h3>Core Values</h3>
              <ul>
                <li><strong>Transparency:</strong> We believe in honest communication and ethical business practices in every service we provide.</li>
                <li><strong>Customer Commitment:</strong> Our customers are our priority, and we focus on delivering personalized and result-oriented solutions.</li>
                <li><strong>Innovation:</strong> We continuously adopt modern technologies and creative strategies to provide effective financial and digital services.</li>
                <li><strong>Professionalism:</strong> We maintain high standards of quality, accountability, and reliability in all our operations.</li>
                <li><strong>Integrity & Confidentiality:</strong> We value trust, protect customer information, and ensure complete data privacy and security.</li>
                <li><strong>Excellence:</strong> We are dedicated to delivering high-quality services with speed, efficiency, and long-term value.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
