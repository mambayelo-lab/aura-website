import type { Article } from "./articles";

export const articlesEn: Article[] = [
  {
    slug: "decision-intelligence-gartner-aura",
    category: "Decision Intelligence",
    title: "Decision Intelligence: what Gartner says and where Aura stands",
    standfirst: "You are about to hand decisions to AI agents. Gartner warns that without explicit, governed decisions, many of these projects will be canceled. What its publications say, and how Aura applies those principles.",
    readTime: "8 min",
    body: [
      "Gartner defines Decision Intelligence as a practical discipline that advances decision making by explicitly understanding and engineering how decisions are made, and how outcomes are evaluated, managed and improved via feedback. The key point: it is not one more technology, but a way of treating the decision itself as an asset to be modelled.",
      "The topic has left the margins. Gartner already listed Decision Intelligence among its top strategic technology trends for 2022. Its 2025 Hype Cycle for AI rates it as “transformational”, with mainstream adoption expected within two to five years. In January 2026 Gartner published its first Magic Quadrant for Decision Intelligence Platforms, which it describes as combining decision modeling, analytics and AI to augment and automate decision making.",
      "The forecasts point the same way, with a strong caveat. Gartner predicts that by 2027, 50% of business decisions will be augmented or automated by AI agents for decision intelligence, and that by 2030 half of cross-functional supply chain management solutions will use intelligent agents to execute decisions. But Gartner also predicts that over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls. And in September 2026, that only 5% of organizations will make at least 10% of their supply chain planning decisions autonomously by 2030: strategic decisions such as network design or inventory policy remain a matter of human judgement.",
      "This double message describes the problem well. Agents are coming, but they only add value when the decision is explicit: which objectives, which constraints, which data, which rules, who validates. Without that model, an agent mostly automates opacity. This is exactly where Aura stands. Aura is not evaluated by Gartner and does not claim to be; at its own scale, it applies the principles Gartner describes.",
      "Explicit decision modelling: every Aura decision carries its context, options, assumptions, the rule applied, the person who validates and the observed outcome. Evaluation that is robust to uncertainty: drawn from doctoral research, ordinal evaluation qualifies each option by its improvement potential and its degradation risk, with no invented weights and no average hiding a blocker. Causal rules and ontology: an explicit model of the company’s objects simplifies connecting to existing IT systems and gives agents a safe frame, under human validation.",
      "The three applications cover three moments of a decision. Aura Supply Chain starts from a signal in the data and turns it into a traced operational decision. Aura Decide handles a one-off strategic question, where Gartner considers human judgement essential. Aura Architect prepares the transformation: the architecture and ontology that make the company agent-ready without losing control of its decisions."
    ],
    takeaways: ["Decision Intelligence treats the decision as a modelled asset", "Gartner rates it transformational and has run a Magic Quadrant on it since 2026", "Agent autonomy will stay limited without explicit, governed decisions", "Aura applies these principles: decision model, robust evaluation, human validation"],
    references: [
      { label: "Gartner, Glossary — Decision Intelligence", href: "https://www.gartner.com/en/information-technology/glossary/decision-intelligence" },
      { label: "Gartner, Hype Cycle for Artificial Intelligence, 2025", href: "https://www.gartner.com/en/documents/6579402" },
      { label: "Gartner, Magic Quadrant for Decision Intelligence Platforms (2026)", href: "https://www.gartner.com/en/documents/7363830" },
      { label: "Gartner, Top Data & Analytics Predictions (June 17, 2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-17-gartner-announces-top-data-and-analytics-predictions" },
      { label: "Gartner, Over 40% of Agentic AI Projects Will Be Canceled by End of 2027 (June 25, 2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
      { label: "Gartner, Half of SCM Solutions Will Include Agentic AI Capabilities by 2030 (May 21, 2025)", href: "https://www.gartner.com/en/newsroom/press-releases/2025-05-21-gartner-predicts-half-of-supply-chain-management-solutions-will-include-agentic-ai-capabilities-by-2030" },
      { label: "Gartner, Only 5% of Organizations Will Make At Least 10% of Supply Chain Planning Decisions Autonomously by 2030 (Sept. 24, 2026)", href: "https://www.gartner.com/en/newsroom/press-releases/2026-09-24-gartner-predicts-only-5-percent-of-organizations-will-make-at-least-10-percent-of-supply-chain-planning-decisions-autonomously-by-2030" }
    ]
  },
  {
    slug: "why-an-llm-cannot-arbitrate-a-decision",
    category: "Explainable decisions",
    title: "Why an LLM cannot arbitrate a decision",
    standfirst: "Your team asks an LLM to recommend an option, and the answer is brilliant. The catch: understanding a case is not the same as deciding. A robust decision requires objectives, constraints, scenarios and replayable evidence.",
    readTime: "7 min",
    body: [
      "Large language models are excellent at reading, summarising and explaining. They can analyse an investment case, extract risks and suggest plausible options. Yet producing a convincing answer is not the same as arbitrating an enterprise decision.",
      "A decision involves objectives that cannot always compensate for one another. A highly profitable project may remain unacceptable if it compromises safety, compliance or business continuity. A useful recommendation must separate preferences from non-negotiable constraints, expose unknowns and show how the outcome changes when assumptions move.",
      "Aura uses AI to prepare the context: extracting facts, clarifying vocabulary, framing options and identifying missing information. The arbitration remains deterministic. Its evaluation engine weighs improvements and degradations, applies constraints and prevents a favourable average from hiding a critical blocker.",
      "Evidence matters as much as the recommendation. Every result retains its sources, assumptions, applied rules and validity date. Decision-makers can replay the analysis, challenge a parameter and understand why another option was not selected.",
      "The future is therefore not an agent deciding alone. It is a structured collaboration: AI understands and prepares, the engine arbitrates, experts validate assumptions and accountable people commit the decision."
    ],
    takeaways: ["Separate understanding from arbitration", "Make constraints and unknowns explicit", "Retain replayable evidence", "Keep humans accountable"]
  },
  {
    slug: "forward-backward-minimum-change",
    category: "Aura method",
    title: "Forward and Backward: decide, then find the minimum change",
    standfirst: "Your committee gets stuck on a “no” when the option was almost acceptable. Comparing options is not enough: you need to know what would have to change to make it acceptable.",
    readTime: "8 min",
    body: [
      "Most decision-support tools answer one question: which option appears best today? That answer is useful but often incomplete. In a transformation or investment, the preferred option may fail because of a small number of specific blockers.",
      "Forward reasoning starts from an option and propagates its effects across indicators, criteria and objectives. It shows where the option improves the situation, where it degrades it and which constraints it violates. Multiple scenarios are replayed to test the robustness of the recommendation.",
      "Backward reasoning starts from the target. It descends towards the factors preventing success, identifies bounded repairs and sends each candidate back through the Forward engine. Forward remains the judge: a repair is retained only when it removes the blocker without creating unacceptable side effects.",
      "For a battery project, Backward may show, for example, that the case becomes acceptable if CAPEX falls by a few points, grid connection occurs before a specific date or an availability guarantee is strengthened. In supply chain, it can establish the safety stock or second-source capacity required to protect service.",
      "This changes the executive conversation. Instead of a simple yes or no, Aura provides a recommended option, the reasons for its ranking and the minimum changes capable of making alternative paths viable."
    ],
    takeaways: ["Forward evaluates consequences", "Backward searches for repairs", "Forward replays and validates", "Decision-makers receive conditions for acceptability"]
  },
  {
    slug: "from-irr-to-energy-investment-decision",
    category: "Energy",
    title: "From IRR to the energy investment decision",
    standfirst: "Two projects show a similar IRR; one will be blocked by its grid connection, the other will not. The highest return is not necessarily the best investment once grid, safety, contracts and resilience come into play.",
    readTime: "8 min",
    body: [
      "NPV, IRR and DSCR are essential to energy investment analysis, but they do not decide the case. Two projects with similar returns may carry radically different exposure to grid connection, degradation, availability, counterparties or regulation.",
      "The first step is to make assumptions visible: CAPEX, OPEX, lifetime, debt, prices, revenues, cycles, efficiency and terminal value. Each assumption needs a source, unit and date and, where uncertainty is material, a range rather than artificial precision.",
      "Aura turns financial outputs into decision facts and combines them with technical and strategic objectives. A DSCR, business-continuity or connection-date constraint can eliminate an option even when its IRR is higher. Non-compensation protects decision-makers from attractive but misleading averages.",
      "Scenarios are central: low prices, base case, high volatility, congestion or connection delay. The goal is not to predict the future perfectly, but to select an option that remains acceptable across several credible futures.",
      "Backward then calculates the commercial and contractual conditions required: maximum CAPEX, revenue floor, technical guarantee, debt level or deadline. The investment becomes negotiable and manageable instead of being reduced to one rate of return."
    ],
    takeaways: ["Make assumptions traceable", "Combine finance with non-compensable risks", "Test several futures", "Negotiate bankability conditions"]
  },
  {
    slug: "batteries-data-centres-and-resilience",
    category: "Energy",
    title: "Batteries, data centres and resilience: making a project bankable",
    standfirst: "An attractive plot of land can hide a grid connection that will never arrive on time. Connection, power, cooling and flexibility form a single infrastructure decision, and should be treated as one.",
    readTime: "9 min",
    body: [
      "Locating a data centre or industrial facility can no longer be reduced to choosing a plot of land. Available power, connection lead time, cooling, water, electricity price, permitting and expansion capacity jointly determine viability.",
      "A battery can serve peak shaving, backup, arbitrage, grid services or a constrained connection. These uses interact. Aggressive cycling may accelerate degradation, while a large security reserve reduces capacity available to the market.",
      "Aura structures the decision around possible sites and architectures. Each option combines grid connection, local generation, PPA, storage, backup and cooling. Financial indicators sit alongside availability, resilience, carbon, schedule and reversibility.",
      "The engine then identifies blockers. A site may be rejected because of an excessive grid delay despite attractive land economics. A battery may become viable if a capacity contract is secured or avoided connection capacity crosses a defined threshold.",
      "The output provides a preliminary architecture, critical assumptions, studies to launch, contractual requirements and precise go/no-go conditions. It prepares the investment decision while reducing the risk of detailed engineering."
    ],
    takeaways: ["Assess the whole system", "Model competing battery uses", "Eliminate non-viable sites", "Connect the decision to preliminary architecture"]
  },
  {
    slug: "factory-energy-resilience-decision",
    category: "Energy",
    title: "Factory energy resilience is a decision problem",
    standfirst: "Your energy forecasts are excellent, yet your plant remains exposed. Forecasting demand does not tell you which portfolio of actions to fund when cost, continuity and carbon pull in different directions.",
    readTime: "7 min",
    body: [
      "A factory may have excellent energy forecasts and remain vulnerable. The strategic question is not only how much it will consume, but what must be funded to protect production when prices, the grid or contracts become unfavourable.",
      "Options are rarely exclusive: efficiency, demand response, solar, batteries, PPAs, backup generation or schedule changes. Each has different effects on cost, carbon, continuity, autonomy and operational complexity.",
      "Aura starts with critical loads, the true cost of downtime, load curves, contracted power, incidents and site constraints. Incomplete data remains visible as ranges and confidence levels.",
      "Aura’s evaluation engine compares portfolios without allowing an average saving to compensate for a critical safety or continuity degradation. Price, outage and grid-limitation scenarios reveal the robustness of each combination.",
      "The recommendation provides an implementation sequence: no-regret moves, conditional investments and options to defer. The functional architecture then specifies the measurements, responsibilities, systems and interfaces required to operate that resilience."
    ],
    takeaways: ["Start from critical loads", "Compare portfolios of levers", "Protect continuity constraints", "Sequence investments"]
  },
  {
    slug: "control-tower-to-decision-operating-system",
    category: "Supply Chain",
    title: "From alerts to decisions: the Decision Operating System",
    standfirst: "Your control tower flags the late supplier, and the rest still plays out in spreadsheets, email and meetings. An alert only creates value when it leads to a trade-off, an action and a lesson learned.",
    readTime: "7 min",
    body: [
      "Control Towers promise end-to-end visibility by consolidating alerts from ERP, WMS, APS and TMS platforms. Yet when a supplier is late or a shortage emerges, the essential work is still often handled in spreadsheets, email and meetings.",
      "The problem is not the absence of a signal. It is the absence of a model linking that signal to a decision: which products are affected, which objectives are threatened, which options exist, which constraints apply and who must approve the action.",
      "Aura sits above execution systems. It turns the alert into decision context, searches for causes, builds scenarios and compares actions. Source systems retain their operational role; Aura contributes arbitration and memory.",
      "A minimal ontology connects only the useful objects: supplier, product, order, inventory, site, contract and margin. Mappings to real data are introduced progressively, driven by real decisions, rather than through a massive modelling programme.",
      "The Decision Operating System closes the loop: alert, option, arbitration, approval, action and observed outcome. Each decision becomes a reusable asset and can later be monitored by a specialised agent."
    ],
    takeaways: ["Move from visibility to arbitration", "Preserve execution systems", "Connect a minimal ontology", "Capitalise on decision outcomes"]
  },
  {
    slug: "dual-sourcing-stock-or-redesign",
    category: "Supply Chain",
    title: "Dual sourcing, inventory or redesign: how should you arbitrate?",
    standfirst: "A critical supplier weakens and everyone pushes their own fix: inventory, a second source, reshoring, redesign. The right answer depends on disruption cost, dependency, cash and the time it takes to build a credible alternative.",
    readTime: "8 min",
    body: [
      "When a critical supplier weakens, four responses arise immediately: increase inventory, qualify a second source, relocate or redesign the product. None is universally superior.",
      "Inventory protects quickly but ties up cash and may become obsolete. Dual sourcing reduces dependency but increases cost and quality complexity. Relocation may improve lead time without guaranteeing capacity. Redesign removes the dependency at its root but requires time and engineering.",
      "Aura gathers the required facts: OTIF, defect rates, bill-of-material dependencies, capacity, minimum order quantities, inventory, forecasts, country risk, financial health and qualification costs. Objectives are translated into availability, margin, cash, quality and lead time.",
      "Aura’s evaluation engine prevents a price gain from compensating for a critical disruption. Forward shows the consequences of each strategy; Backward identifies the secondary capacity, safety stock or lead-time reduction required to reach the service target.",
      "The decision becomes specific to each family: temporary inventory for one, dual sourcing for another and redesign for truly structural components. The committee receives a coherent portfolio of actions instead of a uniform policy."
    ],
    takeaways: ["Compare resilience mechanisms", "Link risk to the bill of materials", "Prevent dangerous compensation", "Decide by critical family"]
  },
  {
    slug: "from-enterprise-data-to-decision-fact",
    category: "Living context",
    title: "From enterprise data to decision facts: why a minimal ontology is enough",
    standfirst: "Your ontology programme promises to model everything and has yet to deliver anything. You do not need to model the whole enterprise: connect your objectives to the few facts that can change the decision.",
    readTime: "8 min",
    body: [
      "Enterprise ontology programmes often fail through excessive ambition. They attempt to represent every term, data element and application before delivering their first piece of business value.",
      "Aura reverses the approach. It starts with a decision: protect margin, select a supplier, invest in a battery or define a target architecture. That question determines the objectives, business objects and attributes that are actually required.",
      "Source data does not automatically become a fact. An amount must carry a definition, unit, period, source, owner and confidence level. Mapping then connects business language to the real information-system field without exposing decision-makers to technical complexity.",
      "The context becomes living when files, APIs and human validations update those facts. But integration remains decision-led. No specific connector is built before a real use case justifies its cost.",
      "This discipline saves you time from the very first decision while gradually building a lasting asset. Data changes and systems are replaced, but objectives, decisions, constraints and evidence remain organised."
    ],
    takeaways: ["Start with the decision", "Qualify data as decision facts", "Connect progressively", "Preserve memory independently of applications"]
  },
  {
    slug: "case-maritime-strait-disruption",
    category: "Case",
    title: "Case: a strait closes, what happens to your Asia → Europe flow?",
    standfirst: "Illustrative scenario, built from published and dated facts (research as of 29 September 2026). It takes no political position and does not predict how the situation will evolve.",
    readTime: "4 min",
    body: [
      "Bab el-Mandeb, the Red Sea and the Suez Canal on one side, the Strait of Hormuz on the other: a few kilometres of sea shape a large share of trade between Asia and Europe. On 6 August 2026 Lloyd’s List Intelligence reported a 24% drop in traffic through Bab el-Mandeb, mostly tankers, then on 3 September 290 weekly transits in the northern Red Sea, 36% below normal, with the threat level still high.",
      "Costs follow. The Drewry index stood at $4,465 per 40-foot container on 3 September 2026. In the Gulf, several insurers cancelled war-risk cover from 5 March 2026 (gCaptain). Rerouting via the Cape of Good Hope adds about 5,800 nautical miles between the Far East and the Mediterranean; Xeneta measured a 63% rise in emissions on those voyages in 2024. And since 2026, the EU Emissions Trading System covers a growing share of shipping emissions (EMSA).",
      "There is no single right answer, but several levers to combine: rerouting via the Cape, sea-air or sea-rail multimodal transport, safety stock, dual sourcing or nearshoring, freight contracts with guaranteed capacity, insurance and force majeure clauses. Each one improves some indicators and degrades others: lead time, freight cost, service level, CO2, stock tied up.",
      "Aura handles this case in three ways. In Aura Decide, it is offered as an illustrated case, without data. In Aura Supply Chain, a predefined evaluation opens the Understand step with a sourced PESTEL, without waiting for an alert. And when the company’s data show late shipments on a route through Suez, the alert opens this model directly, prefilled with the observed facts.",
      "The engine does not tell you what to think about the geopolitical situation. It shows, option by option, what improves, what degrades and which blocking point keeps an option from being acceptable. Effects remain assumptions for your teams to confirm."
    ],
    takeaways: ["Illustrative scenario, sourced and dated facts", "Five families of levers to combine", "Lead time, freight, service, CO2 and stock assessed together", "Available in Decide and Supply Chain, with or without an alert"],
    references: [
      { label: "Lloyd’s List Intelligence, Red Sea Brief (06/08/2026)", href: "https://www.lloydslistintelligence.com/resources/blog/red-sea-brief-6-august-2026" },
      { label: "Lloyd’s List Intelligence, Red Sea Brief (03/09/2026)", href: "https://www.lloydslistintelligence.com/resources/blog/red-sea-brief-3-september-2026" },
      { label: "Drewry World Container Index, via DCN (03/09/2026)", href: "https://www.thedcn.com.au/news/world-container-index-3-september-2026" },
      { label: "gCaptain, marine insurers cancel war risk cover (02/03/2026)", href: "https://gcaptain.com/marine-insurers-cancel-war-risk-iran-hormuz/" },
      { label: "FreightWaves, Xeneta: diversions fuel spike in carbon emissions (26/04/2024)", href: "https://www.freightwaves.com/news/xeneta-finds-supply-chain-diversions-fuel-spike-in-carbon-emissions" },
      { label: "EMSA, extension of the EU ETS to maritime transport (consulted 29/09/2026)", href: "https://www.emsa.europa.eu/reducing-emissions/extension-ets.html" },
      { label: "MIT Sloan Executive Education, Supply Chain Strategy and Management", href: "https://executive.mit.edu/course/supply-chain-strategy-and-management/a056g00000URaN6AAL.html" }
    ]
  },
  {
    slug: "case-pandemic-covid-lessons-supply-chain",
    category: "Case",
    title: "Case: the next pandemic will not wait for your next S&OP",
    standfirst: "What COVID-19 taught supply chains: the bullwhip effect, lean flows and preparedness. Illustrative scenario, based on published sources (research dated 30 September 2026). It predicts no crisis and promises no quantified gain.",
    readTime: "5 min",
    body: [
      "In 2020 demand swung in unprecedented ways: a rush on health and food products, a collapse in discretionary goods. On the rebound, orders were doubled out of fear of shortage and inventories swelled. This is the bullwhip effect: each link amplifies the variation it receives, and it contributed to the semiconductor shortages that followed (Aerospace SCRM).",
      "The root cause is well known. Lean, low-inventory chains rely on historical forecasts that ignore major disruptions. Forecasts themselves broke down: according to MIT CTL’s Digital Supply Chain Transformation Lab, COVID-19 widened the gap between companies that feed their models with current data and combine algorithms with human judgement, and the rest.",
      "This is not a one-off. In 2020 the McKinsey Global Institute estimated that disruptions lasting a month or more occur on average every 3.7 years. Hence David Simchi-Levi’s (MIT) proposal: a stress test for critical supply chains, modelled on the banks after 2008. For each node, compare time-to-survive (TTS, how long demand can still be met if the node goes down) with time-to-recover (TTR). If TTR exceeds TTS, the node is critical.",
      "The illustrated case combines five scenarios: a 4-to-8-week regional lockdown, a bipolar demand shock followed by a rebound, 20 to 30% absenteeism in warehouses, export restrictions on components or active ingredients, and saturated freight. Each one removes a node or distorts demand. Aura shows the TTS and TTR of critical items, then compares levers: dual sourcing, targeted buffer stock, nearby sourcing, flexibility contracts, order capping to dampen the bullwhip.",
      "The Decide engine shows, option by option, what improves, what degrades and the smallest change that would flip the choice. The frameworks cited (OECD, HERA for critical medicines, MIT research) are methodological references, not partners. Effects remain assumptions for your teams to confirm."
    ],
    takeaways: ["Bullwhip effect: dampen rather than amplify", "Compare TTS and TTR node by node", "Five illustrative health-crisis scenarios", "Documented trade-offs, validated by your teams"],
    references: [
      { label: "Simchi-Levi D., Simchi-Levi E., « We Need a Stress Test for Critical Supply Chains », HBR (28/04/2020), résumé SCDigest", href: "https://www.scdigest.com/ONTARGET/20-07-08_Supply_Chain_Reslience_Tests.php" },
      { label: "MIT News, companies use MIT research to identify and respond to supply chain risks (15/06/2022)", href: "https://news.mit.edu/2022/companies-use-mit-research-identify-respond-supply-chain-risks-0615" },
      { label: "Aerospace SCRM, COVID-19 bullwhip and ripple effects in global supply chains", href: "https://scrm.aerospace.org/scrm-document/the-implications-of-covid-19-bullwhip-and-ripple-effects-in-global-supply-chains/" },
      { label: "MIT CTL Digital Supply Chain Transformation Lab, COVID-19 separates leaders from laggards in ML-driven demand forecasting (2020)", href: "https://digitalsc.mit.edu/covid-19-separates-leaders-from-laggards-in-ml-driven-demand-forecasting/" },
      { label: "McKinsey Global Institute, Risk, resilience, and rebalancing in global value chains (2020), via PreventionWeb", href: "https://www.preventionweb.net/publication/risk-resilience-and-rebalancing-global-value-chains" },
      { label: "OCDE / OECD, Keys to resilient supply chains", href: "https://search.oecd.org/trade/resilient-supply-chains/" },
      { label: "Commission européenne / European Commission, HERA, addressing market challenges (critical medicines)", href: "https://health.ec.europa.eu/health-emergency-preparedness-and-response-hera/preparedness/addressing-market-challenges_en" }
    ]
  }
];
