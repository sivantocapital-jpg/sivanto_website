import LifeInsurance from "./LifeInsurance";

export const metadata = {
  title: "Life Insurance Plans in India | Sivanto Capital",
  description:
    "Choose from Term Plans, ULIPs, Child Plans, Pension Plans and more. Get the best life insurance plans in India with Sivanto Capital.",
  keywords: [
    "life insurance",
    "term insurance",
    "ULIP",
    "child plan",
    "pension plan",
    "life insurance india",
    "Sivanto Capital",
  ],
  alternates: {
    canonical: "https://www.sivantocapital.in/life-insurance",
  },
};

export default function Page() {
  return <LifeInsurance />;
}
