import { HighlightedText } from "../common/HighlightedText";

type SiteHeaderProps = {
  brand: {
    mark: string;
    name: string;
    highlight: string;
    tagline: string;
    whatsappUrl: string;
  };
  navigation: readonly {
    label: string;
    href: string;
  }[];
};

export function SiteHeader({ brand, navigation }: SiteHeaderProps) {
  return (
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
  );
}
