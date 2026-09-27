import { ArrowRight, BrainCircuit, Cable, ChartNoAxesCombined, CircleCheck, Globe2, Network, Radar, ShieldCheck, Sparkles, TriangleAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const text = {
  fr: {
    eyebrow: "INTELLIGENCE DE DÉCISION · SUPPLY CHAIN",
    title: "Voir le risque. Comprendre ses causes. Décider avant l’impact.",
    lead: "Aura relie les signaux dispersés de votre Supply Chain, explique ce qui change et prépare des décisions traçables — sans remplacer vos systèmes ni créer un nouvel entrepôt de données.",
    cta: "Voir Aura Supply Chain", secondary: "Nous parler d’une décision",
    proof: ["Première décision en 20 jours", "Connexion progressive aux SI", "Validation humaine systématique"],
    pressure: "Vos outils voient les événements. Vos équipes doivent encore reconstruire la décision.",
    pressureLead: "Une alerte isolée ne dit ni pourquoi agir, ni quelle option protège le mieux le service, la marge et la résilience.",
    products: "Un même moteur. Trois façons d’avancer.",
    productsLead: "Commencez par la peine la plus urgente. Les trois applications partagent le même langage de preuve, de causalité et de décision.",
    method: "Connecter. Comprendre. Gouverner. Expliquer. Décider.",
    methodLead: "Aura interroge les sources à la fréquence utile, applique des règles causales éditables et transforme une alerte en analyse décisionnelle préremplie.",
    realityKicker: "DU TERRAIN À L’ARBITRAGE",
    realityTitle: "Une décision sous pression, pas une démonstration d’IA.",
    realityLead: "Quand un fournisseur, un port ou une route bascule, Aura rassemble le contexte utile et prépare les options. Le décideur garde la main, avec les impacts sur le service, le stock, le coût et la marge.",
    realityCaption: "Réseau logistique européen · signal détecté · itinéraire alternatif évalué",
    final: "Apportez-nous une décision réelle.", finalLead: "Nous cadrons le cas, les données minimales et la preuve de valeur avant tout déploiement lourd.", finalCta: "Cadrer un pilote",
  },
  en: {
    eyebrow: "DECISION INTELLIGENCE · SUPPLY CHAIN",
    title: "See the risk. Understand its causes. Decide before impact.",
    lead: "Aura connects fragmented Supply Chain signals, explains what changed and prepares traceable decisions — without replacing your systems or becoming another data warehouse.",
    cta: "Explore Aura Supply Chain", secondary: "Discuss a decision",
    proof: ["First decision in 20 days", "Progressive system connection", "Human validation by design"],
    pressure: "Your systems see events. Your teams still have to rebuild the decision.",
    pressureLead: "An isolated alert does not explain why to act or which option best protects service, margin and resilience.",
    products: "One engine. Three ways to move forward.",
    productsLead: "Start with the most urgent pain. All three applications share the same language of evidence, causality and decision.",
    method: "Connect. Understand. Govern. Explain. Decide.",
    methodLead: "Aura queries source systems at the useful frequency, applies editable causal rules and turns an alert into a pre-filled decision analysis.",
    realityKicker: "FROM OPERATIONS TO ARBITRATION",
    realityTitle: "A decision under pressure, not an AI demonstration.",
    realityLead: "When a supplier, port or route shifts, Aura assembles the useful context and prepares the options. Decision-makers stay in control, with service, inventory, cost and margin impacts made explicit.",
    realityCaption: "European logistics network · signal detected · alternative route assessed",
    final: "Bring us a real decision.", finalLead: "We frame the case, minimum data and proof of value before any heavy deployment.", finalCta: "Frame a pilot",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const c = text[locale];
  const fr = locale === "fr";
  const contact = fr ? "/fr/contact" : "/contact";
  return <main className="home-modern">
    <section className="home-hero"><div className="home-hero-glow" aria-hidden /><div className="home-shell home-hero-grid">
      <div className="home-hero-copy"><p className="home-pill"><Sparkles size={14} />{c.eyebrow}</p><h1>{c.title}</h1><p className="home-lead">{c.lead}</p>
        <div className="home-actions"><a href="https://aura-decision-zen.vercel.app" className="home-btn home-btn-primary">{c.cta}<ArrowRight size={17} /></a><Link href={contact} className="home-btn home-btn-secondary">{c.secondary}</Link></div>
        <ul className="home-proof">{c.proof.map(item => <li key={item}><CircleCheck size={16} />{item}</li>)}</ul>
      </div><HeroCockpit fr={fr} />
    </div></section>

    <section className="home-pressure"><div className="home-shell"><div className="home-pressure-head"><div><p className="home-kicker">{fr ? "LA PEINE RÉELLE" : "THE REAL PAIN"}</p><h2>{c.pressure}</h2></div><p>{c.pressureLead}</p></div>
      <div className="home-pain-grid"><Pain icon={Cable} label={fr ? "Fragmentation technique" : "Technical fragmentation"} text={fr ? "ERP, WMS, TMS, fichiers et outils de planification ne racontent pas spontanément la même histoire." : "ERP, WMS, TMS, files and planning tools do not naturally tell the same story."} /><Pain icon={Globe2} label={fr ? "Chocs géopolitiques" : "Geopolitical shocks"} text={fr ? "Fournisseurs, routes et délais changent avant que les modèles et comités ne soient actualisés." : "Suppliers, routes and lead times change before models and committees catch up."} /><Pain icon={ChartNoAxesCombined} label={fr ? "Incertitude économique" : "Economic uncertainty"} text={fr ? "Coût, service, stock et risque s’opposent ; une simple alerte ne suffit pas pour arbitrer." : "Cost, service, stock and risk conflict; an alert alone cannot arbitrate."} /></div>
    </div></section>

    <section className="home-reality"><div className="home-shell">
      <div className="home-reality-grid"><div className="home-reality-copy"><p className="home-kicker">{c.realityKicker}</p><h2>{c.realityTitle}</h2><p>{c.realityLead}</p><div className="home-reality-facts"><span><strong>12 j</strong>{fr ? "avant impact" : "before impact"}</span><span><strong>3</strong>{fr ? "options comparées" : "options compared"}</span><span><strong>1</strong>{fr ? "décision traçable" : "traceable decision"}</span></div></div><figure className="home-people-visual"><Image src="/images/supply-chain.jpg" alt={fr ? "Des responsables Supply Chain analysent un risque logistique" : "Supply Chain leaders assessing a logistics risk"} fill sizes="(max-width: 980px) 100vw, 58vw" priority /><figcaption>{fr ? "Le contexte est calculé. L’arbitrage reste humain." : "Context is computed. Arbitration remains human."}</figcaption></figure></div>
      <figure className="home-network-visual"><Image src="/images/living-context.jpg" alt={fr ? "Réseau logistique et itinéraire alternatif" : "Logistics network and alternative route"} fill sizes="(max-width: 1380px) 100vw, 1380px" /><figcaption><i />{c.realityCaption}</figcaption></figure>
    </div></section>

    <section className="home-products"><div className="home-shell"><div className="home-section-intro"><p className="home-kicker">AURA</p><h2>{c.products}</h2><p>{c.productsLead}</p></div><div className="home-product-grid">
      <Product index="01" icon={Radar} title="Aura Supply Chain" text={fr ? "La control tower qui relie les sources, détecte les risques, explique leurs causes et câble les alertes vers la décision." : "The control tower that connects sources, detects risk, explains causes and wires alerts into decisions."} href="https://aura-decision-zen.vercel.app" accent="blue" label={fr ? "Découvrir" : "Explore"} />
      <Product index="02" icon={BrainCircuit} title="Aura Decide" text={fr ? "L’atelier guidé pour structurer, comparer et suivre une décision stratégique, avec ou sans données initiales." : "A guided workspace to frame, compare and track strategic decisions, with or without initial data."} href="https://aura-decider.vercel.app/cockpit/atelier" accent="violet" label={fr ? "Découvrir" : "Explore"} />
      <Product index="03" icon={Network} title="Aura Architect" text={fr ? "Le studio pour relier capacités, applications, données, flux et trajectoires de transformation." : "The studio connecting capabilities, applications, data, flows and transformation roadmaps."} href="https://aura-architect-seven.vercel.app" accent="cyan" label={fr ? "Découvrir" : "Explore"} />
    </div></div></section>

    <section className="home-method"><div className="home-shell home-method-grid"><div><p className="home-kicker">{fr ? "LE WORKFLOW" : "THE WORKFLOW"}</p><h2>{c.method}</h2><p>{c.methodLead}</p></div><ol className="home-steps">{(fr ? ["Connecter", "Comprendre", "Gouverner", "Expliquer", "Décider"] : ["Connect", "Understand", "Govern", "Explain", "Decide"]).map((label, index) => <li key={label} className={index === 4 ? "is-final" : ""}><span>0{index + 1}</span><strong>{label}</strong></li>)}</ol></div></section>

    <section className="home-final"><div className="home-shell"><div className="home-final-icon"><ShieldCheck /></div><h2>{c.final}</h2><p>{c.finalLead}</p><Link href={contact} className="home-btn home-btn-primary">{c.finalCta}<ArrowRight size={17} /></Link></div></section>
  </main>;
}

function Pain({ icon: Icon, label, text }: { icon: typeof Cable; label: string; text: string }) { return <article className="home-pain-card"><Icon /><h3>{label}</h3><p>{text}</p></article>; }

function Product({ index, icon: Icon, title, text, href, accent, label }: { index: string; icon: typeof Cable; title: string; text: string; href: string; accent: string; label: string }) { return <a href={href} className={"home-product-card accent-" + accent}><div className="home-product-top"><span className="home-product-icon"><Icon /></span><small>{index}</small></div><h3>{title}</h3><p>{text}</p><strong>{label}<ArrowRight size={16} /></strong></a>; }

function HeroCockpit({ fr }: { fr: boolean }) {
  const metrics = [["OTIF", "92,4%"], [fr ? "Stock critique" : "Critical stock", "17"], [fr ? "Risques actifs" : "Active risks", "3"]];
  return <div className="home-cockpit-wrap"><div className="home-cockpit"><div className="home-cockpit-bar"><strong><i />Aura Supply Chain</strong><span>● {fr ? "Sources actives" : "Sources live"}</span></div><div className="home-cockpit-body"><div className="home-metrics">{metrics.map(([label, value], index) => <div key={label}><small>{label}</small><strong className={index === 2 ? "danger" : ""}>{value}</strong></div>)}</div><div className="home-cockpit-grid"><div className="home-network"><strong>{fr ? "Réseau de dépendances" : "Dependency network"}</strong><div className="network-line" /><i className="node node-a" /><i className="node node-b" /><i className="node node-c" /><p>{fr ? "Fournisseur critique → composant → usine → client" : "Critical supplier → component → plant → customer"}</p></div><aside className="home-alert"><TriangleAlert /><small>{fr ? "IMPACT DANS 12 JOURS" : "IMPACT IN 12 DAYS"}</small><h3>{fr ? "Rupture fournisseur probable" : "Supplier disruption likely"}</h3><p>{fr ? "3 composants et 2 sites exposés. Trois options sont prêtes à être arbitrées." : "3 components and 2 sites exposed. Three options are ready to arbitrate."}</p><button type="button">{fr ? "Ouvrir la décision" : "Open decision"}</button></aside></div></div></div></div>;
}
