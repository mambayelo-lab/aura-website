import { Check, Mail, MapPin } from "lucide-react";
import { getDictionary } from "@/content/dictionary";
import { contactEmail, type Locale } from "@/lib/i18n";
import { ContactForm } from "../ContactForm";

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="page-hero contact">
      <div className="hero-backdrop hero-backdrop-soft" aria-hidden />
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="title-xl">{c.title}</h1>
          <p className="lead lead-lg">{c.lead}</p>

          <div className="contact-include">
            <p className="contact-subtitle">{c.includeTitle}</p>
            <ul className="check-list">
              {c.include.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-direct">
            <p className="contact-subtitle">{c.emailTitle}</p>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={16} aria-hidden /> {contactEmail}
            </a>
            <p>
              <MapPin size={16} aria-hidden /> {dict.footer.location}
            </p>
          </div>
        </div>

        <ContactForm labels={c.form} email={contactEmail} />
      </div>
    </section>
  );
}
