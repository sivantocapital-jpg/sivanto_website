"use client";
import { useState } from "react";

interface Props {
  formType: string;
}

const formTitles: Record<string, string> = {
  "credit-cards": "Looking for Credit Cards?",
  "business-loan": "Looking for a Business Loan?",
  "personal-loan": "Looking for a Personal Loan?",
  "education-loan": "Looking for an Education Loan?",
  "home-loan": "Looking for a Home Loan?",
  "loan-against-property": "Looking for a Loan Against Property?",
  "loan-against-insurance": "Looking for a Loan Against Insurance Policies?",
  "loan-against-mutual-funds": "Looking for a Loan Against Mutual Funds & Shares?",
  "health-insurance": "Looking for Health Insurance?",
  "life-insurance": "Looking for Life Insurance?",
  "default": "Looking for Financial Solutions?",
};

const CommonSmallForm: React.FC<Props> = ({ formType }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (isSubmitting) return; // prevent multiple clicks
    setIsSubmitting(true);

    // Show alert immediately
    alert("Thank You, we will get back to you soon!!");

    // Clear input fields immediately
    setName("");
    setMobile("");

    // Send the email in the background
    fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType,
        name,
        phone: mobile,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result.success) {
          console.error("Email sending failed:", result.error);
        }
      })
      .catch((err) => console.error("Error sending email:", err))
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const title = formTitles[formType] || formTitles["default"];

  return (
    <div className="loan-right">
      <h2>{title}</h2>
      <p>Let us help you find the most suitable offers.</p>
      <input
        type="text"
        placeholder="Name as Per Pancard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Your Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button
        className="loan-btn loan-full"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        Apply
      </button>
    </div>
  );
};

export default CommonSmallForm;
