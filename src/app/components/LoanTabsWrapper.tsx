"use client";

import dynamic from "next/dynamic";

// Dynamically load LoanTabs to ensure client-side rendering
const LoanTabs = dynamic(() => import("./LoanTabs"), { ssr: false });

export default function LoanTabsWrapper() {
  return <LoanTabs />;
}
