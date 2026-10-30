// Shared slider logic — used by the blog slider and the testimonials slider.
// The track is a horizontal scroll container (see the .blog-slider / .testi-slider
// styles in index.css). This hook measures it, keeps the dots in sync, moves it
// with the arrows/dots and auto-plays it every 6 seconds.
import { useEffect, useRef, useState } from "react";

// cardSelector: a CSS selector that matches one card inside the track (e.g. ".blog-card")
// paused:       set to true to stop auto-play (e.g. while a popup is open)
export function useSlider(cardSelector, paused = false) {
  const trackRef = useRef(null); // the scrolling track
  const stepRef = useRef(0); // width of one card + the gap between cards
  const hoveredRef = useRef(false); // pause auto-play while the mouse is over the track
  const [activeDot, setActiveDot] = useState(0); // which dot is highlighted
  const [dotCount, setDotCount] = useState(1); // how many positions the slider has

  // Measure the cards and count the slider positions (runs on load and on window resize)
  function measure() {
    const track = trackRef.current;
    const card = track?.querySelector(cardSelector);
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 30;
    stepRef.current = card.getBoundingClientRect().width + gap;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const count = Math.max(1, Math.round(maxScroll / stepRef.current) + 1);
    setDotCount(count);
    setActiveDot((dot) => Math.min(dot, count - 1)); // keep the active dot valid after a resize
  }

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll the track to a position (used by the dots)
  function goTo(position) {
    const track = trackRef.current;
    if (!track || !stepRef.current) return;
    track.scrollTo({ left: position * stepRef.current, behavior: "smooth" });
  }

  // Move one card forward, wrapping back to the start at the end
  function advance() {
    const track = trackRef.current;
    if (!track || !stepRef.current) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: stepRef.current, behavior: "smooth" });
    }
  }

  // Keep the highlighted dot in sync with the scroll position
  function syncDot() {
    const track = trackRef.current;
    if (!track || !stepRef.current) return;
    const position = Math.round(track.scrollLeft / stepRef.current);
    setActiveDot((dot) => (dot === position ? dot : Math.min(position, dotCount - 1)));
  }

  // Auto-play every 6 seconds — paused while the mouse hovers the track or `paused` is true
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      if (!hoveredRef.current) advance();
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, dotCount]);

  return {
    trackRef,
    activeDot,
    dotCount,
    goTo,
    advance,
    syncDot,
    setHovered: (value) => {
      hoveredRef.current = value;
    },
  };
}
