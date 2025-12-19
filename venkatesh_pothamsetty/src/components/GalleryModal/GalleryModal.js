import React, { useEffect } from "react";
import "./GalleryModal.css";

export default function GalleryModal({ photos = [], onClose }) {
  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="gallery-modal-backdrop" role="dialog" aria-modal="true">
      <div className="gallery-modal">
        <div className="gallery-modal-header">
          <h2>All Photos</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="gallery-modal-grid">
          {photos.map((p, i) => (
            <figure key={i} className="gallery-item">
              <img src={p.src} alt={p.alt || `Photo ${i + 1}`} loading="lazy" />
              <figcaption>{p.alt || `Photo ${i + 1}`}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
