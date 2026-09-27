import { Check, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { getDictionary } from "@/content/dictionary";
import { contactEmail, type Locale } from "@/lib/i18n";
import { ContactForm } from "../ContactForm";

export function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="hero contact">
      <div className="hero-backdrop" aria-hidden />
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display display-sm">{c.title}</h1>
          <p className="lead">{c.lead}</p>

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

          <figure className="media media-wide contact-art">
            <Image
              src="/images/aura/illu-hero.webp"
              alt={
                locale === "fr"
                  ? "Les tours indigo du logo Aura sur une grille lumineuse, traversées par des signaux qui convergent vers une coche verte"
                  : "The indigo towers of the Aura logo on a glowing grid, crossed by signals converging on a green check mark"
              }
              fill
              sizes="(max-width: 980px) 100vw, 520px"
            />
          </figure>
        </div>

        <ContactForm labels={c.form} email={contactEmail} />
      </div>
    </section>
  );
}
