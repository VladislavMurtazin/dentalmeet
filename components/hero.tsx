"use client";

import FadeIn from "@/components/fade-in";
import { PILOT_CTA_LABEL, PILOT_PAGE_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent-light/60 via-white to-white" />
        <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 h-[350px] w-[350px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn onMount delay={0}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              AI-POWERED OUTBOUND FOR THE DENTAL NICHE
            </p>
          </FadeIn>

          <FadeIn onMount delay={0.1}>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              We book meetings with dental practices. You close them.
            </h1>
          </FadeIn>

          <FadeIn onMount delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg md:text-xl md:leading-relaxed">
              An autonomous outbound engine that finds practice owners &amp;
              managers, writes hyper-personalized emails, and puts qualified
              meetings on your calendar. Built for agencies that sell to dentists.
            </p>
          </FadeIn>

          <FadeIn onMount delay={0.3}>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={PILOT_PAGE_URL}
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
                href="#how-it-works"
                className="btn-secondary w-full px-8 py-4 text-base sm:w-auto"
              >
                See how it works
              </a>
            </div>
          </FadeIn>

          <FadeIn onMount delay={0.4}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm sm:px-5">
              <svg
                className="h-4 w-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-xs font-medium text-gray-600 sm:text-sm">
                No retainers. No lock-in. Performance only.
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
