// src/app/layout.tsx
import Footer from "./components/Footer";
/* import FloatingSocial from "./components/FloatingSocial"; // Make sure path is correct */
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
    icon: "/assets/favicon.png",          // default icon
    shortcut: "/assets/favicon.png",      // for browser shortcuts
    apple: "/assets/favicon.png",         // for Apple devices
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Main page content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Floating social button */}
        {/*<FloatingSocial />*/}
      </body>
    </html>
  );
}
