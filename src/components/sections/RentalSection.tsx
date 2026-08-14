import { HighlightedText } from "../common/HighlightedText";
import { MediaPanel } from "../common/ConfiguredMedia";
import type { MediaAsset } from "../../types/site";

type RentalSectionProps = {
  rental: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    kitName: string;
    media: MediaAsset;
    includedItems: readonly string[];
    gear: readonly {
      kicker: string;
      label: string;
    }[];
  };
};

export function RentalSection({ rental }: RentalSectionProps) {
  return (
    <section className="section rental" id={rental.id}>
      <div className="section-head">
        <p className="eyebrow">{rental.eyebrow}</p>
        <h2>
          <HighlightedText text={rental.title} highlight={rental.highlight} />
        </h2>
        <p>{rental.text}</p>
      </div>
      <div className="rental-card panel">
        <MediaPanel media={rental.media} className="kit-photo" />
        <div>
          <h3>{rental.kitName}</h3>
          <ul className="check-list">
            {rental.includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gear-grid">
        {rental.gear.map((gear) => (
          <article key={gear.label}>
            <span>{gear.kicker}</span>
            <strong>{gear.label}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
