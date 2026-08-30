"use client";

import Image from "next/image";
import FadeIn from "@/components/fade-in";
import { BRIEF_FORM_URL } from "@/lib/constants";

const PARAS = [
  "Hi, I'm Vladislav — founder of DentalMeet.",
  "After years in B2B marketing, I saw the same problem everywhere: great marketing agencies struggling to find qualified clients, while dental practices desperately needed their services. The disconnect was costing both sides millions.",
  "So I built DentalMeet — an automated system that bridges this gap. We find verified dental practices, craft personalized outreach, and deliver qualified meetings directly to your calendar.",
  "Today, DentalMeet runs on automation I designed from scratch: intelligent lead sourcing, personalized email sequences, and real-time performance tracking. Every meeting we deliver is a real opportunity, not a cold lead.",
  "My promise: you only pay for meetings that actually happen. If we don't deliver, you don't pay. Simple as that.",
  "Ready to grow? Let's talk.",
];

export default function AboutFounder() {
  return (
    <section id="about" className="scroll-mt-20 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <FadeIn>
            <div className="mx-auto flex w-full max-w-[220px] flex-col items-center text-center lg:mx-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-accent/15 shadow-sm">
                <Image
                  src="/vladislav.jpg"
                  alt="Vladislav, founder of DentalMeet"
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="mt-4 text-base font-semibold text-gray-900">
                Vladislav
              </p>
              <p className="text-sm text-gray-500">Founder, DentalMeet</p>
            </div>
          </FadeIn>

          <div>
            <FadeIn as="h2" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About the Founder
            </FadeIn>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-[17px]">
              {PARAS.map((p, i) => (
                <FadeIn key={i} delay={0.05 * i} as="p">
                  {p}
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.35} className="mt-8">
              <a
                href={BRIEF_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-3.5 text-sm sm:text-base"
              >
                Get Started
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
