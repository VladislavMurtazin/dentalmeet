"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FadeIn from "@/components/fade-in";

const faqs = [
  {
    question: "How is this different from buying a lead list?",
    answer:
      "We don't sell lists. We run the entire outbound campaign — research, personalization, sending, follow-up, and meeting booking. You just show up to the calls.",
  },
  {
    question: "What if I don't get any meetings?",
    answer:
      "You only pay for booked meetings. If we don't deliver, you don't pay. Simple.",
  },
  {
    question: "Do I need to provide my own email domain?",
    answer:
      "Yes, you connect your Google Workspace via OAuth. We handle warmup, rotation, and compliance. This keeps deliverability high and protects your main domain.",
  },
  {
    question: "How long until I see results?",
    answer:
      "First meetings typically book within 7–10 days. Full pilot runs 2–3 weeks.",
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
              <FadeIn key={faq.question} delay={index * 0.06}>
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
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
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
                        <p className="border-t border-gray-100 px-5 pb-4 pt-1 text-sm leading-relaxed text-gray-600 sm:px-7 sm:pb-5 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
