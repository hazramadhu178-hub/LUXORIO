// Focused FAQ accordion section.
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge, Wave } from "./Shared";

const FAQS = [
  {
    q: "What Amenities Are Available In The Rooms?",
    a: "At total booking in hotel, we provide amenities through a dynamic fusion of innovation, expertise, and strategic vision. Our dedicated team is committed to delivering tailored solutions that transcend traditional consulting boundaries.",
  },
  {
    q: "How Should I Book A Hotel Consultant?",
    a: "Booking a consultant is easy — reach out through our contact form or call the front desk. We match you with a hospitality specialist within 24 hours, free of charge.",
  },
  {
    q: "What Are The Payment Methods?",
    a: "We accept all major credit cards, bank transfers and digital wallets. Corporate accounts can request monthly invoicing with NET-30 payment terms.",
  },
];

export default function FaqBooking({ nextBg = "var(--white)" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-booking section" id="faqs">
      <div className="container faq-content reveal">
        <div className="faq-heading">
          <Badge label="Faqs" />
          <h2 className="sec-title">Clear Answers To Your<br />Questions</h2>
          <p className="sec-text">Find helpful details before you choose your room and begin your Luxorio stay.</p>
        </div>

        <div className="accordion">
          {FAQS.map((faq, i) => {
            const open = i === openIndex;
            return (
              <div className={`acc-item ${open ? "open" : ""}`} key={faq.q}>
                <button
                  className="acc-q"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  {faq.q}
                  <ChevronDown size={18} />
                </button>
                <div className="acc-a" style={{ maxHeight: open ? 240 : 0 }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
