// Resort photo gallery linked from the primary navigation.
// Clicking a photo (or pressing Enter/Space on it) opens it in a lightbox modal.
import { useState } from "react";
import { IMG, ROOM_IMAGES, SERVICE_IMAGES } from "../data/images";
import GalleryModal from "./GalleryModal";
import { SectionHead, Wave } from "./Shared";

const GALLERY_IMAGES = [
  { src: IMG.aboutMain, alt: "Luxorio infinity pool surrounded by palms" },
  { src: ROOM_IMAGES.signature, alt: "Luxorio signature suite interior" },
  { src: SERVICE_IMAGES.spa, alt: "Relaxing Luxorio spa treatment" },
  { src: SERVICE_IMAGES.restaurant, alt: "Fine dining prepared at Luxorio" },
];

export default function Gallery({ nextBg = "var(--mint)" }) {
  // The photo currently open in the lightbox (null = closed)
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <SectionHead
          badge="Gallery"
          title="Moments Made To Remember"
          text="A glimpse into the spaces, flavors, and slow moments that make a stay at Luxorio feel effortless."
        />

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <figure
              className="gallery-photo reveal"
              key={image.alt}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${image.alt}`}
              onClick={() => setActivePhoto(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActivePhoto(index);
                }
              }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      {activePhoto !== null ? (
        <GalleryModal
          photos={GALLERY_IMAGES}
          index={activePhoto}
          onNavigate={setActivePhoto}
          onClose={() => setActivePhoto(null)}
        />
      ) : null}

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
