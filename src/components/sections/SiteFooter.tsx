type SiteFooterProps = {
  footer: {
    text: string;
    instagram: {
      label: string;
      href: string;
    };
  };
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <span>{footer.text}</span>
      <a href={footer.instagram.href} target="_blank" rel="noreferrer">
        {footer.instagram.label}
      </a>
    </footer>
  );
}
