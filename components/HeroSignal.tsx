import type { Locale } from "@/lib/i18n";

const sources = [
  { label: "ERP", fr: "ERP", y: 70 },
  { label: "Stock", fr: "Stocks", y: 145 },
  { label: "Freight", fr: "Transport", y: 220 },
  { label: "Suppliers", fr: "Fournis.", y: 295 },
  { label: "Files", fr: "Fichiers", y: 370 },
];

const ONTO = { x: 270, y: 140 };
const RULE = { x: 270, y: 300 };
const ALERT = { x: 420, y: 220 };
const DECISION = { x: 530, y: 220 };

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
}

/**
 * The one "futuristic" moment of the site: data signals flow through the
 * ontology and a causal rule into an alert, then a human-validated decision.
 * Pure SVG + CSS; animation is disabled under prefers-reduced-motion.
 */
export function HeroSignal({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const paths = [
    ...sources.map((s, i) => curve(96, s.y, i < 3 ? ONTO.x - 26 : RULE.x - 26, i < 3 ? ONTO.y : RULE.y)),
    curve(ONTO.x, ONTO.y + 26, RULE.x, RULE.y - 26).replace(/C.*/, `L${RULE.x} ${RULE.y - 26}`),
    curve(ONTO.x + 26, ONTO.y, ALERT.x - 22, ALERT.y),
    curve(RULE.x + 26, RULE.y, ALERT.x - 22, ALERT.y),
    `M${ALERT.x + 22} ${ALERT.y} L${DECISION.x - 30} ${DECISION.y}`,
  ];

  return (
    <figure className="signal" aria-labelledby="signal-caption">
      <svg className="signal-svg" viewBox="0 0 600 440" role="img" aria-labelledby="signal-title">
        <title id="signal-title">
          {fr
            ? "Des signaux issus des systèmes traversent l’ontologie et une règle causale, produisent une alerte puis une décision validée par un humain."
            : "Signals from systems flow through the ontology and a causal rule, produce an alert, then a human-validated decision."}
        </title>
        <defs>
          <pattern id="signal-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="signal-grid-dot" />
          </pattern>
          <radialGradient id="signal-glow">
            <stop offset="0" stopColor="var(--violet-300)" stopOpacity=".55" />
            <stop offset="1" stopColor="var(--violet-300)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="440" fill="url(#signal-grid)" />
        <circle cx={DECISION.x} cy={DECISION.y} r="90" fill="url(#signal-glow)" className="signal-halo" />

        <g className="signal-columns" aria-hidden>
          <text x="70" y="26">SIGNAL</text>
          <text x="270" y="26">{fr ? "RÈGLE" : "RULE"}</text>
          <text x="475" y="26">{fr ? "DÉCISION" : "DECISION"}</text>
        </g>

        <g aria-hidden>
          {paths.map((d, i) => (
            <g key={i}>
              <path d={d} className="signal-path" />
              <path d={d} className="signal-flow" style={{ animationDelay: `${(i % 5) * -0.6}s` }} />
            </g>
          ))}
        </g>

        <g aria-hidden>
          {sources.map((s, i) => (
            <g key={s.label} className="signal-source" style={{ animationDelay: `${i * 0.4}s` }}>
              <rect x="30" y={s.y - 15} width="66" height="30" rx="8" />
              <text x="63" y={s.y + 4}>
                {fr ? s.fr : s.label}
              </text>
            </g>
          ))}

          <g className="signal-hub">
            <circle cx={ONTO.x} cy={ONTO.y} r="26" />
            <circle cx={ONTO.x} cy={ONTO.y} r="6" className="signal-core" />
            <text x={ONTO.x} y={ONTO.y + 46}>{fr ? "Données reliées" : "Linked data"}</text>
          </g>
          <g className="signal-hub">
            <rect x={RULE.x - 34} y={RULE.y - 24} width="68" height="48" rx="12" />
            <text x={RULE.x} y={RULE.y + 5} className="signal-mono">
              if · then
            </text>
            <text x={RULE.x} y={RULE.y + 46}>{fr ? "Règle causale" : "Causal rule"}</text>
          </g>

          <g className="signal-alert">
            <circle cx={ALERT.x} cy={ALERT.y} r="22" />
            <circle cx={ALERT.x} cy={ALERT.y} r="6" className="signal-amber" />
            <text x={ALERT.x} y={ALERT.y + 42}>{fr ? "Alerte" : "Alert"}</text>
          </g>

          <g className="signal-decision">
            <circle cx={DECISION.x} cy={DECISION.y} r="30" />
            <path d={`M${DECISION.x - 11} ${DECISION.y + 1} l7 7 l15 -16`} className="signal-check" />
            <text x={DECISION.x} y={DECISION.y + 52}>{fr ? "Décision" : "Decision"}</text>
            <text x={DECISION.x} y={DECISION.y + 70} className="signal-sub">
              {fr ? "validée par un humain" : "human-validated"}
            </text>
          </g>
        </g>
      </svg>
      <figcaption id="signal-caption" className="signal-caption">
        <span className="status-dot status-ok" />
        {fr ? "Chaque alerte = une règle explicite × des données réelles" : "Every alert = an explicit rule × real data"}
      </figcaption>
    </figure>
  );
}
