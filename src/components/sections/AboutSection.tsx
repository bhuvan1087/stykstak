import { HighlightedText } from "../common/HighlightedText";
import { MediaPanel } from "../common/ConfiguredMedia";
import type { MediaAsset } from "../../types/site";

type AboutSectionProps = {
  about: {
    id: string;
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    text: string;
    media: MediaAsset;
    values: readonly string[];
    stats: readonly {
      value: string;
      label: string;
    }[];
  };
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <>
      <section className="section about panel" id={about.id}>
        <MediaPanel media={about.media} className="about-image" />
        <div className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>
            <HighlightedText text={about.title} highlight={about.highlight} />
          </h2>
          <h3>{about.subtitle}</h3>
          <p>{about.text}</p>
          <div className="values">
            {about.values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="stats panel" aria-label="Business stats">
        {about.stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>
    </>
  );
}
