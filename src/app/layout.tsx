// src/app/layout.tsx
import Footer from "./components/Footer";
{/*import FloatingSocial from "./components/FloatingSocial"; // Make sure path is correct*/}
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


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
