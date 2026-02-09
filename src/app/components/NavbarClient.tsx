"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Navbar isScrolled={isScrolled} />;
}
