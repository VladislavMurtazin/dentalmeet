import type { Metadata } from "next";
import CaseStudiesContent from "@/components/case-studies-content";
import { loadCaseStudies } from "@/lib/case-studies";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Case Studies | ${SITE_NAME}`,
  description:
    "See how marketing agencies book qualified meetings with dental practices using DentalMeet.",
};

export default function CaseStudiesPage() {
  const data = loadCaseStudies();
  return <CaseStudiesContent caseStudies={data.case_studies} />;
}
