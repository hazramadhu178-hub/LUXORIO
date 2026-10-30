// Hotel staff rows: name + role, description and social links.
// The photo follows the cursor only while the staff information is hovered.
import { AVATARS } from "../data/images";
import { SectionHead, FacebookIcon, InstagramIcon, XIcon } from "./Shared";

const TEAM = [
  {
    name: "Alexy Queen",
    role: "CEO & Founder",
    img: AVATARS.alexy,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    name: "Sophie Robert",
    role: "Hotel Manager",
    img: AVATARS.sophie,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    name: "Jofra Archer",
    role: "Kitchen Manager",
    img: AVATARS.jofra,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    name: "Ruth Edward",
    role: "Receptionist",
    img: AVATARS.ruth,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

// Remember where the mouse is on screen, as CSS variables (--x and --y).
// The .team-photo styles in index.css use them to place the photo at the cursor.
function followCursor(event) {
  const list = event.currentTarget;
  list.style.setProperty("--x", `${event.clientX}px`);
  list.style.setProperty("--y", `${event.clientY}px`);
}

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <SectionHead badge="Our Staff" title="Meet Our Expert Hotel Guide" />

        <div className="team-list" onMouseMove={followCursor}>
          {TEAM.map((member) => (
            <div className="team-row reveal" key={member.name}>
              {/* Social links stay outside this zone, so they never trigger the photo. */}
              <div className="team-hover-zone">
                <div className="team-person">
                  <img className="team-photo" src={member.img} alt={`Portrait of ${member.name}`} />
                  <h3>{member.name}</h3>
                  <span className="gold-line" style={{ margin: "10px 0 8px" }} />
                  <span className="role">{member.role}</span>
                </div>
                <p>{member.text}</p>
              </div>
              <div className="social-links team-social">
                <a href="#" className="social-dot" aria-label={`${member.name} on Instagram`}><InstagramIcon /></a>
                <a href="#" className="social-dot" aria-label={`${member.name} on Facebook`}><FacebookIcon /></a>
                <a href="#" className="social-dot" aria-label={`${member.name} on X`}><XIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
