// Room Details popup: details first, then a booking form, then confirmation.
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Star, Maximize, BedDouble, Users, Eye, Check, CircleCheck, ShieldCheck, ArrowLeft } from "lucide-react";
import { ROOMS } from "../data/rooms";
import { toDateText, addDays, countNights, prettyDate } from "../utils/dates";
import { submitForm } from "../utils/api";

// Props this component receives:
//   room - Room object
//   onClose - function

export default function RoomModal({ room, onClose }) {
  const today = toDateText(new Date());

  // Booking flow: details -> form -> confirmation
  const [step, setStep] = useState("details");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room: room.name,
    checkIn: today,
    checkOut: addDays(today, 1),
    adults: 1,
    children: 0,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bookingRoom = ROOMS.find((item) => item.name === formData.room) ?? room;
  const nights = countNights(formData.checkIn, formData.checkOut);
  const total = nights * bookingRoom.price;
  const nightsLabel = nights === 1 ? "night" : "nights";

  // The four quick facts shown as small tiles
  const facts = [
    { label: "Room Size", value: room.size, Icon: Maximize },
    { label: "Bed Type", value: room.bed, Icon: BedDouble },
    { label: "Max Guests", value: `${room.guests} Guests`, Icon: Users },
    { label: "View", value: room.view, Icon: Eye },
  ];

  // While the popup is open: stop the page behind it from scrolling, and let the Esc key close it
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const closeOnEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [onClose]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => {
      if (name === "room" && !ROOMS.some((item) => item.name === value)) return current;

      const nextValue = name === "adults" || name === "children" ? Number(value) : value;
      const next = { ...current, [name]: nextValue };

      if (name === "checkIn" && value && current.checkOut <= value) {
        next.checkOut = addDays(value, 1);
      }

      if (name === "room") {
        const capacity = ROOMS.find((item) => item.name === value).guests;
        next.adults = Math.min(current.adults, capacity);
        next.children = Math.min(current.children, Math.max(0, capacity - next.adults));
      }

      return next;
    });
  }

  async function confirmBooking(event) {
    event.preventDefault();
    const guestCount = formData.adults + formData.children;

    if (nights < 1) {
      setError("Please pick a check-out date after your check-in date.");
      return;
    }
    if (guestCount > bookingRoom.guests) {
      setError(`${bookingRoom.name} can accommodate up to ${bookingRoom.guests} guests.`);
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      await submitForm("reservations", formData);
      setStep("confirmed");
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  // createPortal puts the popup at the end of <body>, so nothing on the page can cover it
  return createPortal(
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(); // only clicks on the dark background
      }}
    >
      <div className="room-modal" role="dialog" aria-modal="true" aria-labelledby="room-modal-title">
        <button type="button" className="rm-close" onClick={onClose} aria-label="Close room details" autoFocus>
          <X size={20} />
        </button>

        <div className="rm-scroll">
          {/* ---------- Left: photo + room information ---------- */}
          <div className="rm-info">
            <div className="rm-img">
              <img src={room.img} alt={room.name} />
              <span className="rating-pill">
                <Star size={13} fill="var(--gold)" strokeWidth={0} />
                {room.rating} · {room.reviews} reviews
              </span>
            </div>

            <div className="rm-body">
              <span className="badge">Room Details</span>
              <h3 id="room-modal-title">{room.name}</h3>
              <span className="gold-line" />
              <p>{room.description}</p>

              <div className="rm-facts">
                {facts.map(({ label, value, Icon }) => (
                  <div className="rm-fact" key={label}>
                    <Icon size={20} strokeWidth={1.6} />
                    <div>
                      <small>{label}</small>
                      <b>{value}</b>
                    </div>
                  </div>
                ))}
              </div>

              <h4>Room Amenities</h4>
              <ul className="check-list">
                {room.amenities.map((item) => (
                  <li key={item}>
                    <Check size={15} className="tick" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Right: details -> booking form -> confirmation ---------- */}
          <aside className="rm-booking">
            {step === "details" ? (
              <div className="rm-booking-preview">
                <span className="badge">Your Selection</span>
                <h3>Ready To Stay?</h3>
                <p>Choose your dates and guest details when you are ready to reserve this room.</p>

                <div className="rm-price">
                  <small>Starting from</small>
                  <b>₹{room.price.toLocaleString("en-IN")}</b>
                  <span> / Night</span>
                </div>

                <div className="rm-preview-facts">
                  <span><BedDouble size={16} /> {room.bed}</span>
                  <span><Users size={16} /> Up to {room.guests} guests</span>
                </div>

                <button type="button" className="btn btn-gold w-full justify-center" onClick={() => setStep("booking")}>
                  Book Now
                </button>
                <p className="rm-note flex items-center justify-center gap-2">
                  <ShieldCheck size={15} /> Free cancellation within 24 hours
                </p>
              </div>
            ) : null}

            {step === "booking" ? (
              <form onSubmit={confirmBooking}>
                <span className="rm-step">Step 2 of 2</span>
                <h3>Complete Your Booking</h3>
                <p className="rm-booking-copy">Choose your stay details, then confirm your reservation.</p>

                <div className="form-field">
                  <label htmlFor="rm-name">Full Name</label>
                  <input id="rm-name" name="name" type="text" autoComplete="name" maxLength={120} value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="rm-email">Email Address</label>
                  <input id="rm-email" name="email" type="email" autoComplete="email" maxLength={254} value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="rm-phone">Phone</label>
                  <input id="rm-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-grid rm-date-grid">
                  <div className="form-field">
                    <label htmlFor="rm-check-in">Check In</label>
                    <input
                      id="rm-check-in"
                      type="date"
                      name="checkIn"
                      required
                      min={today}
                      value={formData.checkIn}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="rm-check-out">Check Out</label>
                    <input
                      id="rm-check-out"
                      type="date"
                      name="checkOut"
                      required
                      min={addDays(formData.checkIn || today, 1)}
                      value={formData.checkOut}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid rm-guest-grid">
                  <div className="form-field">
                    <label htmlFor="rm-adults">Adults</label>
                    <select id="rm-adults" name="adults" value={formData.adults} onChange={handleChange} required>
                      {Array.from({ length: bookingRoom.guests }, (_, i) => i + 1).map((count) => (
                        <option key={count} value={count}>{count} {count === 1 ? "Adult" : "Adults"}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="rm-children">Children</label>
                    <select id="rm-children" name="children" value={formData.children} onChange={handleChange} required>
                      {Array.from({ length: bookingRoom.guests + 1 }, (_, i) => i).map((count) => (
                        <option key={count} value={count}>{count} {count === 1 ? "Child" : "Children"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field rm-room-field">
                  <label htmlFor="rm-room">Room</label>
                  <select id="rm-room" name="room" value={formData.room} onChange={handleChange} required>
                    {ROOMS.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
                  </select>
                </div>

                {/* Live total updates whenever the dates or selected room change. */}
                <div className="rm-summary">
                  <div className="flex justify-between">
                    <span>₹{bookingRoom.price.toLocaleString("en-IN")} × {nights} {nightsLabel}</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & fees</span>
                    <span>Included</span>
                  </div>
                   <div className="rm-total flex justify-between">
                     <span>Total</span>
                     <span>₹{total.toLocaleString("en-IN")}</span>
                   </div>
                </div>

                {error && <p className="rm-error" role="alert">{error}</p>}

                <div className="rm-form-actions">
                  <button type="button" className="rm-back" onClick={() => { setError(""); setStep("details"); }}>
                    <ArrowLeft size={16} /> Room Details
                  </button>
                  <button type="submit" className="btn btn-gold btn-sm" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Booking Request"}
                  </button>
                </div>
                <p className="rm-note flex items-center justify-center gap-2">
                  <ShieldCheck size={15} /> Free cancellation within 24 hours
                </p>
              </form>
            ) : null}

            {step === "confirmed" ? (
              <div className="rm-success text-center">
                <CircleCheck size={60} strokeWidth={1.5} />
                <h3>Reservation Request Sent</h3>
                <p>Thank you for choosing Luxorio. Our team will contact you to confirm your stay.</p>

                <ul className="rm-receipt">
                  <li className="flex justify-between gap-4"><span>Room</span><b>{bookingRoom.name}</b></li>
                  <li className="flex justify-between gap-4"><span>Check In</span><b>{prettyDate(formData.checkIn)}</b></li>
                  <li className="flex justify-between gap-4"><span>Check Out</span><b>{prettyDate(formData.checkOut)}</b></li>
                  <li className="flex justify-between gap-4"><span>Adults</span><b>{formData.adults}</b></li>
                  <li className="flex justify-between gap-4"><span>Children</span><b>{formData.children}</b></li>
                  <li className="flex justify-between gap-4">
                     <span>Total ({nights} {nightsLabel})</span>
                     <b>₹{total.toLocaleString("en-IN")}</b>
                  </li>
                </ul>

                <button type="button" className="btn btn-gold w-full justify-center" onClick={onClose}>
                  Done
                </button>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </div>,
    document.body
  );
}
