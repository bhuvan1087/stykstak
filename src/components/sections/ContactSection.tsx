type ContactSectionProps = {
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    text: string;
    whatsapp: {
      label: string;
      href: string;
    };
    instagram: {
      label: string;
      href: string;
    };
    location: string;
    note: string;
    mapLabel: string;
    fields: readonly {
      label: string;
      name: string;
      type: string;
    }[];
    submitLabel: string;
  };
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
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
  );
}
