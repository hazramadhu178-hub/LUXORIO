// Services: sticky intro, service cards, and a details modal for each amenity.
import { useState } from "react";
import { RESORT_SERVICES } from "../data/services";
import ServiceModal from "./ServiceModal";
import { Badge, Wave } from "./Shared";

export default function Services({ nextBg = "var(--white)" }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services" id="services">
      <div className="container services-grid">
        {/* Sticky intro column */}
        <div className="services-intro reveal">
          <Badge label="Our Services" />
          <h2 className="sec-title">We Provide<br />Services For You</h2>
          <p className="sec-text" style={{ marginTop: 14 }}>
            At our hotel luxury is more than just a word it's a tradition. From
            exquisite design to personalized service, every detail is thoughtfully
            curated to create unforgettable experiences.
          </p>
          <button
            type="button"
            className="btn btn-gold btn-sm"
            style={{ marginTop: 26 }}
            onClick={() => setSelectedService(RESORT_SERVICES[0])}
          >
            View All Services
          </button>
        </div>

        {/* Service cards */}
        <div>
          {RESORT_SERVICES.map((service) => (
            <article className="service-card reveal" key={service.slug}>
              <div>
                <h3>{service.name}</h3>
                <span className="gold-line" />
                <p>{service.text}</p>
                <button type="button" className="btn btn-gold btn-sm" onClick={() => setSelectedService(service)}>
                  View Service
                </button>
              </div>
              <img src={service.img} alt={service.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>

      {selectedService ? (
        <ServiceModal
          service={selectedService}
          onSelect={setSelectedService}
          onClose={() => setSelectedService(null)}
        />
      ) : null}

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
