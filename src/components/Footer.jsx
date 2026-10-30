// Scrolling marquee + footer with contact info, link columns and palm silhouettes
import { useEffect, useState } from "react";
import { Palmtree, MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import { SocialLinks } from "./Shared";
import LegalModal from "./LegalModal";

/* Decorative palm-tree silhouette strip for the footer bottom */
function PalmStrip() {
  return (
    <svg className="footer-palms" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
      <g fill="#031512">
        <path d="M0,190 L0,120 Q120,90 260,118 Q420,150 560,116 Q720,86 880,120 Q1040,152 1180,118 Q1320,90 1440,124 L1440,190 Z" />
        {/* palm trunks + fronds */}
        <path d="M180,190 C176,150 172,120 160,92 C178,124 184,152 190,190 Z" />
        <path d="M160,92 C140,74 112,70 92,80 C114,78 132,84 160,92 Z" />
        <path d="M160,92 C150,66 130,50 104,46 C128,54 146,70 160,92 Z" />
        <path d="M160,92 C164,64 180,44 206,38 C188,52 172,72 160,92 Z" />
        <path d="M160,92 C182,76 210,72 232,82 C208,80 188,86 160,92 Z" />
        <path d="M760,190 C756,146 750,114 736,84 C756,118 762,148 768,190 Z" />
        <path d="M736,84 C712,64 680,60 656,72 C682,68 704,76 736,84 Z" />
        <path d="M736,84 C724,54 700,36 670,34 C698,42 718,60 736,84 Z" />
        <path d="M736,84 C742,52 760,30 790,24 C768,40 750,60 736,84 Z" />
        <path d="M736,84 C762,66 794,62 820,74 C792,72 768,78 736,84 Z" />
        <path d="M1240,190 C1236,152 1230,122 1218,94 C1236,124 1242,154 1248,190 Z" />
        <path d="M1218,94 C1196,76 1168,72 1146,82 C1170,80 1190,86 1218,94 Z" />
        <path d="M1218,94 C1208,66 1188,48 1160,44 C1186,52 1206,70 1218,94 Z" />
        <path d="M1218,94 C1224,64 1242,44 1270,38 C1248,52 1230,72 1218,94 Z" />
        <path d="M1218,94 C1242,78 1272,74 1296,84 C1270,82 1248,88 1218,94 Z" />
      </g>
    </svg>
  );
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [legalPage, setLegalPage] = useState(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main footer */}
      <footer className="footer">
        <div className="container footer-grid">
          {/* Brand */}
          <div>
            <a href="#home" className="logo">
              <Palmtree size={30} strokeWidth={1.6} />
              LUXORIO
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              asin cididunt ut labore et dolore magna ali qua.
            </p>
            <SocialLinks />
          </div>

          {/* Quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Reservation</a></li>
              <li><a href="#team">Our Staff</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <span><MapPin size={15} /> 123 Serenity Lane, Suite 101,<br />Hometown, CA 12345</span>
              <span><Phone size={15} /> +1 234 467 88</span>
              <span><Mail size={15} /> hello@luxorio.com</span>
              <span><Clock size={15} /> Open 24 hours, all year round</span>
            </div>
          </div>
        </div>

        <PalmStrip />

        <div className="container footer-bottom">
          <div className="footer-legal">
            <span>© 2026 All Rights Reserved</span>
            <button type="button" onClick={() => setLegalPage("terms")}>Terms &amp; Conditions</button>
            <button type="button" onClick={() => setLegalPage("privacy")}>Privacy Policy</button>
          </div>
          <span>Crafted with care at Luxorio Resort</span>
        </div>
      </footer>

      {legalPage ? <LegalModal pageKey={legalPage} onClose={() => setLegalPage(null)} /> : null}

      {/* Back to top button */}
      <button
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
