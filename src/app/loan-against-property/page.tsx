import LoanAgainstPropertyClient from "./LoanAgainstPropertyClient";

export const metadata = {
  title: "Loan Against Property | Low Interest Rate & Fast Approval – Sivanto Capital",
  description:
    "Get Loan Against Property with interest rates starting at 9% p.a., fast approval, flexible tenure, and easy documentation. Apply online now!",
  alternates: {
    canonical: "https://www.sivantocapital.in/loan-against-property",
  },
  openGraph: {
    title: "Loan Against Property | Low Interest Rate & Fast Approval – Sivanto Capital",
    description:
      "Get Loan Against Property with interest rates starting at 9% p.a., fast approval, flexible tenure, and easy documentation. Apply online now!",
    url: "https://www.sivantocapital.in/loan-against-property",
    siteName: "Sivanto Capital",
    images: [
      {
        url: "https://www.sivantocapital.in/assets/loanAgainstProperty.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Against Property | Low Interest Rate & Fast Approval – Sivanto Capital",
    description:
      "Get Loan Against Property with interest rates starting at 9% p.a., fast approval, flexible tenure, and easy documentation. Apply online now!",
  },
};

export default function Page() {
  return <LoanAgainstPropertyClient />;
}
