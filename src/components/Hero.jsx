// Full-screen hero with resort photo, headline and CTAs
import { IMG } from "../data/images";
import { Wave } from "./Shared";

// nextBg = background colour of whatever section follows, so the wave blends in.
export default function Hero({ nextBg = "var(--white)" }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src={IMG.hero} alt="Luxorio beachside resort pool with palm trees" />
      </div>

      <div className="hero-content">
        <span className="hero-badge">Welcome To Luxorio</span>
        <h1>Experience Luxury At Our Beachside Resort</h1>
        <p>
          At our hotel, luxury is more than just a word it's a tradition. From exquisite design
          to personalized service, every detail is thoughtfully curated to create unforgettable experiences.
        </p>
        <div className="hero-cta">
          <a href="#rooms" className="btn btn-gold">Discover Room</a>
          <a href="#rooms" className="btn btn-outline">Book Now</a>
        </div>
      </div>

      {/* Wave that glues hero to the next section (theme-aware) */}
      <div className="hero-wave"><Wave fill={nextBg} /></div>
    </section>
  );
}
