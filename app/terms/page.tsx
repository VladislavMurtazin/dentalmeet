import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal-page-layout";
import {
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  SITE_NAME,
  SITE_URL,
  TERMS_PAGE_TITLE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${TERMS_PAGE_TITLE} | ${SITE_NAME}`,
  description:
    "Terms of Service governing your use of DentalMeet's website and B2B lead generation services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title={TERMS_PAGE_TITLE} lastUpdated={LEGAL_LAST_UPDATED}>
      <p>
        Welcome to DentalMeet. These Terms of Service (&quot;Terms&quot;) govern your use of our
        website and lead generation services. By using our services, you agree to these Terms.
      </p>

      <h2>Service Description</h2>
      <p>
        DentalMeet provides B2B lead generation services for marketing agencies. We identify and
        connect agencies with potential clients through email outreach campaigns.
      </p>

      <h2>Your Responsibilities</h2>
      <p>When using our services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Use our services only for lawful business purposes</li>
        <li>Not use our services to send spam or violate CAN-SPAM/GDPR/CCPA</li>
        <li>Maintain the confidentiality of your account credentials</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>

      <h2>Payment Terms</h2>
      <ul>
        <li>
          <strong>Pricing:</strong> As specified in your service agreement
        </li>
        <li>
          <strong>Payment method:</strong> USDT (cryptocurrency) to provided wallet address
        </li>
        <li>
          <strong>Invoicing:</strong> Monthly, based on qualified meetings delivered
        </li>
        <li>
          <strong>Payment terms:</strong> Due within 7 days of invoice date
        </li>
        <li>
          <strong>Late payments:</strong> Service may be suspended for non-payment
        </li>
      </ul>

      <h2>Service Limitations</h2>
      <p>
        We provide lead generation services on a best-effort basis. We do <strong>NOT</strong>{" "}
        guarantee:
      </p>
      <ul>
        <li>Specific number of meetings or responses</li>
        <li>Conversion rates or sales</li>
        <li>Inbox placement of emails (subject to email provider policies)</li>
        <li>Continuous, uninterrupted service</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content on our website (text, graphics, logos) is owned by DentalMeet and protected
        by copyright laws. You may not reproduce, distribute, or create derivative works without
        written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
      </p>
      <p>
        DentalMeet shall not be liable for any indirect, incidental, special, consequential, or
        punitive damages, including but not limited to:
      </p>
      <ul>
        <li>Loss of profits, revenue, or business opportunities</li>
        <li>Data loss or corruption</li>
        <li>Service interruptions or delays</li>
        <li>Third-party actions or omissions</li>
      </ul>
      <p>
        <strong>
          Our total liability shall not exceed the amount you paid us in the 12 months preceding
          the claim.
        </strong>
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless DentalMeet from any claims, damages, losses, or
        expenses arising from:
      </p>
      <ul>
        <li>Your use of our services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any law or third-party rights</li>
      </ul>

      <h2>Termination</h2>
      <p>Either party may terminate services:</p>
      <ul>
        <li>
          <strong>By you:</strong> with 30 days written notice
        </li>
        <li>
          <strong>By us:</strong> immediately for material breach of these Terms
        </li>
        <li>
          <strong>By us:</strong> with 30 days notice for any reason
        </li>
      </ul>
      <p>
        Upon termination, you remain responsible for payment of services already rendered.
      </p>

      <h2>Dispute Resolution</h2>
      <ul>
        <li>
          <strong>Governing law:</strong> These Terms are governed by the laws of the State of
          Delaware, USA
        </li>
        <li>
          <strong>Disputes:</strong> Any disputes shall be resolved through binding arbitration
          in Delaware
        </li>
        <li>
          <strong>Class action waiver:</strong> You agree to resolve disputes individually, not
          as part of a class action
        </li>
      </ul>

      <h2>Modifications</h2>
      <p>
        We may modify these Terms at any time. Material changes will be communicated via email
        or website notice. Continued use after changes constitutes acceptance.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision is found unenforceable, the remaining provisions remain in full effect.
      </p>

      <h2>Contact</h2>
      <p>Questions about these Terms? Contact:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
            dentalmeet.agency
          </a>
        </li>
      </ul>
    </LegalPageLayout>
  );
}
