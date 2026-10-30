// Fixed header: dark top bar + navbar that turns solid on scroll.
// The navbar also tracks your position on the page (scroll-spy): the link of the
// section you are currently viewing is highlighted, like a permanent hover.
import { useEffect, useState } from "react";
import { MapPin, Phone, Menu, Palmtree, X } from "lucide-react";
import { SocialLinks } from "./Shared";
import ThemeToggle from "./ThemeToggle";

// Nav links, in the order they are displayed
const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Room", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pages", href: "#facilities" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

// The sections the nav tracks, in the order they appear on the page
// (Facilities/"Pages" comes before Rooms/"Room" on the page)
const TRACKED_SECTIONS = ["home", "facilities", "rooms", "gallery", "services", "blog", "contact"];

// Props this component receives:
//   theme - "light", "warm" or "dark"
//   onThemeChange - function, receives theme

export default function Header({ theme, onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Scroll-spy: the section currently in view (its nav link is highlighted)
  const [activeSection, setActiveSection] = useState(TRACKED_SECTIONS[0]);

  // Turn the header solid once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape or when returning to desktop width.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scroll-spy: keep the highlighted link in sync with the section in view
  useEffect(() => {
    function updateActiveSection() {
      const line = window.innerHeight * 0.4; // the "reading line", 40% down the screen
      let current = TRACKED_SECTIONS[0];

      // The section in view is the last one whose top has passed the reading line
      for (const id of TRACKED_SECTIONS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }

      // At the very bottom of the page, highlight the last link (Contact Us)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (atBottom) current = TRACKED_SECTIONS[TRACKED_SECTIONS.length - 1];

      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  // Is this link the one for the section currently in view?
  const isActive = (href) => href === `#${activeSection}`;

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      {/* Thin dark utility bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contacts">
            <span><MapPin size={14} /> 123 Serenity Lane, Suite 101 UK</span>
            <span><Phone size={14} /> <b>+1 234 467 88</b></span>
          </div>
          <div className="topbar-right">
            <SocialLinks light />
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="container navbar-inner">
        <a
          href="#home"
          className="logo"
          aria-label="Luxorio home"
          onClick={() => {
            setActiveSection("home");
            setMenuOpen(false);
          }}
        >
          <Palmtree size={30} strokeWidth={1.6} />
          LUXORIO
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setActiveSection(link.href.slice(1))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          {/* The mobile version lives inside the menu to prevent duplicate controls. */}
          <div className="desktop-theme-switcher">
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
          </div>

          <a href="#rooms" className="book-now">Book Now</a>
          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drop-down menu */}
      <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
        <div className="mobile-theme-wrap">
          <span className="mobile-theme-label">Theme Mode:</span>
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={() => {
              setMenuOpen(false);
              setActiveSection(link.href.slice(1));
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#rooms"
          className="mobile-book-now"
          onClick={() => setMenuOpen(false)}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
