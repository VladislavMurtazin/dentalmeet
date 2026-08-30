import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface CaseStudy {
  id: string;
  slug?: string;
  industry: string;
  location: string;
  duration?: string;
  meetings_booked?: number;
  emails_sent?: number;
  clients_acquired?: number;
  reply_rate?: string;
  meeting_conversion?: string;
  revenue_generated?: string;
  roi?: number;
  quote?: string | null;
  prose?: string;
  company?: string | null;
  agency_name?: string | null;
  owner_name?: string | null;
  title?: string | null;
  key_metric?: string;
  url?: string;
  markdown?: string;
}

export interface CaseStudiesData {
  updated_at: string | null;
  social_proof: {
    agencies_count: number;
    avg_meetings_per_month: number;
    headline: string;
    subheadline: string;
  };
  case_studies: CaseStudy[];
  highlights: CaseStudy[];
}

export const FALLBACK_CASE_STUDIES: CaseStudiesData = {
  updated_at: null,
  social_proof: {
    agencies_count: 5,
    avg_meetings_per_month: 8,
    headline: "Trusted by 5+ marketing agencies",
    subheadline: "Average 8 meetings per client per month",
  },
  case_studies: [],
  highlights: [],
};

export function loadCaseStudies(): CaseStudiesData {
  const file = join(process.cwd(), "public", "case_studies.json");
  if (!existsSync(file)) return FALLBACK_CASE_STUDIES;
  try {
    return JSON.parse(readFileSync(file, "utf-8")) as CaseStudiesData;
  } catch {
    return FALLBACK_CASE_STUDIES;
  }
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const data = loadCaseStudies();
  return data.case_studies.find((cs) => cs.slug === slug || cs.id === slug);
}
