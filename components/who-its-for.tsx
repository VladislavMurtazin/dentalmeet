"use client";

import FadeIn from "@/components/fade-in";
import { Monitor, Search, Star, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const audiences: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Monitor,
    title: "Web design studios",
    description: "Sites & funnels for practices.",
  },
  {
    icon: Search,
    title: "SEO / local marketing",
    description: "GMB, local SEO, paid ads for dentists.",
  },
  {
    icon: Star,
    title: "Reputation management",
    description: "Review generation & monitoring.",
  },
  {
    icon: Headphones,
    title: "Ops vendors",
    description: "Call centers, answering services, financing, equipment.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-20 bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn
          as="h2"
          className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          Built for vendors who sell to dental practices
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:mt-16 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group card-interactive h-full border border-gray-100 p-6 shadow-sm sm:p-7 lg:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-gray-900 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
