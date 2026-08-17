import type { Metadata } from "next";
import { ConfiguredMedia } from "../../src/components/common/ConfiguredMedia";
import { ButtonLink } from "../../src/components/common/ButtonLink";
import { HighlightedText } from "../../src/components/common/HighlightedText";
import { SiteFooter } from "../../src/components/sections/SiteFooter";
import { SiteHeader } from "../../src/components/sections/SiteHeader";
import { siteData } from "../../src/data/site-data";

export const metadata: Metadata = {
  title: "Detailing Services | STYK STAK Drums Detailing",
  description:
    "Explore STYK STAK drum detailing services with shell cleaning, rust removal, bearing edge care, cymbal restoration, and tune-up details.",
};

export default function DetailingPage() {
  const { brand, navigation, detailing, footer } = siteData;

  return (
    <main>
      <SiteHeader brand={brand} navigation={navigation} />

      <section className="detail-page-hero panel">
        <p className="eyebrow">{detailing.eyebrow}</p>
        <h1>
          <HighlightedText
            text={detailing.title}
            highlight={detailing.highlight}
          />
        </h1>
        <p>{detailing.text}</p>
      </section>

      <section className="detail-service-grid" aria-label="Detailing services">
        {detailing.services.map((service) => (
          <article className="detail-service-card panel" key={service.title}>
            <div className="detail-service-copy">
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </div>
            <ConfiguredMedia media={service.media} />
          </article>
        ))}
      </section>

      <section className="booking-row panel">
        <div>
          <strong>{detailing.booking.title}</strong>
          <p>{detailing.booking.text}</p>
        </div>
        <ButtonLink action={detailing.booking.cta} />
      </section>

      <SiteFooter footer={footer} />
    </main>
  );
}
