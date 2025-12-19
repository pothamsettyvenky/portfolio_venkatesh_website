import React, { useState } from "react";
import "./GalleryCollage.css";
import GalleryModal from "../GalleryModal/GalleryModal";

export default function GalleryCollage({ photos = [] }) {
  const [open, setOpen] = useState(false);

  // p18, p17, p8, p10, p6, p1
  const previewIndexes = [17, 16, 7, 9, 5, 0];

  // ✅ Titles for ONLY collage tiles (same order as previewIndexes)
  const previewTitles = [
    "TEAM KYNTRA",
    "NETWORKING",
    "BEST PROJECT- STREET SIGHT",
    "DEMO OF KYNTRA",
    "BEST PROJECT - PEDAL PATCH",
    "KYNTRA - TOGETHER",
  ];

  const previewPhotos = previewIndexes
    .map((i, idx) => {
      const p = photos[i];
      if (!p) return null;
      return {
        ...p,
        collageTitle: previewTitles[idx],
      };
    })
    .filter(Boolean);

  const remainingPhotos = photos.filter((_, index) => !previewIndexes.includes(index));

  return (
    <section className="collage-section" id = "gallery">
      <div className="collage-header">
        <h1>Gallery</h1>

        {remainingPhotos.length > 0 && (
          <button className="collage-viewall" onClick={() => setOpen(true)}>
            See all
          </button>
        )}
      </div>

      <div className="collage-grid">
        {previewPhotos.map((p, i) => (
          <div key={i} className={`collage-tile tile-${i + 1}`}>
            <img src={p.src} alt={p.collageTitle || "Gallery"} />

            {/* ✅ Overlay gradient */}
            <div className="collage-overlay" />

            {/* ✅ Title on the photo */}
            <p className="collage-caption">{p.collageTitle}</p>
          </div>
        ))}
      </div>

      {open && <GalleryModal photos={remainingPhotos} onClose={() => setOpen(false)} />}
    </section>
  );
}
