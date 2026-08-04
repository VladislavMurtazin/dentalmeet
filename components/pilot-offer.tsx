"use client";

import FadeIn from "@/components/fade-in";
import { Check, Clock } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

const benefits = [
  "5–10 booked meetings with practice decision-makers in 2–3 weeks",
  "$0 upfront — $150 per booked meeting (or $700 flat)",
  "Weekly transparency reports: sends, opens, replies, meetings",
  "Case-study pricing locked for 6 months if you continue",
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
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/5 blur-2xl"
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

              <ul className="mt-8 space-y-4 text-left sm:mt-12 sm:space-y-5">
                {benefits.map((benefit, i) => (
                  <FadeIn
                    key={benefit}
                    as="li"
                    delay={i * 0.08}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-700 sm:text-base lg:text-lg">
                      {benefit}
                    </span>
                  </FadeIn>
                ))}
              </ul>

              <div className="mt-10 sm:mt-14">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group w-full px-8 py-4 text-base shadow-xl shadow-accent/35 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
                >
                  Claim a pilot spot
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
