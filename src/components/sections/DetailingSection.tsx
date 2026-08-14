import { ButtonLink } from "../common/ButtonLink";
import { HighlightedText } from "../common/HighlightedText";
import { MediaPanel } from "../common/ConfiguredMedia";
import type { Action, MediaAsset } from "../../types/site";

type DetailingSectionProps = {
  detailing: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    services: readonly {
      title: string;
      text: string;
      media: MediaAsset;
    }[];
    booking: {
      title: string;
      text: string;
      cta: Action;
    };
  };
};

export function DetailingSection({ detailing }: DetailingSectionProps) {
  return (
    <section className="section detailing" id={detailing.id}>
      <div className="section-head centered">
        <p className="eyebrow">{detailing.eyebrow}</p>
        <h2>
          <HighlightedText
            text={detailing.title}
            highlight={detailing.highlight}
          />
        </h2>
        <p>{detailing.text}</p>
      </div>
      <div className="service-list">
        {detailing.services.map((service, index) => (
          <article className="service-card panel" key={service.title}>
            <MediaPanel media={service.media} className="service-thumb" />
            <span className="number">{index + 1}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="booking-row panel">
        <div>
          <strong>{detailing.booking.title}</strong>
          <p>{detailing.booking.text}</p>
        </div>
        <ButtonLink action={detailing.booking.cta} />
      </div>
    </section>
  );
}
