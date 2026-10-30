// Fades out the preloader (markup + styles live in index.html) once the page is ready.

const MIN_VISIBLE_MS = 1000; // keep it on screen at least this long, so it never just flickers
const MAX_WAIT_MS = 4000; // never block the site longer than this, even if images are slow
const FADE_MS = 600; // must match the transition in the .preloader styles

export function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;

    // performance.now() counts from when the page started loading.
    const waitMore = Math.max(0, MIN_VISIBLE_MS - performance.now());

    window.setTimeout(() => {
      preloader.classList.add("is-hidden"); // starts the fade-out
      document.documentElement.classList.remove("is-loading"); // unlocks scroll, starts the hero animation

      // Remove it from the page once the fade has finished.
      window.setTimeout(() => preloader.remove(), FADE_MS);
    }, waitMore);
  }

  // Wait for the page (including images) to finish loading...
  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("load", finish, { once: true });
  }

  // ...but don't wait forever on a slow connection.
  window.setTimeout(finish, MAX_WAIT_MS);
}
