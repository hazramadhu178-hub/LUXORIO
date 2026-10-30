// Lightbox modal for gallery photos, with previous/next navigation.
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Each "GalleryPhoto" object has these fields:
//   src - text
//   alt - text

// Props this component receives:
//   photos - list of GalleryPhoto objects
//   index - number
//   onNavigate - function, receives index
//   onClose - function

export default function GalleryModal({ photos, index, onNavigate, onClose }) {
  const photo = photos[index];

  const goToPrevious = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goToNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  // While the lightbox is open: stop the page behind it from scrolling,
  // and let Escape / arrow keys control it.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, goToNext, goToPrevious]);

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(); // only clicks on the dark background
      }}
    >
      <figure className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={photo.alt}>
        <button type="button" className="rm-close" onClick={onClose} aria-label="Close gallery photo" autoFocus>
          <X size={20} />
        </button>

        <button type="button" className="gallery-nav gallery-nav-prev" onClick={goToPrevious} aria-label="Previous photo">
          <ChevronLeft size={26} />
        </button>

        <img className="gallery-lightbox-img" src={photo.src} alt={photo.alt} />

        <button type="button" className="gallery-nav gallery-nav-next" onClick={goToNext} aria-label="Next photo">
          <ChevronRight size={26} />
        </button>

        <figcaption className="gallery-lightbox-caption">
          <span>{photo.alt}</span>
          <b>
            {index + 1} / {photos.length}
          </b>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
