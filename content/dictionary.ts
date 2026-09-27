import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    products: string;
    sprints: string;
    insights: string;
    contact: string;
    applications: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skip: string;
    main: string;
  };
  common: {
    readArticle: string;
    backToInsights: string;
    keyTakeaways: string;
    related: string;
    previous: string;
    next: string;
    minRead: string;
    openApp: string;
    details: string;
    close: string;
    example: string;
    schema: string;
    illustrative: string;
  };
  insightsPage: { eyebrow: string; title: string; lead: string };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    includeTitle: string;
    include: string[];
    emailTitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      interest: string;
      interests: string[];
      message: string;
      placeholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      error: string;
      fallback: string;
      privacy: string;
      required: string;
    };
  };
  cta: { eyebrow: string; title: string; lead: string; button: string; secondary: string };
  footer: { tagline: string; location: string; rights: string; resources: string; apps: string; appsNote: string };
  notFound: { title: string; text: string; home: string };
};

const en: Dictionary = {
  meta: {
    title: "AURA — From signal to accountable decision",
    description:
      "Three distinct applications — Aura Supply Chain, Aura Decide and Aura Architect — and one engagement sprint per product to turn signals, strategic questions and transformation programmes into traceable decisions.",
  },
  nav: {
    home: "AURA home",
    products: "Products",
    sprints: "Sprints",
    insights: "Insights",
    contact: "Contact",
    applications: "Applications",
    cta: "Frame a sprint",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
    main: "Main navigation",
  },
  common: {
    readArticle: "Read the article",
    backToInsights: "All insights",
    keyTakeaways: "Key takeaways",
    related: "Related insights",
    previous: "Previous",
    next: "Next",
    minRead: "read",
    openApp: "Open the application",
    details: "Details",
    close: "Close",
    example: "Concrete example",
    schema: "How it fits together",
    illustrative: "Illustrative scenario",
  },
  insightsPage: {
    eyebrow: "AURA Perspectives",
    title: "A different way to think about complex decisions.",
    lead: "Essays on decision method, causal reasoning, supply chain resilience and transformation architecture.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what is in front of you.",
    lead: "A signal in your data, a strategic question or a transformation programme: a few lines are enough. We come back to you with the right entry point and a sprint proposal.",
    includeTitle: "Useful to mention",
    include: [
      "What triggers the request: a signal, a question or a programme",
      "Who decides and who is involved",
      "The horizon and what is at stake",
      "What is already known — and what is not",
    ],
    emailTitle: "Prefer email?",
    form: {
      name: "Full name",
      email: "Work email",
      company: "Company",
      interest: "Which entry point?",
      interests: [
        "Aura Supply Chain — Resilience Sprint",
        "Aura Decide — Decision Sprint",
        "Aura Architect — Architecture Design Sprint",
        "Not sure yet",
      ],
      message: "Message",
      placeholder: "Context, timing, what is at stake…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent.",
      successText: "Thank you — we will get back to you shortly.",
      error: "Something went wrong. Please email us directly at",
      fallback: "Your email app has opened with your message ready to send.",
      privacy: "We only use these details to reply to you.",
      required: "Required",
    },
  },
  cta: {
    eyebrow: "Next step",
    title: "Bring a real signal, question or programme.",
    lead: "A 45-minute framing call is enough to choose the entry point, the inputs needed and the sprint schedule.",
    button: "Frame a sprint",
    secondary: "Compare the sprints",
  },
  footer: {
    tagline: "Decision intelligence & transformation architecture. Human validation, traceable reasoning, no invented data.",
    location: "Paris · France",
    rights: "All rights reserved.",
    resources: "Company",
    apps: "Applications",
    appsNote: "Each application is separate and sealed. This website is the only place that links to them.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    home: "Back to home",
  },
};

const fr: Dictionary = {
  meta: {
    title: "AURA — Du signal à la décision responsable",
    description:
      "Trois applications distinctes — Aura Supply Chain, Aura Décider et Aura Architect — et un sprint d’engagement par produit pour transformer signaux, questions stratégiques et programmes de transformation en décisions traçables.",
  },
  nav: {
    home: "Accueil AURA",
    products: "Produits",
    sprints: "Sprints",
    insights: "Perspectives",
    contact: "Contact",
    applications: "Applications",
    cta: "Cadrer un sprint",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    skip: "Aller au contenu",
    main: "Navigation principale",
  },
  common: {
    readArticle: "Lire l’article",
    backToInsights: "Toutes les perspectives",
    keyTakeaways: "À retenir",
    related: "À lire aussi",
    previous: "Précédent",
    next: "Suivant",
    minRead: "de lecture",
    openApp: "Ouvrir l’application",
    details: "Détails",
    close: "Fermer",
    example: "Exemple concret",
    schema: "Comment ça s’articule",
    illustrative: "Scénario d’illustration",
  },
  insightsPage: {
    eyebrow: "AURA Perspectives",
    title: "Penser les décisions complexes autrement.",
    lead: "Des analyses sur la méthode de décision, le raisonnement causal, la résilience Supply Chain et l’architecture de transformation.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Dites-nous ce qui est devant vous.",
    lead: "Un signal dans vos données, une question stratégique ou un programme de transformation : quelques lignes suffisent. Nous revenons avec le bon point d’entrée et une proposition de sprint.",
    includeTitle: "Utile à préciser",
    include: [
      "Ce qui déclenche la demande : un signal, une question ou un programme",
      "Qui décide et qui est impliqué",
      "L’horizon et ce qui est en jeu",
      "Ce qui est déjà connu — et ce qui ne l’est pas",
    ],
    emailTitle: "Vous préférez l’e-mail ?",
    form: {
      name: "Nom complet",
      email: "E-mail professionnel",
      company: "Entreprise",
      interest: "Quel point d’entrée ?",
      interests: [
        "Aura Supply Chain — Sprint Résilience",
        "Aura Décider — Decision Sprint",
        "Aura Architect — Design Sprint Architecture",
        "Je ne sais pas encore",
      ],
      message: "Message",
      placeholder: "Contexte, calendrier, ce qui est en jeu…",
      submit: "Envoyer",
      sending: "Envoi…",
      successTitle: "Message envoyé.",
      successText: "Merci — nous revenons vers vous rapidement.",
      error: "Une erreur est survenue. Écrivez-nous directement à",
      fallback: "Votre messagerie s’est ouverte avec votre message prêt à envoyer.",
      privacy: "Ces informations servent uniquement à vous répondre.",
      required: "Obligatoire",
    },
  },
  cta: {
    eyebrow: "Prochaine étape",
    title: "Apportez un vrai signal, une vraie question ou un vrai programme.",
    lead: "Un appel de cadrage de 45 minutes suffit pour choisir le point d’entrée, les entrées nécessaires et le calendrier du sprint.",
    button: "Cadrer un sprint",
    secondary: "Comparer les sprints",
  },
  footer: {
    tagline: "Intelligence décisionnelle & architecture de transformation. Validation humaine, raisonnement traçable, aucune donnée inventée.",
    location: "Paris · France",
    rights: "Tous droits réservés.",
    resources: "Entreprise",
    apps: "Applications",
    appsNote: "Chaque application est distincte et étanche. Ce site est le seul endroit qui y renvoie.",
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n’existe pas ou a été déplacée.",
    home: "Retour à l’accueil",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
