import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fade-in";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";
import { getCaseStudyBySlug, loadCaseStudies } from "@/lib/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = loadCaseStudies();
  return data.case_studies
    .map((cs) => cs.slug)
    .filter(Boolean)
    .map((slug) => ({ slug: slug as string }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) {
    return { title: `Case Study | ${SITE_NAME}` };
  }
  const title =
    cs.agency_name || cs.company
      ? `How ${cs.agency_name || cs.company} Got Results | ${SITE_NAME}`
      : `Case Study | ${SITE_NAME}`;
  return {
    title,
    description:
      cs.prose?.slice(0, 160) ||
      "See how marketing agencies book qualified meetings with dental practices using DentalMeet.",
  };
}

function renderMarkdownBlocks(markdown: string) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push(
      <ul key={`ul-${key++}`} className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
        {listItems.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: boldify(item) }} />
        ))}
      </ul>
    );
    listItems = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      blocks.push(
        <h1
          key={`h1-${key++}`}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2
          key={`h2-${key++}`}
          className="mt-10 text-xl font-semibold text-gray-900"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else if (line.startsWith("[Get Started")) {
      flushList();
    } else {
      flushList();
      const isQuote = line.startsWith('"') || line.startsWith("—");
      blocks.push(
        <p
          key={`p-${key++}`}
          className={`mt-4 text-base leading-relaxed text-gray-700 ${
            isQuote ? "italic" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: boldify(line) }}
        />
      );
    }
  }
  flushList();
  return blocks;
}

function boldify(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default async function CaseStudySlugPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 sm:pt-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <FadeIn onMount>
            {cs.markdown ? (
              <article>{renderMarkdownBlocks(cs.markdown)}</article>
            ) : (
              <article>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {cs.industry} · {cs.location}
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {cs.key_metric ||
                    `${cs.clients_acquired ?? cs.meetings_booked ?? "—"} results`}
                </h1>
                {(cs.agency_name || cs.company) && (
                  <p className="mt-2 text-gray-500">
                    {cs.agency_name || cs.company}
                  </p>
                )}
                <p className="mt-6 text-lg leading-relaxed text-gray-700">
                  {cs.prose}
                </p>
                {cs.quote && (
                  <blockquote className="mt-8 border-l-4 border-accent pl-4 italic text-gray-700">
                    &ldquo;{cs.quote}&rdquo;
                    {cs.owner_name && (
                      <footer className="mt-2 text-sm not-italic text-gray-500">
                        — {cs.owner_name}
                        {cs.title ? `, ${cs.title}` : ""}
                      </footer>
                    )}
                  </blockquote>
                )}
              </article>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-light to-white p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Ready for similar results?
              </h2>
              <p className="mt-3 text-gray-600">
                Get started async — no sales call required.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="/pilot" className="btn-primary inline-flex px-8 py-3">
                  Get Started
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Book a call
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
