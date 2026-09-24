import { AlertTriangle, ArrowRight, BatteryCharging, Bot, Check, CircleDot, Database, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/content/articles";
import { getDictionary } from "@/content/dictionary";
import { routes, type Locale } from "@/lib/i18n";
import { ArticleCard, CtaBanner, SectionHeading } from "../blocks";

const copy = {
  en: {
    badge:"From alert to accountable decision", title:"Turn critical signals into decisions your business can defend.",
    lead:"AURA connects business facts, causal rules, executive dialogue and deterministic analysis — so Energy and Supply Chain teams decide faster, with evidence.",
    primary:"Bring us a decision", secondary:"See how AURA works", heroAlt:"Critical signals converging into one clear, accountable decision",
    proof:["A first decision in 20 days","No heavy integration to start","Every recommendation sourced"],
    pivot:"Two modes. One continuous decision context.", pivotLead:"The cockpit detects what matters. Decision mode turns it into scenarios, trade-offs and action. The AURA copilot stays with the decision throughout.",
    cockpit:"Cockpit",decision:"Decision",signal:"Priority signal",signalTitle:"Power threshold at risk — Lille site",exposure:"€1.8m exposure",horizon:"36h to impact",confidence:"82% confidence",causal:"Demand ↑ + contracted capacity ↓ + battery unavailable",
    llmTitle:"AURA Copilot",question:"What should I address first?",answer:"The Lille site. Three verified facts converge and the decision window closes in 36 hours.",action1:"Explain causes",action2:"Open decision",
    layerEyebrow:"The missing decision layer",layerTitle:"Your systems monitor. Your models optimise. AURA helps leaders decide.",layerLead:"AURA does not replace operational systems, experts or solvers. It brings their outputs into one explainable and traceable decision flow.",
    layers:[["Observe","ERP, SCADA, WMS, markets, files or expert inputs."],["Explain","A minimal ontology and causal rules reveal why the signal matters."],["Decide","The copilot frames scenarios; BORA tests constraints, vetoes and repairs."],["Act & learn","The leader validates, actions are followed and assumptions reopen when facts change."]],
    productsEyebrow:"Two products",productsTitle:"Built around the decisions that protect operations and capital.",productsLead:"A shared AURA core. A dedicated ontology, causal rulebook and decision catalogue for each operating environment.",
    energy:{name:"Energy Resilience Agent",text:"Anticipate power, continuity, storage, price and contract risks — then choose the safest economically viable response.",alerts:["Power exceedance","Outage & load shedding","Battery availability","Coverage & price exposure"],link:"Explore Energy"},
    supply:{name:"Supply Chain Resilience Agent",text:"Detect supplier, inventory, transport and capacity risks — then protect service and margin without hiding trade-offs.",alerts:["Supplier disruption","Projected stock-out","Critical shipment delay","Allocation under shortage"],link:"Explore Supply Chain"},
    sprintEyebrow:"The fastest way to start",sprintTitle:"One real decision. One working AURA model. Twenty days maximum.",sprintLead:"The Decision Sprint proves value before integration: we configure the minimum business context, test real scenarios and deliver a decision record your committee can challenge and approve.",sprintSteps:["Frame the decision","Connect the minimum facts","Test scenarios with BORA","Validate and operationalise"],sprintCta:"Start a Decision Sprint",architect:"Transformation architecture is available when the decision requires systems, data, integration and a delivery backlog. It is an implementation extension — not a prerequisite.",insights:"Recent thinking",insightsTitle:"Decision intelligence for industrial reality."
  },
  fr: {
    badge:"Du signal à la décision responsable",title:"Transformez les signaux critiques en décisions défendables.",
    lead:"AURA relie faits métier, règles causales, dialogue dirigeant et analyse déterministe — pour décider plus vite dans l’énergie et la supply chain, avec des preuves.",
    primary:"Apportez-nous une décision",secondary:"Voir comment fonctionne AURA",heroAlt:"Des signaux critiques convergent vers une décision claire et responsable",
    proof:["Une première décision en 20 jours","Aucune intégration lourde pour démarrer","Chaque recommandation est sourcée"],
    pivot:"Deux modes. Un contexte de décision continu.",pivotLead:"Le cockpit détecte ce qui compte. Le mode Décision le transforme en scénarios, arbitrages et actions. Le copilote AURA reste présent de bout en bout.",
    cockpit:"Cockpit",decision:"Décision",signal:"Signal prioritaire",signalTitle:"Seuil de puissance à risque — site de Lille",exposure:"1,8 M€ exposés",horizon:"Impact dans 36 h",confidence:"Confiance 82 %",causal:"Demande ↑ + capacité contractuelle ↓ + batterie indisponible",
    llmTitle:"Copilote AURA",question:"Que dois-je traiter en priorité ?",answer:"Le site de Lille. Trois faits vérifiés convergent et la fenêtre de décision se referme dans 36 heures.",action1:"Expliquer les causes",action2:"Ouvrir la décision",
    layerEyebrow:"La couche de décision manquante",layerTitle:"Vos systèmes surveillent. Vos modèles optimisent. AURA aide les dirigeants à décider.",layerLead:"AURA ne remplace ni les systèmes opérationnels, ni les experts, ni les solveurs. Elle réunit leurs résultats dans un parcours de décision explicable et traçable.",
    layers:[["Observer","ERP, SCADA, WMS, marchés, fichiers ou apports experts."],["Expliquer","Une ontologie minimale et des règles causales révèlent pourquoi le signal compte."],["Décider","Le copilote structure les scénarios ; BORA teste contraintes, veto et réparations."],["Agir et apprendre","Le dirigeant valide, les actions sont suivies et les hypothèses rouvertes si les faits changent."]],
    productsEyebrow:"Deux produits",productsTitle:"Conçus autour des décisions qui protègent les opérations et le capital.",productsLead:"Un noyau AURA partagé. Une ontologie, des règles causales et un catalogue de décisions propres à chaque environnement.",
    energy:{name:"Energy Resilience Agent",text:"Anticipez les risques de puissance, continuité, stockage, prix et contrats — puis choisissez la réponse la plus sûre et économiquement viable.",alerts:["Dépassement de puissance","Rupture et délestage","Disponibilité batterie","Couverture et exposition prix"],link:"Découvrir Energy"},
    supply:{name:"Supply Chain Resilience Agent",text:"Détectez les risques fournisseur, stock, transport et capacité — puis protégez le service et la marge sans masquer les arbitrages.",alerts:["Rupture fournisseur","Stock projeté sous seuil","Retard transport critique","Allocation sous pénurie"],link:"Découvrir Supply Chain"},
    sprintEyebrow:"La voie la plus rapide",sprintTitle:"Une décision réelle. Un modèle AURA opérationnel. Vingt jours maximum.",sprintLead:"Le Decision Sprint prouve la valeur avant l’intégration : nous configurons le contexte métier minimal, testons les vrais scénarios et livrons un dossier que votre comité peut challenger et approuver.",sprintSteps:["Cadrer la décision","Connecter les faits minimaux","Tester avec BORA","Valider et opérationnaliser"],sprintCta:"Lancer un Decision Sprint",architect:"L’architecture de transformation intervient lorsque la décision exige des systèmes, des données, des intégrations et un backlog. C’est une extension de mise en œuvre — pas un prérequis.",insights:"Analyses récentes",insightsTitle:"La Decision Intelligence confrontée au réel industriel."
  }
} as const;

function ProductSurface({locale}:{locale:Locale}) {
  const c=copy[locale];
  return <div className="product-surface" aria-label={c.pivot}>
    <div className="surface-main">
      <div className="surface-topbar"><div className="mode-switch"><span className="is-active">{c.cockpit}</span><span>{c.decision}</span></div><span className="live-state"><i/>Live</span></div>
      <div className="signal-heading"><span><AlertTriangle size={16}/>{c.signal}</span><small>{c.horizon}</small></div>
      <h3>{c.signalTitle}</h3>
      <div className="signal-metrics">{[c.exposure,c.horizon,c.confidence].map(x=><span key={x}>{x}</span>)}</div>
      <div className="micro-chart" aria-hidden><svg viewBox="0 0 620 122" preserveAspectRatio="none"><path className="chart-area" d="M0,104 C65,88 86,102 132,72 S222,92 260,60 S345,78 392,44 S482,68 520,30 S584,34 620,12 L620,122 L0,122 Z"/><path className="chart-line" d="M0,104 C65,88 86,102 132,72 S222,92 260,60 S345,78 392,44 S482,68 520,30 S584,34 620,12"/><line x1="0" x2="620" y1="46" y2="46"/></svg></div>
      <div className="causal-line"><CircleDot size={15}/><span>{c.causal}</span></div>
    </div>
    <aside className="copilot-rail">
      <div className="copilot-title"><span><Bot size={17}/></span>{c.llmTitle}<i/></div>
      <p className="user-message">{c.question}</p><div className="aura-message"><Sparkles size={16}/><p>{c.answer}</p></div>
      <div className="evidence-row"><span><Database size={13}/>3 facts</span><span><ShieldCheck size={13}/>sourced</span></div>
      <button type="button">{c.action1}</button><button type="button" className="copilot-primary">{c.action2}<ArrowRight size={14}/></button>
    </aside>
  </div>;
}

export function HomePage({locale}:{locale:Locale}) {
  const c=copy[locale],dict=getDictionary(locale),r=routes[locale],articles=getArticles(locale).slice(0,3);
  return <>
    <section className="aura-hero"><div className="container aura-hero-grid"><div className="aura-hero-copy">
      <p className="aura-kicker"><Sparkles size={14}/>{c.badge}</p><h1>{c.title}</h1><p>{c.lead}</p>
      <div className="hero-actions"><Link className="btn btn-primary btn-lg" href={r.contact}>{c.primary}<ArrowRight size={17}/></Link><a className="quiet-link" href="#product">{c.secondary}<ArrowRight size={15}/></a></div>
      <ul className="hero-proof">{c.proof.map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul>
    </div><div className="aura-hero-visual"><Image src="/images/candidates/aura-alert-to-decision.webp" alt={c.heroAlt} width={1280} height={960} priority sizes="(max-width: 960px) 100vw, 42vw"/></div></div></section>

    <section className="product-section" id="product"><div className="container"><SectionHeading title={c.pivot} lead={c.pivotLead} align="split"/><ProductSurface locale={locale}/></div></section>

    <section className="section decision-layer"><div className="container"><SectionHeading eyebrow={c.layerEyebrow} title={c.layerTitle} lead={c.layerLead} align="split"/>
      <ol className="layer-flow">{c.layers.map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </div></section>

    <section className="section products-section" id="products"><div className="container"><SectionHeading eyebrow={c.productsEyebrow} title={c.productsTitle} lead={c.productsLead} align="split"/>
      <div className="agent-grid">
        <article className="agent-card agent-energy"><div className="agent-card-top"><div className="agent-icon"><BatteryCharging size={22}/></div><p>01</p></div><h3>{c.energy.name}</h3><p>{c.energy.text}</p><ul>{c.energy.alerts.map(x=><li key={x}><AlertTriangle size={14}/>{x}</li>)}</ul><Link href={r.energy}>{c.energy.link}<ArrowRight size={15}/></Link></article>
        <article className="agent-card agent-supply"><div className="agent-card-top"><div className="agent-icon"><Network size={22}/></div><p>02</p></div><h3>{c.supply.name}</h3><p>{c.supply.text}</p><ul>{c.supply.alerts.map(x=><li key={x}><CircleDot size={14}/>{x}</li>)}</ul><Link href={r.supplyChain}>{c.supply.link}<ArrowRight size={15}/></Link></article>
      </div>
    </div></section>

    <section className="section sprint-section"><div className="container sprint-layout"><div><p className="eyebrow">{c.sprintEyebrow}</p><h2 className="title-lg">{c.sprintTitle}</h2><p className="lead">{c.sprintLead}</p><Link className="btn btn-primary btn-lg" href={r.contact}>{c.sprintCta}<ArrowRight size={17}/></Link></div><div className="sprint-aside"><ol>{c.sprintSteps.map((x,i)=><li key={x}><span>{i+1}</span>{x}</li>)}</ol><p><Workflow size={18}/>{c.architect}</p></div></div></section>

    <section className="section insights-clean"><div className="container"><SectionHeading eyebrow={c.insights} title={c.insightsTitle} align="split"/><div className="article-grid">{articles.map(a=><ArticleCard key={a.slug} article={a} locale={locale} dict={dict}/>)}</div></div></section><CtaBanner locale={locale} dict={dict}/>
  </>;
}
