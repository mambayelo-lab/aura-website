import { ArrowRight, BrainCircuit, Cable, ChartNoAxesCombined, CircleCheck, Globe2, Network, Radar, ShieldCheck, Sparkles, TriangleAlert } from "lucide-react";
import Link from "next/link";
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
