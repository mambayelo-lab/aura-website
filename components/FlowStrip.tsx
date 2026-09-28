import type { LucideIcon } from "lucide-react";

export type FlowStep = { icon: LucideIcon; title: string; text: string };

/**
 * Small animated schema: a row of steps linked by a light pulse
 * (e.g. signal → cause → decision). Pure CSS; static under prefers-reduced-motion.
 */
export function FlowStrip({ steps, label, dark }: { steps: FlowStep[]; label: string; dark?: boolean }) {
  return (
    <ol className={`flow-strip${dark ? " flow-strip-dark" : ""}`} aria-label={label} style={{ ["--n" as string]: steps.length }}>
      {steps.map(({ icon: Icon, title, text }, i) => (
        <li key={title} style={{ ["--i" as string]: i }}>
          <span className="flow-strip-icon" aria-hidden>
            <Icon size={22} />
          </span>
          <strong>{title}</strong>
          <span className="flow-strip-text">{text}</span>
        </li>
      ))}
    </ol>
  );
}
