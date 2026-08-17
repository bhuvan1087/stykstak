import { HighlightedText } from "../common/HighlightedText";
import { ButtonLink } from "../common/ButtonLink";
import { MediaPanel } from "../common/ConfiguredMedia";
import type { Action, MediaAsset } from "../../types/site";

type RentalSectionProps = {
  rental: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    kitName: string;
    media: MediaAsset;
    includedItems: readonly {
      label: string;
      quantity: number;
      media: MediaAsset;
    }[];
    moreCta: Action;
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
          <ul className="rental-summary-list">
            {rental.includedItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.quantity > 1 ? `x${item.quantity}` : "Included"}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-more-row">
        <ButtonLink action={rental.moreCta} />
      </div>
    </section>
  );
}
