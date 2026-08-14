import { siteData, type MediaAsset } from "./site-data";

type Action = {
  label: string;
  href: string;
  style?: string;
};

function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }

  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span>{highlight}</span>
      {after}
    </>
  );
}

function ConfiguredMedia({
  media,
  className,
}: {
  media: MediaAsset;
  className?: string;
}) {
  if (media.type === "video") {
    return (
      <video
        className={className}
        aria-label={media.alt}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={media.src} />
      </video>
    );
  }

  return <img className={className} src={media.src} alt={media.alt ?? ""} />;
}

function MediaPanel({
  media,
  className,
}: {
  media: MediaAsset;
  className: string;
}) {
  return (
    <div className={`media-frame ${className}`}>
      <ConfiguredMedia media={media} />
    </div>
  );
}

function ButtonLink({ action }: { action: Action }) {
  return (
    <a className={`button ${action.style ?? "primary"}`} href={action.href}>
      {action.label}
    </a>
  );
}

export default function Home() {
  const {
    brand,
    navigation,
    home,
    rental,
    detailing,
    gallery,
    about,
    contact,
  } = siteData;

  return (
    <main>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label={`${brand.name} home`}>
          <span className="brand-mark">{brand.mark}</span>
          <span>
            <strong>
              <HighlightedText text={brand.name} highlight={brand.highlight} />
            </strong>
            <small>{brand.tagline}</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={brand.whatsappUrl}>
          Book Now
        </a>
        <button className="menu-button" aria-label="Open navigation">
          <span />
          <span />
          <span />
        </button>
      </header>

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

      <section className="section contact" id={contact.id}>
        <div className="contact-info">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p>{contact.text}</p>
          <a href={contact.whatsapp.href}>{contact.whatsapp.label}</a>
          <a href={contact.instagram.href}>{contact.instagram.label}</a>
          <span>{contact.location}</span>
          <small>{contact.note}</small>
        </div>
        <form className="contact-form panel">
          {contact.fields.map((field) => (
            <label key={field.name}>
              <span>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea name={field.name} rows={5} />
              ) : (
                <input type={field.type} name={field.name} />
              )}
            </label>
          ))}
          <button className="button primary" type="submit">
            {contact.submitLabel}
          </button>
        </form>
        <div className="map panel">
          <span>{contact.mapLabel}</span>
        </div>
      </section>
    </main>
  );
}
