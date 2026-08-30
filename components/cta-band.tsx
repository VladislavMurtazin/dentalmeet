"use client";

import FadeIn from "@/components/fade-in";
import {
  BRIEF_FORM_URL,
  PILOT_CTA_LABEL,
  PRESENTATION_URL,
} from "@/lib/constants";

type CtaBandProps = {
  id?: string;
  title?: string;
  primaryLabel?: string;
  showPresentation?: boolean;
};

export default function CtaBand({
  id,
  title = "Ready to book qualified dental meetings?",
  primaryLabel = PILOT_CTA_LABEL,
  showPresentation = true,
}: CtaBandProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-y border-accent/10 bg-accent-light/60 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <FadeIn as="h2" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </FadeIn>
        <FadeIn delay={0.08} className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={BRIEF_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3.5 text-base"
          >
            {primaryLabel}
          </a>
          {showPresentation && (
            <a
              href={PRESENTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3.5 text-base"
            >
              View Presentation
            </a>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
