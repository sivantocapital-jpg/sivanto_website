import LoanProcessClient from "./LoanProcessClient";

export const dynamic = "force-static";

export const metadata = {
  title: "Loan Process",
  description:
    "Understand the complete loan process with Sivanto Capital Services, from eligibility check to document submission, approval, and EMI calculation. Apply for personal, business, or home loans easily.",
  keywords: [
    "loan process",
    "EMI calculator",
    "personal loan",
    "business loan",
    "home loan",
    "how to apply for loan",
    "Sivanto Capital Services",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/loan-process",
  },
  openGraph: {
    title: "Loan Process - Sivanto Capital Services",
    description:
      "Understand the complete loan process with Sivanto Capital Services, from eligibility check to document submission, approval, and EMI calculation.",
    url: "https://www.sivantocapital.in/loan-process",
    siteName: "Sivanto Capital",
    images: [
      {
        url: "https://www.sivantocapital.in/assets/deal.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <LoanProcessClient />;
}
