import type { Locale } from "@/lib/i18n";

/**
 * « Ce que ça vous coûte » tiles. Only figures verified in a consulted source ([V] in
 * DOULEURS-COUTEUSES.md, 30/09/2026). When the link is a relay, the label names both
 * the relay and the original study. Each tile points to an existing Aura function.
 */
export type CostTile = {
  figure: string;
  text: string;
  source: string;
  href: string;
  answer: string;
  offer: "stress-test" | "resilience" | "architecture" | "engine";
};

export const costTiles: Record<Locale, CostTile[]> = {
  fr: [
    { figure: "3,7 ans", text: "Une disruption de un à deux mois survient en moyenne tous les 3,7 ans et fait perdre plus de 40 % d’un an de profit par décennie.", source: "McKinsey Global Institute, via SupplyChainBrain", href: "https://www.supplychainbrain.com/articles/31735-shocks-to-supply-chains-can-erase-a-years-profit-mckinsey-says", answer: "Résilience : temps de survie et temps de reprise, scénario par scénario", offer: "stress-test" },
    { figure: "+200 %", text: "de faillites fournisseurs au premier semestre 2024, avec 30 % de disruptions en plus (10 629 événements).", source: "Resilinc, via SDCExec", href: "https://www.sdcexec.com/safety-security/risk-compliance/news/22915435/resilinc-resilinc-data-reveals-supply-chain-disruptions-are-up-30", answer: "Résilience : scénario de défaillance fournisseur", offer: "stress-test" },
    { figure: "11,7 %", text: "du chiffre d’affaires perdu en ruptures, surstocks et retours évitables, soit 117 M$ pour 1 Md$ de ventes.", source: "IHL Group, via MH&L", href: "https://www.mhlnews.com/global-supply-chain/article/22051197/outofstocks-overstocks-returns-cost-retailers-175-trillion", answer: "Alertes : chaque alerte stock ouvre un arbitrage", offer: "resilience" },
    { figure: "250 M$", text: "de salaires par an pour une entreprise du Fortune 500 : 530 000 jours de cadres passés à des décisions jugées inefficaces.", source: "McKinsey", href: "https://www.mckinsey.com/business-functions/organization/our-insights/three-keys-to-faster-better-decisions", answer: "Décider : arbitrage tracé, journal des décisions", offer: "engine" },
    { figure: "+45 %", text: "de dépassement de budget pour les grands projets SI, avec 56 % de valeur livrée en moins.", source: "McKinsey et Université d’Oxford", href: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value", answer: "Notes de décision d’architecture tracées avant l’engagement du budget", offer: "architecture" },
    { figure: "70 %", text: "des transformations digitales manquent leurs objectifs.", source: "BCG", href: "https://www.bcg.com/publications/2020/increasing-odds-of-success-in-digital-transformation", answer: "Décider : scénarios de cible comparés et justifiés", offer: "architecture" },
    { figure: "4,7 M$", text: "par an en intégrations sur mesure, pour 1 061 applications en moyenne par entreprise.", source: "MuleSoft Connectivity Benchmark, via salesforcedevops.net", href: "https://salesforcedevops.net/?p=40355", answer: "Intégration : flux et interfaces cartographiés", offer: "architecture" },
  ],
  en: [
    { figure: "3.7 years", text: "A one-to-two-month disruption occurs on average every 3.7 years and wipes out more than 40% of a year’s profit per decade.", source: "McKinsey Global Institute, via SupplyChainBrain", href: "https://www.supplychainbrain.com/articles/31735-shocks-to-supply-chains-can-erase-a-years-profit-mckinsey-says", answer: "Resilience: time to survive and time to recover, scenario by scenario", offer: "stress-test" },
    { figure: "+200%", text: "supplier bankruptcies in the first half of 2024, with 30% more disruptions (10,629 events).", source: "Resilinc, via SDCExec", href: "https://www.sdcexec.com/safety-security/risk-compliance/news/22915435/resilinc-resilinc-data-reveals-supply-chain-disruptions-are-up-30", answer: "Resilience: supplier failure scenario", offer: "stress-test" },
    { figure: "11.7%", text: "of revenue lost to stock-outs, overstocks and avoidable returns: $117M per $1B of sales.", source: "IHL Group, via MH&L", href: "https://www.mhlnews.com/global-supply-chain/article/22051197/outofstocks-overstocks-returns-cost-retailers-175-trillion", answer: "Alerts: every stock alert opens a trade-off", offer: "resilience" },
    { figure: "$250M", text: "in salaries a year for a Fortune 500 company: 530,000 manager days spent on decisions judged ineffective.", source: "McKinsey", href: "https://www.mckinsey.com/business-functions/organization/our-insights/three-keys-to-faster-better-decisions", answer: "Decide: traced trade-off, decision log", offer: "engine" },
    { figure: "+45%", text: "budget overrun on large IT projects, delivering 56% less value.", source: "McKinsey and University of Oxford", href: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value", answer: "Architecture decision records, traced before the budget is committed", offer: "architecture" },
    { figure: "70%", text: "of digital transformations fall short of their objectives.", source: "BCG", href: "https://www.bcg.com/publications/2020/increasing-odds-of-success-in-digital-transformation", answer: "Decide: target scenarios compared and justified", offer: "architecture" },
    { figure: "$4.7M", text: "a year on custom integrations, for an average of 1,061 applications per company.", source: "MuleSoft Connectivity Benchmark, via salesforcedevops.net", href: "https://salesforcedevops.net/?p=40355", answer: "Integration: flows and interfaces mapped", offer: "architecture" },
  ],
};
