"use client";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

export default function Hero({ title, subtitle, bgImage }: HeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-section">
      <Navbar isScrolled={isScrolled} />
      <img src={bgImage} alt={title} className="hero-bg" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
