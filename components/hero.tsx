"use client";

import FadeIn from "@/components/fade-in";
import {
  BRIEF_FORM_URL,
  PILOT_CTA_LABEL,
  PRESENTATION_URL,
} from "@/lib/constants";

const TRUST_BADGES = [
  "Pay per meeting",
  "Verified dental practices only",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent-light/70 via-white to-white" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 -right-28 h-[380px] w-[380px] rounded-full bg-blue-200/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn onMount delay={0}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              DentalMeet
            </p>
          </FadeIn>

          <FadeIn onMount delay={0.08}>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Qualified Meetings with Dental Practices, Delivered
            </h1>
          </FadeIn>

          <FadeIn onMount delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 sm:mt-7 sm:text-lg md:text-xl">
              We connect marketing agencies with ready-to-buy dental practices.
              Pay only for meetings that actually happen.
            </p>
          </FadeIn>

          <FadeIn onMount delay={0.24}>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={BRIEF_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full px-8 py-4 text-base sm:w-auto"
              >
                {PILOT_CTA_LABEL}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href={PRESENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full px-8 py-4 text-base sm:w-auto"
              >
                See How It Works
              </a>
            </div>
          </FadeIn>

          <FadeIn onMount delay={0.32}>
            <ul className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              {TRUST_BADGES.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 sm:text-[15px]"
                >
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
