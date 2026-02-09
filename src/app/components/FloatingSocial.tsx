"use client";

import { useState } from "react";
import styles from "../../styles/FloatingSocial.module.css";

const socials = [
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=61587500886611",
    icon: "fab fa-facebook-f",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/sivantocapital_pvt_ltd/",
    icon: "fab fa-instagram",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/hemanth-mogilipalepu-819b26399/",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "twitter",
    link: "https://x.com/SivantoCapital",
    icon: "fab fa-twitter",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@SivantoCapital",
    icon: "fab fa-youtube",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/918639841133",
    icon: "fab fa-whatsapp",
  },
];

const FloatingSocial = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Floating Button */}
      <div className={styles.floatingBtn} onClick={() => setOpen(!open)}>
        <i className="fas fa-share-alt"></i>
      </div>

      {/* Social Icons */}
      <div className={`${styles.socialIcons} ${open ? styles.show : ""}`}>
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles[social.name]}`}
            style={{
              "--index": index,
              "--total": socials.length,
            } as React.CSSProperties}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </>
  );
};

export default FloatingSocial;
