// Latest blog articles — shown as a slider: swipe on touch, or use the arrows and dots.
// Clicking a card (or pressing Enter on it) opens a popup with the full article.
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import BlogModal from "./BlogModal";
import { Badge, SliderArrows, SliderDots } from "./Shared";
import { useSlider } from "../hooks/useSlider";

export default function Blog() {
  // The article whose popup is open (null = no popup)
  const [openPost, setOpenPost] = useState(null);

  // Slider behaviour (measure, arrows, dots, auto-play) comes from the shared hook.
  // Auto-play pauses while an article popup is open.
  const slider = useSlider(".blog-card", Boolean(openPost));

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog-top">
          <div className="reveal">
            <Badge label="Blgos & Article" />
            <h2 className="sec-title">Update With Our Latest Trends<br />& Insights</h2>
          </div>
          <p className="sec-text reveal">
            At our hotel, luxury is more than just a word it's a tradition. From exquisite
            design to personalized service, every detail is thoughtfully curated to create
            unforgettable experiences.
          </p>
        </div>

        <div
          className="blog-slider-wrap"
          onMouseEnter={() => slider.setHovered(true)}
          onMouseLeave={() => slider.setHovered(false)}
        >
          {/* Previous / next arrows */}
          <SliderArrows
            onPrev={() => slider.goTo(slider.activeDot - 1)}
            onNext={slider.advance}
            prevDisabled={slider.activeDot === 0}
            nextDisabled={slider.activeDot >= slider.dotCount - 1}
            prevLabel="Previous articles"
            nextLabel="Next articles"
          />

          {/* Sliding track — native touch swiping works out of the box */}
          <div
            className="blog-slider"
            ref={slider.trackRef}
            onScroll={slider.syncDot}
            role="region"
            aria-label="Blog articles slider"
            aria-roledescription="carousel"
          >
            {BLOG_POSTS.map((post) => (
              <article
                className="blog-card reveal"
                key={post.title}
                role="button" // the whole card opens the article
                tabIndex={0} // ...and it can be reached with the Tab key
                aria-label={`Read article: ${post.title}`}
                onClick={() => setOpenPost(post)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenPost(post);
                  }
                }}
              >
                <div className="blog-img">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-meta">
                  <div className="date-box">
                    <span className="day">{post.day}</span>
                    <span className="mon">{post.mon}</span>
                  </div>
                  <div>
                    <h3>{post.title}</h3>
                    <span className="blog-more">
                      Read Article <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots — one per slider position, click to jump */}
        <SliderDots count={slider.dotCount} active={slider.activeDot} onGo={slider.goTo} />
      </div>

      {/* Article popup — only shown while an article is selected */}
      {openPost && <BlogModal post={openPost} onClose={() => setOpenPost(null)} />}
    </section>
  );
}
