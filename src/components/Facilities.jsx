// Facilities strip with 7 circular icon cards.
// In dark mode this section flips to a light band (see [data-theme="dark"] .facilities in index.css)
// so its icons and headings stay easy to see.
import { Landmark, BedDouble, UtensilsCrossed, Umbrella, Users, Headset, Wifi } from "lucide-react";
import { SectionHead } from "./Shared";

const FACILITIES = [
  { label: "Basic Facilities", Icon: Landmark },
  { label: "Room Amenities", Icon: BedDouble },
  { label: "Dining Options", Icon: UtensilsCrossed },
  { label: "Leisure Facilities", Icon: Umbrella },
  { label: "Family Facilities", Icon: Users },
  { label: "Additional Services", Icon: Headset },
  { label: "Extra Facilities", Icon: Wifi },
];

export default function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="container">
        <SectionHead badge="Facilities" title="Hotel's Facilities" />

        <div className="facility-grid">
          {FACILITIES.map(({ label, Icon }) => (
            <div className="facility reveal" key={label}>
              <div className="circle"><Icon size={52} strokeWidth={1.2} /></div>
              <h3>{label}</h3>
              <span className="gold-line center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
