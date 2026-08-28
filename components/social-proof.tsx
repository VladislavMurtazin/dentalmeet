"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/fade-in";
import type { CaseStudy } from "@/lib/case-studies";

interface SocialProofProps {
  headline: string;
  subheadline: string;
  highlights: CaseStudy[];
}

export default function SocialProof({
  headline,
  subheadline,
  highlights,
}: SocialProofProps) {
  const [active, setActive] = useState(0);
  const items =
    highlights.length > 0
      ? highlights
      : [
          {
            id: "fallback-1",
            industry: "Marketing Agency",
            location: "California",
            key_metric: "12 meetings booked",
            quote: null,
            prose:
              "A marketing agency in California booked 12 qualified dental practice meetings in 30 days.",
          },
          {
            id: "fallback-2",
            industry: "Marketing Agency",
            location: "Texas",
            key_metric: "10 meetings booked",
            quote: null,
            prose:
              "A Texas-based agency filled their calendar with owner-level dental meetings using DentalMeet.",
          },
        ];

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[active];

  return (
    <section className="border-y border-gray-100 bg-gray-50/80 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {headline}
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg">{subheadline}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {current.industry} · {current.location}
            </p>
            <p className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              {current.key_metric || `${current.meetings_booked ?? "—"} meetings booked`}
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              {current.quote ? `"${current.quote}"` : current.prose}
            </p>
            {items.length > 1 && (
              <div className="mt-6 flex justify-center gap-2">
                {items.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show highlight ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === active ? "bg-accent" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
