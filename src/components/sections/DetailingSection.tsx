import { ButtonLink } from "../common/ButtonLink";
import { HighlightedText } from "../common/HighlightedText";
import type { Action } from "../../types/site";

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
    }[];
    moreCta: Action;
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
      <div className="service-summary-list">
        {detailing.services.map((service) => (
          <article className="service-summary-card panel" key={service.title}>
            <h3>{service.title}</h3>
          </article>
        ))}
      </div>
      <div className="service-more-row">
        <ButtonLink action={detailing.moreCta} />
      </div>
    </section>
  );
}
