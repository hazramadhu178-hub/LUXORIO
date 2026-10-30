// Room cards grid with ratings and prices.
// The "Room Details" button opens a popup with the full room info and a Book Now form.
import { useState } from "react";
import { Star } from "lucide-react";
import { ROOMS } from "../data/rooms";
import RoomModal from "./RoomModal";
import { SectionHead, Wave } from "./Shared";

export default function Rooms({ nextBg = "var(--cream)" }) {
  // The room whose popup is open (null = no popup)
  const [openRoom, setOpenRoom] = useState(null);

  return (
    <section className="rooms section" id="rooms">
      <div className="container">
        <SectionHead
          badge="Our Room & Suites"
          title="Book Your Stay And Relax In Luxury Resort"
        />

        <div className="room-grid">
          {ROOMS.map((room) => (
            <article className="room-card reveal" key={room.name}>
              <div className="room-img">
                <img src={room.img} alt={room.name} loading="lazy" />
                <span className="rating-pill">
                  <Star size={13} fill="var(--gold)" strokeWidth={0} />
                  {room.rating}
                </span>
              </div>
              <div className="room-body">
                <h3>{room.name}</h3>
                <span className="gold-line" />
                <p>
                  At our hotel, luxury is more than just a word it's a tradition.
                  From exquisite personalized service.
                </p>
                <div className="room-foot">
                  <span className="price">₹{room.price.toLocaleString("en-IN")}/Night</span>
                  <button type="button" className="btn btn-gold btn-sm" onClick={() => setOpenRoom(room)}>
                    Room Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rooms-foot reveal">
          <p>
            At our hotel, luxury is more than just a word it's a tradition. From exquisite
            design to personalized service, every detail is thoughtfully curated to create
            unforgettable experiences.
          </p>
          <a href="#contact" className="btn btn-gold btn-sm">Enquire About A Stay</a>
        </div>
      </div>

      {/* Room details popup — only shown while a room is selected */}
      {openRoom && <RoomModal room={openRoom} onClose={() => setOpenRoom(null)} />}

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
