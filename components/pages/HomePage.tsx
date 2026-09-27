import { ArrowRight, Boxes, BrainCircuit, Cable, ChartNoAxesCombined, CircleCheck, Factory, Globe2, Network, Radar, ShieldCheck, Sparkles, TriangleAlert } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const text = {
  fr: {
    eyebrow:"INTELLIGENCE DE DÉCISION · SUPPLY CHAIN",
    title:"Voir le risque. Comprendre ses causes. Décider avant l’impact.",
    lead:"Aura relie les signaux dispersés de votre Supply Chain, explique ce qui change et prépare des décisions traçables — sans remplacer vos systèmes ni créer un nouvel entrepôt de données.",
    cta:"Voir Aura Supply Chain", secondary:"Nous parler d’une décision",
    proof:["Première décision en 20 jours","Connexion progressive aux SI","Validation humaine systématique"],
    pressure:"Vos outils voient les événements. Vos équipes doivent encore reconstruire la décision.",
    pressureLead:"Une alerte isolée ne dit ni pourquoi agir, ni quelle option protège le mieux le service, la marge et la résilience.",
    products:"Un même moteur. Trois façons d’avancer.",
    productsLead:"Commencez par la peine la plus urgente. Les trois applications partagent le même langage de preuve, de causalité et de décision.",
    method:"Connecter. Comprendre. Gouverner. Expliquer. Décider.",
    methodLead:"Aura interroge les sources à la fréquence utile, applique des règles causales éditables et transforme une alerte en analyse décisionnelle préremplie.",
    final:"Apportez-nous une décision réelle.", finalLead:"Nous cadrons le cas, les données minimales et la preuve de valeur avant tout déploiement lourd.", finalCta:"Cadrer un pilote",
  },
  en: {
    eyebrow:"DECISION INTELLIGENCE · SUPPLY CHAIN",
    title:"See the risk. Understand its causes. Decide before impact.",
    lead:"Aura connects fragmented Supply Chain signals, explains what changed and prepares traceable decisions — without replacing your systems or becoming another data warehouse.",
    cta:"Explore Aura Supply Chain", secondary:"Discuss a decision",
    proof:["First decision in 20 days","Progressive system connection","Human validation by design"],
    pressure:"Your systems see events. Your teams still have to rebuild the decision.",
    pressureLead:"An isolated alert does not explain why to act or which option best protects service, margin and resilience.",
    products:"One engine. Three ways to move forward.",
    productsLead:"Start with the most urgent pain. All three applications share the same language of evidence, causality and decision.",
    method:"Connect. Understand. Govern. Explain. Decide.",
    methodLead:"Aura queries source systems at the useful frequency, applies editable causal rules and turns an alert into a pre-filled decision analysis.",
    final:"Bring us a real decision.", finalLead:"We frame the case, minimum data and proof of value before any heavy deployment.", finalCta:"Frame a pilot",
  }
};

export function HomePage({ locale }: { locale: Locale }) {
  const c=text[locale]; const fr=locale==="fr";
  const contact=fr?"/fr/contact":"/contact";
  return <main className="overflow-hidden bg-white text-[#0b153b]">
    <section className="relative border-b border-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,88,255,.16),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(15,184,210,.08),transparent_28%)]"/>
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 pb-20 pt-20 lg:grid-cols-[.92fr_1.08fr] lg:px-10 lg:pb-28 lg:pt-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold tracking-[.16em] text-indigo-700"><Sparkles size={14}/>{c.eyebrow}</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">{c.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{c.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="https://aura-decision-zen.vercel.app" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2446e8] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5">{c.cta}<ArrowRight size={17}/></a><Link href={contact} className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold">{c.secondary}</Link></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">{c.proof.map(x=><span key={x} className="flex items-center gap-2 text-sm text-slate-600"><CircleCheck size={16} className="text-cyan-600"/>{x}</span>)}</div>
        </div>
        <HeroCockpit fr={fr}/>
      </div>
    </section>

    <section className="bg-[#081334] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="text-xs font-bold tracking-[.18em] text-cyan-300">{fr?"LA PEINE RÉELLE":"THE REAL PAIN"}</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.035em] md:text-5xl">{c.pressure}</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-300">{c.pressureLead}</p></div>
      <div className="mt-14 grid gap-4 md:grid-cols-3"><Pain icon={Cable} label={fr?"Fragmentation technique":"Technical fragmentation"} text={fr?"ERP, WMS, TMS, fichiers et outils de planification ne racontent pas spontanément la même histoire.":"ERP, WMS, TMS, files and planning tools do not naturally tell the same story."}/><Pain icon={Globe2} label={fr?"Chocs géopolitiques":"Geopolitical shocks"} text={fr?"Fournisseurs, routes et délais changent avant que les modèles et comités ne soient actualisés.":"Suppliers, routes and lead times change before models and committees catch up."}/><Pain icon={ChartNoAxesCombined} label={fr?"Incertitude économique":"Economic uncertainty"} text={fr?"Coût, service, stock et risque s’opposent ; une simple alerte ne suffit pas pour arbitrer.":"Cost, service, stock and risk conflict; an alert alone cannot arbitrate."}/></div></div>
    </section>

    <section className="py-20 lg:py-28"><div className="mx-auto max-w-[1380px] px-6 lg:px-10"><div className="max-w-3xl"><p className="text-xs font-bold tracking-[.18em] text-indigo-600">AURA</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] md:text-5xl">{c.products}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{c.productsLead}</p></div><div className="mt-14 grid gap-6 lg:grid-cols-3"><Product index="01" icon={Radar} title="Aura Supply Chain" text={fr?"Une control tower qui relie les sources, détecte les risques, explique leurs causes et câble les alertes vers la décision.":"A control tower that connects sources, detects risk, explains causes and wires alerts into decisions."} href="https://aura-decision-zen.vercel.app" accent="blue"/><Product index="02" icon={BrainCircuit} title={fr?"Aura Décider":"Aura Decide"} text={fr?"Un atelier guidé pour structurer, comparer et suivre une décision stratégique, avec ou sans données initiales.":"A guided workspace to frame, compare and track strategic decisions, with or without initial data."} href="https://aura-decider.vercel.app/cockpit/atelier" accent="violet"/><Product index="03" icon={Network} title={fr?"Aura Architecturer":"Aura Architect"} text={fr?"Un studio pour relier capacités, applications, données, flux et trajectoires de transformation.":"A studio connecting capabilities, applications, data, flows and transformation roadmaps."} href="https://aura-architect.vercel.app" accent="cyan"/></div></div></section>

    <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28"><div className="mx-auto max-w-[1280px] px-6 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold tracking-[.18em] text-indigo-600">{fr?"LE WORKFLOW":"THE WORKFLOW"}</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.04em]">{c.method}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{c.methodLead}</p></div><div className="grid gap-3 sm:grid-cols-5">{[fr?["01","Connecter"]:["01","Connect"],fr?["02","Comprendre"]:["02","Understand"],fr?["03","Gouverner"]:["03","Govern"],fr?["04","Expliquer"]:["04","Explain"],fr?["05","Décider"]:["05","Decide"]].map(([n,l],i)=><div key={n} className={"rounded-2xl border p-5 "+(i===4?"border-indigo-600 bg-indigo-600 text-white":"border-slate-200 bg-white")}><span className="text-xs opacity-60">{n}</span><p className="mt-10 text-sm font-bold">{l}</p></div>)}</div></div></div></section>

    <section className="py-20 lg:py-28"><div className="mx-auto max-w-[1100px] px-6 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-700"><ShieldCheck/></div><h2 className="mt-7 text-4xl font-semibold tracking-[-.04em] md:text-5xl">{c.final}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{c.finalLead}</p><Link href={contact} className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#2446e8] px-7 py-4 text-sm font-bold text-white">{c.finalCta}<ArrowRight size={17}/></Link></div></section>
  </main>;
}

