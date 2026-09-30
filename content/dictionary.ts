import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    products: string;
    sprints: string;
    founder: string;
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
    title: "AURA — Decision intelligence for supply chain resilience",
    description:
      "Decision intelligence for supply chain resilience and IT transformation: explainable, traceable decisions. AI agents prepare the trade-off, a human decides, every decision comes with proof. Express diagnostic, Aura Supply, Architecture Sprint.",
  },
  nav: {
    home: "AURA home",
    products: "Products",
    sprints: "Offers",
    founder: "Founder",
    insights: "Insights",
    contact: "Contact",
    applications: "Applications",
    cta: "Book a diagnostic",
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
    title: "The questions leaders ask before a hard decision.",
    lead: "Why alerts do not turn into decisions, how to arbitrate under uncertainty, what to demand from AI: practical answers on decision method, supply chain resilience and transformation architecture.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us what is holding you back.",
    lead: "A risk you see too late, a decision that drags on, a programme that drifts: a few lines are enough. We get back to you with a first read of the problem, the right entry point and a proposal.",
    includeTitle: "Helpful to include",
    include: [
      "The problem, and what it is costing you today",
      "Who decides, and who is involved",
      "Your deadline and what is at stake",
      "What you already know, and what you do not",
    ],
    emailTitle: "Prefer email?",
    form: {
      name: "Full name",
      email: "Work email",
      company: "Company",
      interest: "Which entry point?",
      interests: [
        "My costliest supply risks, costed: Express diagnostic",
        "Risks spotted too late, every day: Aura Supply",
        "A transformation to frame: Aura Architect, Architecture Sprint",
        "Not sure yet: let’s talk it through",
      ],
      message: "Message",
      placeholder: "The situation, what it costs you, your deadline…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent.",
      successText: "Thank you. We will get back to you shortly with a first read of your situation.",
      error: "Something went wrong. Please email us directly at",
      fallback: "Your email app has opened with your message ready to send.",
      privacy: "We only use these details to reply to you.",
      required: "Required",
    },
  },
  cta: {
    eyebrow: "Next step",
    title: "Bring us a real problem. Leave with a plan to solve it.",
    lead: "In a 45-minute call, we clarify what is at stake, choose the right entry point and set the offer: inputs, schedule, deliverable.",
    button: "Book a diagnostic",
    secondary: "See the offers",
  },
  footer: {
    tagline: "Proven decisions: see it coming, understand, decide — and prove it. Human validation, traceable reasoning, no invented data.",
    location: "Paris · France",
    rights: "All rights reserved.",
    resources: "Company",
    apps: "Applications",
    appsNote: "Each application is separate and self-contained. This website is the only place that links to them.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    home: "Back to home",
  },
};

const fr: Dictionary = {
  meta: {
    title: "AURA — Decision intelligence et résilience supply chain",
    description:
      "Decision intelligence pour la résilience supply chain et la transformation du SI : une décision explicable et traçable. Des agents IA qui préparent l’arbitrage, un humain qui décide, une preuve à chaque décision. Diagnostic express, Aura Supply, Sprint Architecture.",
  },
  nav: {
    home: "Accueil AURA",
    products: "Produits",
    sprints: "Offres",
    founder: "Fondateur",
    insights: "Perspectives",
    contact: "Contact",
    applications: "Applications",
    cta: "Réserver un diagnostic",
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
    title: "Les questions que se posent les dirigeants avant une décision difficile.",
    lead: "Pourquoi les alertes ne deviennent pas des décisions, comment arbitrer dans l’incertitude, que demander à l’IA : des réponses concrètes sur la méthode de décision, la résilience supply chain et l’architecture de transformation.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Dites-nous ce qui vous freine.",
    lead: "Un risque vu trop tard, une décision qui traîne, un programme qui dérive : quelques lignes suffisent. Nous revenons vers vous avec une première lecture du problème, le bon point d’entrée et une proposition.",
    includeTitle: "Utile à préciser",
    include: [
      "Le problème, et ce qu’il vous coûte aujourd’hui",
      "Qui décide, et qui est impliqué",
      "Votre échéance et ce qui est en jeu",
      "Ce que vous savez déjà, et ce que vous ignorez",
    ],
    emailTitle: "Vous préférez l’e-mail ?",
    form: {
      name: "Nom complet",
      email: "E-mail professionnel",
      company: "Entreprise",
      interest: "Quel point d’entrée ?",
      interests: [
        "Mes risques supply les plus coûteux, chiffrés : Diagnostic express",
        "Des risques vus trop tard, au quotidien : Aura Supply",
        "Une transformation à cadrer : Aura Architect, Sprint Architecture",
        "Je ne sais pas encore : parlons-en",
      ],
      message: "Message",
      placeholder: "La situation, ce qu’elle vous coûte, votre échéance…",
      submit: "Envoyer",
      sending: "Envoi…",
      successTitle: "Message envoyé.",
      successText: "Merci. Nous revenons vers vous rapidement avec une première lecture de votre situation.",
      error: "Une erreur est survenue. Écrivez-nous directement à",
      fallback: "Votre messagerie s’est ouverte avec votre message prêt à envoyer.",
      privacy: "Ces informations servent uniquement à vous répondre.",
      required: "Obligatoire",
    },
  },
  cta: {
    eyebrow: "Prochaine étape",
    title: "Apportez-nous un vrai problème. Repartez avec un plan pour le résoudre.",
    lead: "En 45 minutes d’échange, nous clarifions l’enjeu, choisissons le bon point d’entrée et calons l’offre : entrées, calendrier, livrable.",
    button: "Réserver un diagnostic",
    secondary: "Voir les offres",
  },
  footer: {
    tagline: "Décisions prouvées : voir venir, comprendre, décider — et le prouver. Validation humaine, raisonnement traçable, aucune donnée inventée.",
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
