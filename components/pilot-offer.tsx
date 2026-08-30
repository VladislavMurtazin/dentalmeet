"use client";

import FadeIn from "@/components/fade-in";
import { Check, Clock } from "lucide-react";
import { BRIEF_FORM_URL, PILOT_CTA_LABEL } from "@/lib/constants";

const pricingRows = [
  { label: "Upfront", pilot: "$0", repeat: "$300 (or $1,000 flat / 7 meetings)" },
  { label: "Per meeting", pilot: "$150", repeat: "$150" },
  { label: "Cap", pilot: "$750", repeat: "—" },
  { label: "When", pilot: "Setup before launch", repeat: "After pilot" },
];

export default function PilotOffer() {
  return (
    <section id="pilot-offer" className="scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent-light via-blue-50/80 to-white p-6 sm:rounded-3xl sm:p-10 lg:p-16">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-2 shadow-sm">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-accent">
                  Only 3 spots available
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Pilot round: 3 partner spots open
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
                15–20 qualified meetings with dental practice owners in 2–3 weeks.
                Pay only for meetings that happen.
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm sm:mt-10">
                <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:px-6 sm:text-sm">
                  <span />
                  <span className="text-center">Pilot</span>
                  <span className="text-center">Repeat</span>
                </div>
                {pricingRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 border-b border-gray-100 px-4 py-3 last:border-b-0 sm:px-6 sm:py-4"
                  >
                    <span className="text-sm font-medium text-gray-900 sm:text-base">
                      {row.label}
                    </span>
                    <span className="text-center text-sm text-gray-700 sm:text-base">
                      {row.pilot}
                    </span>
                    <span className="text-center text-sm text-gray-700 sm:text-base">
                      {row.repeat}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3 text-left sm:mt-10">
                {[
                  "If we don't deliver 5 meetings, you pay nothing",
                  "Weekly transparency reports every Monday",
                  "Case-study pricing locked for 6 months if you continue",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-700 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 sm:mt-14">
                <a
                  href={BRIEF_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex w-full px-8 py-4 text-base shadow-xl shadow-accent/35 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                >
                  {PILOT_CTA_LABEL}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
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
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
