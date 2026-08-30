"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fade-in";
import { CALENDLY_URL } from "@/lib/constants";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudiesContentProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesContent({
  caseStudies,
}: CaseStudiesContentProps) {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 sm:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeIn onMount>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Client results
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                Real outbound campaigns for marketing agencies selling to dental
                practices. Names shown only with client permission.
              </p>
            </div>
          </FadeIn>

          {caseStudies.length === 0 ? (
            <FadeIn delay={0.1}>
              <p className="mx-auto mt-12 max-w-xl text-center text-gray-500">
                Case studies will appear here as clients approve sharing their
                results. Check back soon.
              </p>
            </FadeIn>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs, i) => (
                <FadeIn key={cs.id} delay={0.05 * i}>
                  <button
                    type="button"
                    onClick={() => setSelected(cs)}
                    className="h-full w-full rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:border-accent/40 hover:shadow-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {cs.industry}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{cs.location}</p>
                    <p className="mt-4 text-xl font-bold text-gray-900">
                      {cs.key_metric ||
                        (cs.clients_acquired != null
                          ? `${cs.clients_acquired} new clients`
                          : `${cs.meetings_booked ?? "—"} meetings booked`)}
                    </p>
                    {cs.quote ? (
                      <p className="mt-3 line-clamp-3 text-sm italic text-gray-600">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                    ) : (
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                        {cs.prose}
                      </p>
                    )}
                    <span className="mt-4 inline-block text-sm font-medium text-accent">
                      Read full story →
                    </span>
                  </button>
                </FadeIn>
              ))}
            </div>
          )}

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-light to-white p-8 text-center sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Want results like this?
              </h2>
              <p className="mt-3 text-gray-600">
                Book a call and we&apos;ll walk through how DentalMeet fills your
                calendar with qualified dental practice meetings.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-flex px-8 py-4"
              >
                Book a call
              </a>
            </div>
          </FadeIn>
        </div>
      </main>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {selected.industry} · {selected.location}
                </p>
                {selected.company && (
                  <p className="mt-1 text-sm text-gray-500">{selected.company}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              {selected.prose}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
              {selected.meetings_booked != null && (
                <div>
                  <dt className="text-gray-500">Meetings</dt>
                  <dd className="font-semibold text-gray-900">
                    {selected.meetings_booked}
                  </dd>
                </div>
              )}
              {selected.emails_sent != null && (
                <div>
                  <dt className="text-gray-500">Emails sent</dt>
                  <dd className="font-semibold text-gray-900">
                    {selected.emails_sent}
                  </dd>
                </div>
              )}
              {selected.reply_rate && (
                <div>
                  <dt className="text-gray-500">Reply rate</dt>
                  <dd className="font-semibold text-gray-900">
                    {selected.reply_rate}
                  </dd>
                </div>
              )}
              {selected.meeting_conversion && (
                <div>
                  <dt className="text-gray-500">Email → meeting</dt>
                  <dd className="font-semibold text-gray-900">
                    {selected.meeting_conversion}
                  </dd>
                </div>
              )}
              {selected.revenue_generated && (
                <div className="col-span-2 sm:col-span-3">
                  <dt className="text-gray-500">Revenue generated</dt>
                  <dd className="font-semibold text-gray-900">
                    {selected.revenue_generated}
                  </dd>
                </div>
              )}
            </dl>
            {selected.quote && (
              <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-gray-700">
                &ldquo;{selected.quote}&rdquo;
              </blockquote>
            )}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex w-full justify-center py-3 sm:w-auto"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
