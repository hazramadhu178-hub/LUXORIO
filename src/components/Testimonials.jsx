// Guest testimonials — shown as a slider: swipe on touch, or use the arrows and dots.
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";
import { SectionHead, Wave, SliderArrows, SliderDots } from "./Shared";
import { useSlider } from "../hooks/useSlider";

export default function Testimonials({ nextBg = "var(--mint)" }) {
  // Slider behaviour (measure, arrows, dots, auto-play) comes from the shared hook
  const slider = useSlider(".testi-card");

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <SectionHead badge="Testimonials" title="Hear From Our Satisfied Customers" />

        <div
          className="testi-slider-wrap"
          onMouseEnter={() => slider.setHovered(true)}
          onMouseLeave={() => slider.setHovered(false)}
        >
          {/* Previous / next arrows */}
          <SliderArrows
            onPrev={() => slider.goTo(slider.activeDot - 1)}
            onNext={slider.advance}
            prevDisabled={slider.activeDot === 0}
            nextDisabled={slider.activeDot >= slider.dotCount - 1}
            prevLabel="Previous testimonials"
            nextLabel="Next testimonials"
          />

          {/* Sliding track — native touch swiping works out of the box */}
          <div
            className="testi-slider"
            ref={slider.trackRef}
            onScroll={slider.syncDot}
            role="region"
            aria-label="Testimonials slider"
            aria-roledescription="carousel"
          >
            {TESTIMONIALS.map((item) => (
              <article className="testi-card reveal" key={item.name}>
                <p>{item.text}</p>
                <div className="testi-person">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div>
                    <b>{item.name}</b>
                    <small>{item.role}</small>
                  </div>
                  <span className="score"><Star size={12} fill="var(--gold)" strokeWidth={0} /> {item.score}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots — one per slider position, click to jump */}
        <SliderDots count={slider.dotCount} active={slider.activeDot} onGo={slider.goTo} />
      </div>

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
