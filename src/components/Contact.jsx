// Contact Us form with the reservation enquiry fields requested for Luxorio guests.
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "./Shared";
import { submitForm } from "../utils/api";

const INQUIRY_OPTIONS = [
  "General Stay & Suite Reservations",
  "Spa & Wellness Services",
  "Restaurant & Private Dining",
  "Events & Celebrations",
  "Airport Transfer & Car Rental",
  "Other",
];

function sendWhatsAppInquiry(name, phone, subject, message) {
  const whatsappNumber = "917477707572";
  const text = `New Inquiry
Name: ${name}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleWhatsAppInquiry(event) {
    const form = event.currentTarget.form;
    const formData = new FormData(form);
    sendWhatsAppInquiry(
      formData.get("fullName") || "",
      formData.get("phone") || "",
      formData.get("inquiryType") || "",
      formData.get("message") || "",
    );
    setSuccessMessage("Your inquiry is ready to send in WhatsApp. Thank you for contacting us!");
    form.reset();
  }

  async function submitInquiry(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    try {
      await submitForm("inquiries", {
        name: values.fullName,
        email: values.email,
        subject: values.inquiryType,
        phone: values.phone,
        message: values.message,
      });
      setSuccessMessage("Your inquiry has been sent to our guest experience team. We will be in touch shortly.");
      form.reset();
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro reveal">
          <Badge label="Contact Us" />
          <h2 className="sec-title">Let's Plan Your Perfect Stay</h2>
          <span className="gold-line" />
          <p className="sec-text">
            Tell us how we can help. Our guest experience team will get back to you
            with thoughtful recommendations for your stay at Luxorio.
          </p>
        </div>

        <form className="contact-form reveal" onSubmit={submitInquiry}>
            {successMessage && (
              <div className="contact-success-message" role="status" aria-live="polite">
                <CheckCircle2 size={24} strokeWidth={1.8} />
                <div>
                  <h3>Thank You For Contacting Us</h3>
                  <p>{successMessage}</p>
                </div>
              </div>
            )}
            <div className="contact-name-email">
              <div className="form-field">
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" name="fullName" type="text" placeholder="Enter your full name" autoComplete="name"  />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="Enter your email address" autoComplete="email"  />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" type="tel" name="phone" maxLength={10} inputMode="numeric" pattern="[0-9]{10}" placeholder="Enter your phone number" autoComplete="tel" required />
            </div>

            <div className="form-field">
              <label htmlFor="contact-inquiry">Nature of Inquiry</label>
              <select id="contact-inquiry" name="inquiryType" defaultValue="General Stay & Suite Reservations" >
                {INQUIRY_OPTIONS.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we make your stay exceptional?"
                rows={5}
                
              />
            </div>

            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="contact-actions">
              <button type="submit" className="btn btn-gold" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="btn whatsapp-btn"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Enquire on WhatsApp
              </button>
            </div>
        </form>
      </div>
    </section>
  );
}