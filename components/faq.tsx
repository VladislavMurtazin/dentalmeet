"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/fade-in";
import {
  BRIEF_FORM_URL,
  WORKSPACE_INFO_PAGE_URL,
} from "@/lib/constants";

const faqs = [
  {
    question: "How do you find dental practices?",
    answer:
      "We use verified B2B databases and targeted search to find dental practices matching your service area and specialty. Every contact is verified before outreach.",
  },
  {
    question: "What if a meeting doesn't happen?",
    answer:
      "You only pay for meetings that actually occur. If a practice cancels or doesn't show up, you're not charged. We also offer a free replacement meeting.",
  },
  {
    question: "Is it safe to connect my Google Workspace?",
    answer: (
      <>
        Yes. We only request permission to send emails and read replies related
        to this campaign. We never access your files, documents, or personal
        emails. You can revoke access anytime. Learn more on our{" "}
        <a
          href={WORKSPACE_INFO_PAGE_URL}
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          Workspace Info
        </a>{" "}
        page.
      </>
    ),
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, no contracts. Cancel with 30 days notice and keep all meetings already booked.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most agencies see their first meetings within 2–3 weeks. Full campaign results typically arrive within 30–45 days.",
  },
  {
    question: "What if I don't want to connect my Workspace?",
    answer:
      "No problem! We can send emails from our accounts on your behalf, signed with your name and company. Just choose this option in the form.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-gray-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeIn as="h2" className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </FadeIn>

        <div className="mt-10 space-y-3 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50/80 sm:px-7 sm:py-5"
                  >
                    <span className="text-sm font-semibold text-gray-900 sm:text-base lg:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        isOpen
                          ? "bg-accent text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 px-5 pb-4 pt-1 text-sm leading-relaxed text-gray-600 sm:px-7 sm:pb-5 sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center sm:mt-14">
          <p className="text-lg font-semibold text-gray-900 sm:text-xl">
            Ready to Grow?
          </p>
          <a
            href={BRIEF_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 px-8 py-3.5 text-base"
          >
            Get Started
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
