import type { Article } from "./articles";

export const articlesEn: Article[] = [
  {
    slug: "why-an-llm-cannot-arbitrate-a-decision",
    category: "Explainable decisions",
    title: "Why an LLM cannot arbitrate a decision",
    standfirst: "Understanding a case is not the same as deciding. A robust decision requires objectives, constraints, scenarios and replayable evidence.",
    readTime: "7 min",
    body: [
      "Large language models are excellent at reading, summarising and explaining. They can analyse an investment case, extract risks and suggest plausible options. Yet producing a convincing answer is not the same as arbitrating an enterprise decision.",
      "A decision involves objectives that cannot always compensate for one another. A highly profitable project may remain unacceptable if it compromises safety, compliance or business continuity. A useful recommendation must separate preferences from non-negotiable constraints, expose unknowns and show how the outcome changes when assumptions move.",
      "AURA uses AI to prepare the context: extracting facts, clarifying vocabulary, framing options and identifying missing information. The arbitration remains deterministic. BORA evaluates improvements and degradations, applies constraints and prevents a favourable average from hiding a critical blocker.",
      "Evidence matters as much as the recommendation. Every result retains its sources, assumptions, applied rules and validity date. Decision-makers can replay the analysis, challenge a parameter and understand why another option was not selected.",
      "The future is therefore not an agent deciding alone. It is a structured collaboration: AI understands and prepares, the engine arbitrates, experts validate assumptions and accountable people commit the decision."
    ],
    takeaways: ["Separate understanding from arbitration", "Make constraints and unknowns explicit", "Retain replayable evidence", "Keep humans accountable"]
  },
  {
    slug: "forward-backward-minimum-change",
    category: "AURA method",
    title: "Forward and Backward: decide, then find the minimum change",
    standfirst: "Comparing options is not enough. You must also know what needs to change to make a strategy acceptable.",
    readTime: "8 min",
    body: [
      "Most decision-support tools answer one question: which option appears best today? That answer is useful but often incomplete. In a transformation or investment, the preferred option may fail because of a small number of specific blockers.",
      "Forward reasoning starts from an option and propagates its effects across indicators, criteria and objectives. It shows where the option improves the situation, where it degrades it and which constraints it violates. Multiple scenarios are replayed to test the robustness of the recommendation.",
      "Backward reasoning starts from the target. It descends towards the factors preventing success, identifies bounded repairs and sends each candidate back through the Forward engine. Forward remains the judge: a repair is retained only when it removes the blocker without creating unacceptable side effects.",
      "For a battery project, Backward may show that the case becomes acceptable if CAPEX falls by 8%, grid connection occurs before a specific date or an availability guarantee is strengthened. In supply chain, it can establish the safety stock or second-source capacity required to protect service.",
      "This changes the executive conversation. Instead of a simple yes or no, AURA provides a recommended option, the reasons for its ranking and the minimum changes capable of making alternative paths viable."
    ],
    takeaways: ["Forward evaluates consequences", "Backward searches for repairs", "Forward replays and validates", "Decision-makers receive conditions for acceptability"]
  },
  {
    slug: "from-irr-to-energy-investment-decision",
    category: "AURA Energy",
    title: "From IRR to the energy investment decision",
    standfirst: "The project with the highest return is not necessarily the best investment once grid, safety, contracts and resilience are considered.",
    readTime: "8 min",
    body: [
      "NPV, IRR and DSCR are essential to energy investment analysis, but they do not decide the case. Two projects with similar returns may carry radically different exposure to grid connection, degradation, availability, counterparties or regulation.",
      "The first step is to make assumptions visible: CAPEX, OPEX, lifetime, debt, prices, revenues, cycles, efficiency and terminal value. Each assumption needs a source, unit and date and, where uncertainty is material, a range rather than artificial precision.",
      "AURA turns financial outputs into decision facts and combines them with technical and strategic objectives. A DSCR, business-continuity or connection-date constraint can eliminate an option even when its IRR is higher. Non-compensation protects decision-makers from attractive but misleading averages.",
      "Scenarios are central: low prices, base case, high volatility, congestion or connection delay. The goal is not to predict the future perfectly, but to select an option that remains acceptable across several credible futures.",
      "Backward then calculates the commercial and contractual conditions required: maximum CAPEX, revenue floor, technical guarantee, debt level or deadline. The investment becomes negotiable and manageable instead of being reduced to one rate of return."
    ],
    takeaways: ["Make assumptions traceable", "Combine finance with non-compensable risks", "Test several futures", "Negotiate bankability conditions"]
  },
  {
    slug: "batteries-data-centres-and-resilience",
    category: "AURA Energy",
    title: "Batteries, data centres and resilience: making a project bankable",
    standfirst: "Grid connection, power, cooling and flexibility form a single infrastructure decision.",
    readTime: "9 min",
    body: [
      "Locating a data centre or industrial facility can no longer be reduced to choosing a plot of land. Available power, connection lead time, cooling, water, electricity price, permitting and expansion capacity jointly determine viability.",
      "A battery can serve peak shaving, backup, arbitrage, grid services or a constrained connection. These uses interact. Aggressive cycling may accelerate degradation, while a large security reserve reduces capacity available to the market.",
      "AURA structures the decision around possible sites and architectures. Each option combines grid connection, local generation, PPA, storage, backup and cooling. Financial indicators sit alongside availability, resilience, carbon, schedule and reversibility.",
      "The engine then identifies blockers. A site may be rejected because of an excessive grid delay despite attractive land economics. A battery may become viable if a capacity contract is secured or avoided connection capacity crosses a defined threshold.",
      "The output provides a preliminary architecture, critical assumptions, studies to launch, contractual requirements and precise go/no-go conditions. It prepares the investment decision while reducing the risk of detailed engineering."
    ],
    takeaways: ["Assess the whole system", "Model competing battery uses", "Eliminate non-viable sites", "Connect the decision to preliminary architecture"]
  },
  {
    slug: "factory-energy-resilience-decision",
    category: "AURA Energy",
    title: "Factory energy resilience is a decision problem",
    standfirst: "Forecasting demand does not reveal which portfolio of actions to choose when cost, continuity and carbon conflict.",
    readTime: "7 min",
    body: [
      "A factory may have excellent energy forecasts and remain vulnerable. The strategic question is not only how much it will consume, but what must be funded to protect production when prices, the grid or contracts become unfavourable.",
      "Options are rarely exclusive: efficiency, demand response, solar, batteries, PPAs, backup generation or schedule changes. Each has different effects on cost, carbon, continuity, autonomy and operational complexity.",
      "AURA starts with critical loads, the true cost of downtime, load curves, contracted power, incidents and site constraints. Incomplete data remains visible as ranges and confidence levels.",
      "BORA compares portfolios without allowing an average saving to compensate for a critical safety or continuity degradation. Price, outage and grid-limitation scenarios reveal the robustness of each combination.",
      "The recommendation provides an implementation sequence: no-regret moves, conditional investments and options to defer. The functional architecture then specifies the measurements, responsibilities, systems and interfaces required to operate that resilience."
    ],
    takeaways: ["Start from critical loads", "Compare portfolios of levers", "Protect continuity constraints", "Sequence investments"]
  },
  {
    slug: "control-tower-to-decision-operating-system",
    category: "AURA Supply Chain",
    title: "From Control Tower to Decision Operating System",
    standfirst: "An alert creates value only when it leads to arbitration, action and learning.",
    readTime: "7 min",
    body: [
      "Control Towers promise end-to-end visibility by consolidating alerts from ERP, WMS, APS and TMS platforms. Yet when a supplier is late or a shortage emerges, the essential work is still often handled in spreadsheets, email and meetings.",
      "The problem is not the absence of a signal. It is the absence of a model linking that signal to a decision: which products are affected, which objectives are threatened, which options exist, which constraints apply and who must approve the action.",
      "AURA sits above execution systems. It turns the alert into decision context, searches for causes, builds scenarios and compares actions. Source systems retain their operational role; AURA contributes arbitration and memory.",
      "A minimal ontology connects only the useful objects: supplier, product, order, inventory, site, contract and margin. Mappings to real data are introduced progressively through paid decisions, rather than through a massive modelling programme.",
      "The Decision Operating System closes the loop: alert, option, arbitration, approval, action and observed outcome. Each decision becomes a reusable asset and can later be monitored by a specialised agent."
    ],
    takeaways: ["Move from visibility to arbitration", "Preserve execution systems", "Connect a minimal ontology", "Capitalise on decision outcomes"]
  },
  {
    slug: "dual-sourcing-stock-or-redesign",
    category: "AURA Supply Chain",
    title: "Dual sourcing, inventory or redesign: how should you arbitrate?",
    standfirst: "The answer depends on disruption cost, dependency, cash and the time required to create a credible alternative.",
    readTime: "8 min",
    body: [
      "When a critical supplier weakens, four responses arise immediately: increase inventory, qualify a second source, relocate or redesign the product. None is universally superior.",
      "Inventory protects quickly but ties up cash and may become obsolete. Dual sourcing reduces dependency but increases cost and quality complexity. Relocation may improve lead time without guaranteeing capacity. Redesign removes the dependency at its root but requires time and engineering.",
      "AURA gathers the required facts: OTIF, defect rates, bill-of-material dependencies, capacity, minimum order quantities, inventory, forecasts, country risk, financial health and qualification costs. Objectives are translated into availability, margin, cash, quality and lead time.",
      "BORA prevents a price gain from compensating for a critical disruption. Forward shows the consequences of each strategy; Backward identifies the secondary capacity, safety stock or lead-time reduction required to reach the service target.",
      "The decision becomes specific to each family: temporary inventory for one, dual sourcing for another and redesign for truly structural components. The committee receives a coherent portfolio of actions instead of a uniform policy."
    ],
    takeaways: ["Compare resilience mechanisms", "Link risk to the bill of materials", "Prevent dangerous compensation", "Decide by critical family"]
  },
  {
    slug: "from-enterprise-data-to-decision-fact",
    category: "Living context",
    title: "From enterprise data to decision facts: why a minimal ontology is enough",
    standfirst: "You do not need to model the whole enterprise. You need to connect objectives to the few facts that can change the decision.",
    readTime: "8 min",
    body: [
      "Enterprise ontology programmes often fail through excessive ambition. They attempt to represent every term, data element and application before delivering their first piece of business value.",
      "AURA reverses the approach. It starts with a decision: protect margin, select a supplier, invest in a battery or define a target architecture. That question determines the objectives, business objects and attributes that are actually required.",
      "Source data does not automatically become a fact. An amount must carry a definition, unit, period, source, owner and confidence level. Mapping then connects business language to the real information-system field without exposing decision-makers to technical complexity.",
      "The context becomes living when files, APIs and human validations update those facts. But integration remains decision-led. No specific connector is built before a paid use case justifies its cost.",
      "This discipline protects commercial speed while gradually creating a defensible asset. Data changes and systems are replaced, but objectives, decisions, constraints and evidence remain organised."
    ],
    takeaways: ["Start with the decision", "Qualify data as decision facts", "Connect progressively", "Preserve memory independently of applications"]
  }
];
