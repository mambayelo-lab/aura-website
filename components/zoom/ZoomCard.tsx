"use client";

import { ArrowRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { LocalDetail } from "@/content/products";
import type { ProductKey } from "@/lib/i18n";

export type ZoomLabels = { details: string; close: string; example: string; schema: string };

type Props = {
  detail: LocalDetail;
  labels: ZoomLabels;
  /** Product tint used by the card and its panel. */
  product?: ProductKey;
  /** Number shown on step cards ("01"). */
  index?: string;
  variant?: "default" | "step" | "compact";
  /** Extra content rendered inside the card, below the trigger (links, badges). */
  footer?: React.ReactNode;
  /** Extra content rendered at the end of the detail panel. */
  panelFooter?: React.ReactNode;
  className?: string;
};

/**
 * A card that opens an accessible detail panel (native modal dialog):
 * focus is contained in the dialog, Escape and the backdrop close it,
 * and focus returns to the card afterwards.
 */
export function ZoomCard({ detail, labels, product, index, variant = "default", footer, panelFooter, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const uid = useId();
  const titleId = `${uid}-title`;
  const descId = `${uid}-desc`;

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    document.documentElement.classList.toggle("dialog-open", open);
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove("dialog-open"), []);

  return (
    <article className={`zoom-card zoom-card-${variant}${className ? ` ${className}` : ""}`} data-product={product}>
      <button
        ref={triggerRef}
        type="button"
        className="zoom-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="zoom-card-top">
          {index && <span className="zoom-card-index">{index}</span>}
          {detail.kicker && <span className="zoom-card-kicker">{detail.kicker}</span>}
          <Maximize2 className="zoom-card-icon" size={15} aria-hidden />
        </span>
        <span className="zoom-card-title">{detail.title}</span>
        <span className="zoom-card-summary">{detail.summary}</span>
        <span className="zoom-card-more">
          {labels.details} <ArrowRight size={14} aria-hidden />
        </span>
      </button>
      {footer && <div className="zoom-card-footer">{footer}</div>}

      <dialog
        ref={dialogRef}
        className="zoom-dialog"
        data-product={product}
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {open && (
          <div className="zoom-panel">
            <div className="zoom-head">
              <div>
                {(detail.kicker || index) && (
                  <p className="zoom-kicker">
                    {index && <span>{index}</span>}
                    {detail.kicker}
                  </p>
                )}
                <h2 id={titleId}>{detail.title}</h2>
              </div>
              <button type="button" className="zoom-close" onClick={close} aria-label={labels.close} autoFocus>
                <X size={20} aria-hidden />
              </button>
            </div>
            <p id={descId} className="zoom-lead">
              {detail.summary}
            </p>

            {detail.flow && detail.flow.length > 0 && (
              <figure className="zoom-flow">
                <figcaption>{labels.schema}</figcaption>
                <ol>
                  {detail.flow.map((step, i) => (
                    <li key={step} style={{ "--i": i } as React.CSSProperties}>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </figure>
            )}

            <div className="zoom-body">
              {detail.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {detail.points && (
              <ul className="zoom-points">
                {detail.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {detail.example && (
              <div className="zoom-example">
                <p className="zoom-example-label">{labels.example}</p>
                <p>{detail.example}</p>
              </div>
            )}
            {panelFooter && <div className="zoom-panel-footer">{panelFooter}</div>}
          </div>
        )}
      </dialog>
    </article>
  );
}
