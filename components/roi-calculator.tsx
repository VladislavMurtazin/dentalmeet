"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/fade-in";
import {
  BRIEF_FORM_URL,
  MEETING_PRICE_USD,
} from "@/lib/constants";

function formatUsd(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function RoiCalculator() {
  const [clientValue, setClientValue] = useState(3000);
  const [meetings, setMeetings] = useState(5);
  const [closeRate, setCloseRate] = useState(20);
  const prefersReducedMotion = useReducedMotion();

  const results = useMemo(() => {
    const clients = meetings * (closeRate / 100);
    const monthly = clients * clientValue;
    const annual = monthly * 12;
    const monthlyCost = meetings * MEETING_PRICE_USD;
    const annualCost = monthlyCost * 12;
    const roi = annualCost > 0 ? annual / annualCost : 0;
    return { clients, monthly, annual, roi, monthlyCost };
  }, [clientValue, meetings, closeRate]);

  return (
    <section id="roi" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn as="h2" className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Calculate Your Potential Revenue
        </FadeIn>
        <FadeIn as="p" delay={0.06} className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
          Adjust the sliders to see what DentalMeet could mean for your agency.
          Assumes ${MEETING_PRICE_USD} per booked meeting.
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          <FadeIn delay={0.08} className="space-y-8">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-900">
                Average client value per year ($)
              </span>
              <input
                type="number"
                min={500}
                max={100000}
                step={100}
                value={clientValue}
                onChange={(e) =>
                  setClientValue(Math.max(0, Number(e.target.value) || 0))
                }
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base font-medium text-gray-900 outline-none ring-accent/30 transition focus:border-accent focus:bg-white focus:ring-4"
              />
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-gray-900">
                  Expected meetings per month
                </span>
                <span className="rounded-full bg-accent-light px-3 py-0.5 text-sm font-semibold text-accent">
                  {meetings}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={meetings}
                onChange={(e) => setMeetings(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>1</span>
                <span>20</span>
              </div>
            </label>

            <label className="block">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-gray-900">
                  Your close rate (%)
                </span>
                <span className="rounded-full bg-accent-light px-3 py-0.5 text-sm font-semibold text-accent">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>10%</span>
                <span>50%</span>
              </div>
            </label>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-hover p-7 text-white shadow-xl shadow-accent/25 sm:p-9">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Your projection
              </p>

              <dl className="relative mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-white/75">New clients per month</dt>
                  <AnimatedStat
                    value={results.clients.toFixed(1)}
                    reduced={!!prefersReducedMotion}
                  />
                </div>
                <div>
                  <dt className="text-sm text-white/75">Monthly revenue</dt>
                  <AnimatedStat
                    value={formatUsd(results.monthly)}
                    reduced={!!prefersReducedMotion}
                    emphasize
                  />
                </div>
                <div>
                  <dt className="text-sm text-white/75">Annual revenue</dt>
                  <AnimatedStat
                    value={formatUsd(results.annual)}
                    reduced={!!prefersReducedMotion}
                  />
                </div>
                <div className="border-t border-white/20 pt-5">
                  <dt className="text-sm text-white/75">
                    ROI vs meeting cost ({formatUsd(results.monthlyCost)}/mo)
                  </dt>
                  <AnimatedStat
                    value={`${results.roi.toFixed(1)}x`}
                    reduced={!!prefersReducedMotion}
                    emphasize
                  />
                </div>
              </dl>

              <a
                href={BRIEF_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-accent shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-light sm:text-base"
              >
                Start Earning More
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  value,
  reduced,
  emphasize = false,
}: {
  value: string;
  reduced: boolean;
  emphasize?: boolean;
}) {
  if (reduced) {
    return (
      <dd
        className={`mt-1 font-bold tracking-tight ${
          emphasize ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {value}
      </dd>
    );
  }
  return (
    <motion.dd
      key={value}
      initial={{ opacity: 0.4, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`mt-1 font-bold tracking-tight ${
        emphasize ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
      }`}
    >
      {value}
    </motion.dd>
  );
}
