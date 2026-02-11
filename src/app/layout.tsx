// src/app/layout.tsx
import Footer from "./components/Footer";
/* import FloatingSocial from "./components/FloatingSocial"; */
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  metadataBase: new URL("https://www.sivantocapital.in"),
  title: {
    default: "Sivanto Capital Services Pvt. Ltd. | Personal, Business, Home Loans",
    template: "%s | Sivanto Capital Services Pvt. Ltd.",
  },
  description:
    "Sivanto Capital provides trusted personal, business, home, and education loans with fast approval, low interest rates, and flexible repayment options.",
  applicationName: "Sivanto Capital Services Pvt. Ltd.",
  openGraph: {
    siteName: "Sivanto Capital Services Pvt. Ltd.",
    type: "website",
    url: "https://www.sivantocapital.in",
  },
  icons: {
    icon: "/favicon.ico",          // default icon
    shortcut: "/favicon.ico",      // for browser shortcuts
    apple: "/favicon.ico",         // for Apple devices
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Organization JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sivanto Capital Services Pvt. Ltd.",
              "url": "https://www.sivantocapital.in/",
              "logo": "https://www.sivantocapital.in/assets/favicon.png"
            }),
          }}
        />
      </head>
      <body>
        {children}

        {/* Footer */}
        <Footer />

        {/* Floating social button */}
        {/*<FloatingSocial />*/}
      </body>
    </html>
  );
}