function Pain({icon:Icon,label,text}:{icon:any;label:string;text:string}){return <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><Icon className="text-cyan-300"/><h3 className="mt-8 text-lg font-bold">{label}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></div>}
function Product({index,icon:Icon,title,text,href,accent}:{index:string;icon:any;title:string;text:string;href:string;accent:string}){return <a href={href} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_15px_60px_rgba(22,36,84,.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(22,36,84,.14)]"><div className={"absolute inset-x-0 top-0 h-1 "+(accent==="blue"?"bg-blue-600":accent==="violet"?"bg-violet-600":"bg-cyan-500")}/><div className="flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 text-indigo-700"><Icon/></div><span className="text-xs font-bold text-slate-400">{index}</span></div><h3 className="mt-10 text-2xl font-bold">{title}</h3><p className="mt-4 min-h-24 text-base leading-7 text-slate-600">{text}</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-indigo-700">Découvrir <ArrowRight size={16} className="transition group-hover:translate-x-1"/></span></a>}
function HeroCockpit({fr}:{fr:boolean}){return <div className="relative flex items-center"><div className="absolute -inset-8 rounded-full bg-indigo-200/30 blur-3xl"/><div className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(27,45,110,.18)]"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><div className="flex items-center gap-2 text-sm font-bold"><div className="h-6 w-6 rounded-lg bg-indigo-600"/>Aura Supply Chain</div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">● {fr?"Sources actives":"Sources live"}</span></div><div className="grid gap-4 p-5"><div className="grid grid-cols-3 gap-3">{[["OTIF","92,4%"],[fr?"Stock critique":"Critical stock","17"],[fr?"Risques actifs":"Active risks","3"]].map(([l,v],i)=><div key={l} className="rounded-xl border border-slate-200 p-4"><p className="text-xs text-slate-500">{l}</p><p className={"mt-2 text-xl font-bold "+(i===2?"text-rose-600":"")}>{v}</p></div>)}</div><div className="grid min-h-72 gap-4 md:grid-cols-[1.25fr_.75fr]"><div className="relative overflow-hidden rounded-2xl bg-[#0b173c] p-5 text-white"><p className="text-sm font-bold">{fr?"Réseau de dépendances":"Dependency network"}</p><div className="absolute left-[18%] top-[42%] h-3 w-3 rounded-full bg-cyan-400 ring-8 ring-cyan-400/15"/><div className="absolute left-[48%] top-[62%] h-4 w-4 rounded-full bg-blue-400 ring-8 ring-blue-400/15"/><div className="absolute right-[18%] top-[32%] h-4 w-4 rounded-full bg-rose-400 ring-8 ring-rose-400/15"/><div className="absolute left-[20%] right-[20%] top-1/2 h-px rotate-[-8deg] bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400"/><div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300">{fr?"Fournisseur critique → composant → usine → client":"Critical supplier → component → plant → customer"}</div></div><div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5"><TriangleAlert className="text-rose-600"/><p className="mt-5 text-xs font-bold uppercase tracking-wider text-rose-600">{fr?"Impact dans 12 jours":"Impact in 12 days"}</p><h3 className="mt-2 text-lg font-bold">{fr?"Rupture fournisseur probable":"Supplier disruption likely"}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{fr?"3 composants et 2 sites exposés. Trois options sont prêtes à être arbitrées.":"3 components and 2 sites exposed. Three options are ready to arbitrate."}</p><button className="mt-5 w-full rounded-xl bg-indigo-600 px-3 py-3 text-sm font-bold text-white">{fr?"Ouvrir la décision":"Open decision"}</button></div></div></div></div></div>}
