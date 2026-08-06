"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Plus, Minus } from "lucide-react";
import FadeIn from "@/components/fade-in";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  BRIEF_FORM_URL,
  CONTACT_EMAIL_COMPOSE_URL,
  CONTACT_EMAIL_DISPLAY,
  PILOT_CTA_LABEL,
} from "@/lib/constants";

const problems = [
  "Referrals are unpredictable",
  "Paid ads cost $3k–10k/month with uncertain ROI",
  "Cold email requires months of testing",
  "Hiring SDRs costs $80k/year",
];

const solutions = [
  "Finds verified contacts (practice owners, CEOs)",
  "Writes hyper-personalized emails",
  "Handles sending, follow-ups, meeting booking",
  "You just show up to qualified calls",
];

const steps = [
  { n: "1", title: "You define your ICP", desc: "2 minutes" },
  { n: "2", title: "We launch your campaign", desc: "24 hours" },
  { n: "3", title: "You get weekly reports", desc: "Every Monday" },
  { n: "4", title: "You take meetings and close deals", desc: "Ongoing" },
];

const qualifiedCriteria = [
  "Meeting took place (no no-shows)",
  "Attendee is decision-maker (Owner, CEO, Practice Manager)",
  "Duration ≥ 15 minutes",
  "From your target geography",
  "Represents a dental practice",
];

const reportMetrics = [
  { icon: "📊", label: "Emails sent" },
  { icon: "📈", label: "Open rates (40–60%)" },
  { icon: "💬", label: "Replies received" },
  { icon: "📅", label: "Meetings booked" },
];

const faqs = [
  {
    q: "How do you find contacts?",
    a: "Apollo.io + custom enrichment. Only practice owners and decision-makers.",
  },
  {
    q: "What if I don't get meetings?",
    a: "You only pay for booked meetings. No results = no payment.",
  },
  {
    q: "How long until results?",
    a: "First meetings in 7–10 days. Full pilot: 2–3 weeks.",
  },
  {
    q: "Do I need my own email domain?",
    a: "Yes, you connect your Google Workspace via OAuth.",
  },
];

export default function PilotContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main>
        {/* Section 1 — Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent-light/60 via-white to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
            <FadeIn onMount>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
                Async onboarding
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                DentalMeet Pilot Program
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-700 sm:text-xl">
                Autonomous B2B Lead Generation for Dental Marketing Agencies
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                15–20 qualified meetings with dental practice owners in 2–3 weeks
              </p>
              <a
                href="#onboarding-form"
                className="btn-primary group mt-10 inline-flex px-8 py-4 text-base"
              >
                {PILOT_CTA_LABEL}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Section 2 — Problem */}
        <section className="border-t border-gray-100 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                The problem
              </h2>
              <p className="mt-4 text-center text-lg text-gray-600">
                Why dental marketing agencies struggle to grow predictably
              </p>
              <ul className="mt-10 space-y-4">
                {problems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800"
                  >
                    <span className="mt-1 text-accent">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Section 3 — Solution */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                The solution
              </h2>
              <p className="mt-4 text-center text-lg text-gray-600">
                DentalMeet autonomous outbound platform
              </p>
              <ul className="mt-10 space-y-4">
                {solutions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-accent/20 bg-white px-5 py-4 shadow-sm"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2.5} />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Section 4 — How it works */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                How it works
              </h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {steps.map((step) => (
                  <div
                    key={step.n}
                    className="card-interactive ring-1 ring-gray-100 p-6 shadow-sm"
                  >
                    <span className="text-4xl font-bold text-gray-200">{step.n}</span>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 5 — Pilot pricing */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                Pilot pricing
              </h2>
              <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <ul className="space-y-3 text-gray-800">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    <span><strong>$0 upfront</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    <span><strong>$150</strong> per qualified meeting (max <strong>$750</strong> for pilot)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    <span>If we don&apos;t deliver 5 meetings, you pay nothing</span>
                  </li>
                </ul>
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <p className="font-semibold text-gray-900">What counts as a qualified meeting:</p>
                  <ul className="mt-4 space-y-2">
                    {qualifiedCriteria.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-gray-700 sm:text-base">
                        <span>✅</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 6 — Weekly reports */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                Weekly reports
              </h2>
              <p className="mt-4 text-center text-gray-600">
                Full transparency every Monday — no black box
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {reportMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4"
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="font-medium text-gray-900">{m.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                FAQ
              </h2>
              <div className="mt-10 space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={faq.q}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      >
                        <span className="font-semibold text-gray-900">{faq.q}</span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            isOpen ? "bg-accent text-white" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4" strokeWidth={2.5} />
                          ) : (
                            <Plus className="h-4 w-4" strokeWidth={2.5} />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="border-t border-gray-100 px-5 pb-4 pt-1 text-gray-600 sm:px-6 sm:pb-5">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 8 — CTA */}
        <section
          id="onboarding-form"
          className="scroll-mt-20 bg-gradient-to-br from-accent-light via-white to-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to start?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the onboarding form and we&apos;ll launch your pilot within 24 hours.
              </p>
              <a
                href={BRIEF_FORM_URL}
                target={BRIEF_FORM_URL.startsWith("http") ? "_blank" : undefined}
                rel={
                  BRIEF_FORM_URL.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="btn-primary group mt-8 inline-flex px-10 py-5 text-lg shadow-xl shadow-accent/30"
              >
                Fill out the onboarding form
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="mt-6 text-sm text-gray-600">
                Questions?{" "}
                <a
                  href={CONTACT_EMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  Email {CONTACT_EMAIL_DISPLAY}
                </a>
                {" "}— I respond within a few hours.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
