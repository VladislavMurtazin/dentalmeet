import type { Metadata } from "next";
import PilotContent from "@/components/pilot-content";
import { PILOT_PAGE_DESCRIPTION, PILOT_PAGE_TITLE, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PILOT_PAGE_TITLE} | ${SITE_NAME}`,
  description: PILOT_PAGE_DESCRIPTION,
  openGraph: {
    title: PILOT_PAGE_TITLE,
    description: PILOT_PAGE_DESCRIPTION,
  },
};

export default function PilotPage() {
  return <PilotContent />;
}
