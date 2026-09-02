"use client";

import FadeIn from "@/components/fade-in";
import { BRIEF_FORM_URL } from "@/lib/constants";

const METRICS = [
  { value: "200", label: "dental practices contacted" },
  { value: "12", label: "qualified meetings booked" },
  { value: "3", label: "new clients signed" },
  { value: "$4,500", label: "in new annual revenue" },
  { value: "6x", label: "ROI in first 45 days" },
];

export default function CaseStudyHighlight() {
  return (
    <section id="case-study" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn as="p" className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Typical result
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          How a Dental Marketing Agency Added 3 New Clients in 45 Days
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:mt-16 lg:grid-cols-2">
          <FadeIn delay={0.08}>
            <h3 className="text-lg font-semibold text-gray-900">Challenge</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              A 5–10 person dental marketing agency struggled with lead generation.
              Their team spent 10 hours/week on cold outreach with only 1–2
              meetings/month.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              They partnered with DentalMeet to automate their outreach. We
              identified 200 verified dental practices, crafted personalized
              sequences, and delivered qualified meetings directly to their
              calendar.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mx-auto mt-12 max-w-5xl">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {METRICS.map((m) => (
              <li
                key={m.label}
                className="rounded-2xl border border-gray-100 bg-accent-light/50 px-4 py-5 text-center"
              >
                <p className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-gray-600 sm:text-sm">
                  {m.label}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto mt-12 max-w-3xl text-center">
          <blockquote className="text-pretty text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
            &ldquo;DentalMeet completely changed our business. We went from
            chasing leads to having qualified meetings every week. The ROI was
            incredible.&rdquo;
          </blockquote>
          <a
            href={BRIEF_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 px-7 py-3.5 text-sm sm:text-base"
          >
            Want similar results? Get Started
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
