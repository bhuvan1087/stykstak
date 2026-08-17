import type { Metadata } from "next";
import { ButtonLink } from "../../src/components/common/ButtonLink";
import { ConfiguredMedia, MediaPanel } from "../../src/components/common/ConfiguredMedia";
import { HighlightedText } from "../../src/components/common/HighlightedText";
import { SiteFooter } from "../../src/components/sections/SiteFooter";
import { SiteHeader } from "../../src/components/sections/SiteHeader";
import { siteData } from "../../src/data/site-data";

export const metadata: Metadata = {
  title: "Drum Kit Rental | STYK STAK Drums Detailing",
  description:
    "See the complete TAMA Imperialstar rental kit with included drums, stands, pedal, and throne.",
};

export default function RentalPage() {
  const { brand, navigation, rental, footer } = siteData;

  return (
    <main>
      <SiteHeader brand={brand} navigation={navigation} />

      <section className="detail-page-hero panel">
        <p className="eyebrow">{rental.eyebrow}</p>
        <h1>
          <HighlightedText text={rental.title} highlight={rental.highlight} />
        </h1>
        <p>{rental.text}</p>
      </section>

      <section className="rental-detail-overview panel">
        <MediaPanel media={rental.media} className="rental-detail-kit" />
        <div>
          <h2>{rental.kitName}</h2>
          <p>Complete rental kit configured for gigs, studio work, and events.</p>
          <ul className="rental-summary-list">
            {rental.includedItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.quantity > 1 ? `x${item.quantity}` : "Included"}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rental-detail-grid" aria-label="Rental kit contents">
        {rental.includedItems.map((item) => (
          <article className="rental-detail-card panel" key={item.label}>
            <ConfiguredMedia media={item.media} />
            <div>
              <h2>{item.label}</h2>
              <span>{item.quantity > 1 ? `Quantity: ${item.quantity}` : "Quantity: 1"}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="booking-row panel">
        <div>
          <strong>Check availability</strong>
          <p>Confirm dates, delivery, and setup for your rental.</p>
        </div>
        <ButtonLink action={{ label: "Book on WhatsApp", href: brand.whatsappUrl, style: "primary" }} />
      </section>

      <SiteFooter footer={footer} />
    </main>
  );
}
