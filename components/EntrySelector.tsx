"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { ProductKey } from "@/lib/i18n";

export type EntryOption = {
  key: ProductKey;
  situation: string;
  example: string;
  product: string;
  sprint: string;
  duration: string;
  outcome: string;
  data: string;
  productHref: string;
  sprintHref: string;
  appHref: string;
};

type Labels = { prompt: string; recommended: string; duration: string; outcome: string; data: string; product: string; sprint: string; app: string };

/** Guided "Which entry point?" selector, built as an accessible tab list. */
export function EntrySelector({ options, labels }: { options: EntryOption[]; labels: Labels }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = options[active];

  function onKeyDown(event: React.KeyboardEvent) {
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + options.length) % options.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="selector">
      <p className="selector-prompt" id={`${uid}-prompt`}>
        {labels.prompt}
      </p>
      <div className="selector-tabs" role="tablist" aria-labelledby={`${uid}-prompt`} onKeyDown={onKeyDown}>
        {options.map((option, index) => (
          <button
            key={option.key}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${uid}-panel`}
            tabIndex={index === active ? 0 : -1}
            className="selector-tab"
            data-product={option.key}
            onClick={() => setActive(index)}
          >
            <span className="selector-radio" aria-hidden />
            <span>
              <strong>{option.situation}</strong>
              <small>{option.example}</small>
            </span>
          </button>
        ))}
      </div>
      <div
        className="selector-panel"
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${active}`}
        data-product={current.key}
        tabIndex={0}
      >
        <p className="selector-reco">{labels.recommended}</p>
        <p className="selector-product">
          <span className="product-dot" aria-hidden />
          {current.product} <span className="selector-plus">+</span> {current.sprint}
        </p>
        <dl className="selector-facts">
          <div>
            <dt>{labels.duration}</dt>
            <dd>{current.duration}</dd>
          </div>
          <div>
            <dt>{labels.data}</dt>
            <dd>{current.data}</dd>
          </div>
          <div>
            <dt>{labels.outcome}</dt>
            <dd>{current.outcome}</dd>
          </div>
        </dl>
        <div className="selector-actions">
          <Link className="btn btn-primary" href={current.sprintHref}>
            {labels.sprint} <ArrowRight size={16} aria-hidden />
          </Link>
          <Link className="btn btn-secondary" href={current.productHref}>
            {labels.product}
          </Link>
          <a className="text-link" href={current.appHref} target="_blank" rel="noopener">
            {labels.app} <ArrowUpRight size={15} aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
