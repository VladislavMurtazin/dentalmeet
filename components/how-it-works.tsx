"use client";

import FadeIn from "@/components/fade-in";

const steps = [
  {
    number: "01",
    title: "You set the ICP",
    description:
      "Tell us what you sell dentists: websites, SEO, reputation, staffing. We tune the engine to your exact buyer.",
  },
  {
    number: "02",
    title: "The engine runs",
    description:
      "Verified contacts, personalized first lines, smart follow-ups, warm domains, full CAN-SPAM compliance. You watch it live in reports.",
  },
  {
    number: "03",
    title: "You take the meetings",
    description:
      "Qualified calls with decision-makers land on your calendar. You only pay per booked meeting.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-gray-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn as="h2" className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          How it works
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-10">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="card-interactive relative h-full p-7 shadow-sm ring-1 ring-gray-100 sm:p-9">
                <span
                  className="block text-5xl font-bold leading-none tracking-tight text-gray-200 sm:text-6xl lg:text-7xl"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
