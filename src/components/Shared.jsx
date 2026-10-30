// Shared small pieces used by many sections
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------- Small pill label above section titles ---------- */
export function Badge({ label, onDark = false }) {
  return <span className={`badge ${onDark ? "badge-dark" : ""}`}>{label}</span>;
}

/* ---------- Wavy divider that glues two sections together ---------- */
export function Wave({ fill = "", className = "" }) {
  return (
    <svg
      className={`wave ${className}`}
      style={fill ? { fill } : undefined}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,55 C170,95 380,5 600,28 C820,51 960,90 1160,48 C1300,19 1390,36 1440,55 L1440,90 L0,90 Z" />
    </svg>
  );
}

/* ---------- Hand-made social icons (no brand icon dependency) ---------- */
const iconProps = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.5 4.5l15 15" />
      <path d="M19.5 4.5l-15 15" />
    </svg>
  );
}

export function PinterestIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9.2 20.5c.8-2.6 1.6-5.4 2.1-7.5" />
      <path d="M8.4 13.2c-.5.6-.8 1.4-.8 2.2a4.3 4.3 0 1 0 8.5-.6c0-2.3-1.9-4.1-4.3-4.1a4.2 4.2 0 0 0-4.1 3.1" />
    </svg>
  );
}

export function SocialLinks({ light = false }) {
  const links = [
    { label: "Instagram", Icon: InstagramIcon },
    { label: "Facebook", Icon: FacebookIcon },
    { label: "X", Icon: XIcon },
    { label: "Pinterest", Icon: PinterestIcon },
  ];
  return (
    <div className={`social-links ${light ? "social-light" : ""}`}>
      {links.map(({ label, Icon }) => (
        <a key={label} href="#" aria-label={label} className="social-dot">
          <Icon />
        </a>
      ))}
    </div>
  );
}

/* ---------- Fade-in-up animation whenever an element scrolls into view ---------- */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

/* ---------- Section heading block (badge + title + optional text) ---------- */
export function SectionHead({
  badge,
  title,
  text,
  center = true,
  dark = false,
}) {
  return (
    <div className={`section-head ${center ? "center" : ""} ${dark ? "dark" : ""}`}>
      <Badge label={badge} onDark={dark} />
      <h2 className="sec-title">{title}</h2>
      {text ? <p className="sec-text">{text}</p> : null}
    </div>
  );
}

/* ---------- Gold underline used below headings ---------- */
export function GoldLine({ className = "" }) {
  return <span className={`gold-line ${className}`} />;
}

/* ---------- Round prev/next arrows shared by the blog and testimonials sliders ---------- */
export function SliderArrows({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  prevLabel = "Previous",
  nextLabel = "Next",
}) {
  return (
    <>
      <button type="button" className="slider-btn slider-prev" onClick={onPrev} disabled={prevDisabled} aria-label={prevLabel}>
        <ChevronLeft size={22} />
      </button>
      <button type="button" className="slider-btn slider-next" onClick={onNext} disabled={nextDisabled} aria-label={nextLabel}>
        <ChevronRight size={22} />
      </button>
    </>
  );
}

/* ---------- Clickable dots shared by the blog and testimonials sliders ---------- */
export function SliderDots({
  count,
  active,
  onGo,
}) {
  return (
    <div className="dots-nav">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={i === active ? "active" : ""}
          onClick={() => onGo(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === active}
        />
      ))}
    </div>
  );
}
