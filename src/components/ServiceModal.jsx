// Selected service details modal opened from the Our Services section.
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Check, Clock3, MapPin, X } from "lucide-react";
import { RESORT_SERVICES } from "../data/services";

// Props this component receives:
//   service - ResortService object
//   onSelect - function, receives service
//   onClose - function

export default function ServiceModal({ service, onSelect, onClose }) {
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
      <article className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
        <button type="button" className="rm-close" onClick={onClose} aria-label={`Close ${service.name} details`} autoFocus>
          <X size={20} />
        </button>

        <div className="service-modal-scroll">
          <div className="service-modal-image">
            <img src={service.img} alt={service.name} />
          </div>

          <div className="service-modal-content">
            <span className="badge">Our Services</span>
            <h2 id="service-modal-title">{service.name}</h2>
            <span className="gold-line" />
            <p className="service-modal-lead">{service.description}</p>

            <div className="service-modal-meta">
              <div>
                <Clock3 size={19} />
                <span><small>Hours</small><b>{service.hours}</b></span>
              </div>
              <div>
                <MapPin size={19} />
                <span><small>Location</small><b>{service.location}</b></span>
              </div>
            </div>

            <h3>Service Highlights</h3>
            <ul className="service-modal-list">
              {service.highlights.map((item) => (
                <li key={item}><Check size={16} /> <span>{item}</span></li>
              ))}
            </ul>

            <div className="service-modal-picker" aria-label="Select another service">
              <span>Explore more:</span>
              <div>
                {RESORT_SERVICES.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    className={item.slug === service.slug ? "active" : ""}
                    onClick={() => onSelect(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>,
    document.body
  );
}