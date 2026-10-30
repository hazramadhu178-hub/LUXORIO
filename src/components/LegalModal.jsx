// Full legal document modal opened from the footer.
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FileText, X, Check } from "lucide-react";
import { LEGAL_PAGES } from "../data/legal";

// Props this component receives:
//   pageKey - LegalPageKey object
//   onClose - function

export default function LegalModal({ pageKey, onClose }) {
  const page = LEGAL_PAGES[pageKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
        <button type="button" className="rm-close" onClick={onClose} aria-label={`Close ${page.title}`} autoFocus>
          <X size={20} />
        </button>

        <header className="legal-head">
          <span className="legal-icon"><FileText size={24} /></span>
          <div>
            <span className="badge">Luxorio Resort</span>
            <h2 id="legal-modal-title">{page.title}</h2>
            <p>{page.summary}</p>
            <small>Last updated: {page.updated}</small>
          </div>
        </header>

        <div className="legal-body">
          {page.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}><Check size={15} /> <span>{item}</span></li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="legal-actions">
          <span>Questions? Email hello@luxorio.com</span>
          <button type="button" className="btn btn-gold btn-sm" onClick={onClose}>Close</button>
        </footer>
      </article>
    </div>,
    document.body
  );
}