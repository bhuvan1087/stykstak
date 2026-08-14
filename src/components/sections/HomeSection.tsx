import { ButtonLink } from "../common/ButtonLink";
import { HighlightedText } from "../common/HighlightedText";
import { MediaPanel } from "../common/ConfiguredMedia";
import type { Action, MediaAsset } from "../../types/site";

type HomeSectionProps = {
  home: {
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    media: MediaAsset;
    actions: readonly Action[];
    highlights: readonly string[];
    features: readonly {
      label: string;
      icon: string;
      text: string;
    }[];
  };
};

export function HomeSection({ home }: HomeSectionProps) {
  return (
    <>
      <section className="hero panel">
        <div className="hero-copy">
          <p className="eyebrow">{home.eyebrow}</p>
          <h1>
            <HighlightedText text={home.title} highlight={home.highlight} />
          </h1>
          <p>{home.text}</p>
          <div className="hero-points" aria-label="Service highlights">
            {home.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="actions">
            {home.actions.map((action) => (
              <ButtonLink action={action} key={action.label} />
            ))}
          </div>
        </div>
        <MediaPanel media={home.media} className="hero-image" />
      </section>

      <section className="feature-strip" aria-label="Service standards">
        {home.features.map((item) => (
          <article key={item.label}>
            <span className="line-icon">{item.icon}</span>
            <strong>{item.label}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
