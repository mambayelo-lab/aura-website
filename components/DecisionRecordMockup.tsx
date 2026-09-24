import { ArrowRight, CircleCheck, RotateCcw } from "lucide-react";
import type { Dictionary } from "@/content/dictionary";

/** Illustrative product screen: a Decision Record as produced by an AURA Decision Sprint. */
export function DecisionRecordMockup({ dict }: { dict: Dictionary }) {
  const m = dict.mockup;
  const scenarios = [true, true, false, true, true];

  return (
    <figure className="mockup" aria-label={`${m.title} — ${dict.common.illustrative}`}>
      <div className="mockup-window" aria-hidden>
        <div className="mockup-chrome">
          <span className="mockup-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mockup-title">
            <strong>{m.title}</strong>
            <span>{m.subtitle}</span>
          </span>
          <span className="mockup-tag">{dict.common.illustrative}</span>
        </div>

        <div className="mockup-body">
          <div className="mockup-main">
            <div className="mockup-table">
              <div className="mockup-row mockup-head">
                {m.columns.map((column, index) => (
                  <span key={column} className={index > 0 && index < 5 ? "mockup-score-col" : undefined}>
                    {column}
                  </span>
                ))}
              </div>
              {m.options.map((option) => (
                <div key={option.name} className={`mockup-row tone-${option.tone}`}>
                  <span className="mockup-option">
                    <strong>{option.name}</strong>
                    <small>{option.detail}</small>
                  </span>
                  {option.scores.map((score, index) => (
                    <span key={index} className="mockup-score-col">
                      <span className={`bar${score < 50 ? " bar-low" : ""}`}>
                        <span style={{ width: `${score}%` }} />
                      </span>
                    </span>
                  ))}
                  <span className={`chip chip-${option.tone}`}>{option.verdict}</span>
                </div>
              ))}
            </div>

            <div className="mockup-card">
              <p className="mockup-label">{m.constraintsTitle}</p>
              <ul className="mockup-constraints">
                {m.constraints.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <small className={item.hard ? "is-hard" : undefined}>{item.kind}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mockup-side">
            <div className="mockup-card mockup-reco">
              <p className="mockup-label">{m.recommendation}</p>
              <p className="mockup-reco-value">
                <CircleCheck size={20} />
                {m.recommended}
              </p>
              <div className="mockup-scenarios">
                {scenarios.map((ok, index) => (
                  <span key={index} className={ok ? "ok" : "ko"}>
                    S{index + 1}
                  </span>
                ))}
              </div>
              <p className="mockup-muted">{m.robustness}</p>
            </div>

            <div className="mockup-card">
              <p className="mockup-label">{m.backwardTitle}</p>
              <ul className="mockup-repairs">
                {m.backwardItems.map((item) => (
                  <li key={item}>
                    <ArrowRight size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mockup-card mockup-evidence">
              {m.evidence.map((item) => (
                <span key={item.label}>
                  <strong>{item.value}</strong>
                  {item.label}
                </span>
              ))}
              <span className="mockup-replay">
                <RotateCcw size={12} />
                {m.replayable}
              </span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
