import { ConfiguredMedia } from "../common/ConfiguredMedia";
import { HighlightedText } from "../common/HighlightedText";
import type { MediaAsset } from "../../types/site";

type GallerySectionProps = {
  gallery: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    filters: readonly string[];
    items: readonly {
      category: string;
      state: string;
      media: MediaAsset;
    }[];
  };
};

export function GallerySection({ gallery }: GallerySectionProps) {
  return (
    <section className="section gallery" id={gallery.id}>
      <div className="section-head centered">
        <p className="eyebrow">{gallery.eyebrow}</p>
        <h2>
          <HighlightedText text={gallery.title} highlight={gallery.highlight} />
        </h2>
        <p>{gallery.text}</p>
      </div>
      <div className="filters" aria-label="Gallery filters">
        {gallery.filters.map((filter) => (
          <button key={filter} className={filter === "All" ? "active" : ""}>
            {filter}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {gallery.items.map((item, index) => (
          <figure key={`${item.category}-${item.state}-${index}`} className="panel">
            <ConfiguredMedia media={item.media} />
            <figcaption>
              <span>{item.state}</span>
              <strong>{item.category}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
