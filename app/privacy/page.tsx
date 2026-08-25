import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal-page-layout";
import {
  LEGAL_LAST_UPDATED,
  PRIVACY_EMAIL,
  PRIVACY_PAGE_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PRIVACY_PAGE_TITLE} | ${SITE_NAME}`,
  description:
    "How DentalMeet collects, uses, and protects your personal data when you use our website and lead generation services.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title={PRIVACY_PAGE_TITLE} lastUpdated={LEGAL_LAST_UPDATED}>
      <p>
        At DentalMeet (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are
        committed to protecting your personal data. This policy explains how we collect,
        use, and protect information when you use our website and services.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Contact information:</strong> name, email address, company name, job title
        </li>
        <li>
          <strong>Business information:</strong> details about your marketing agency and target
          clients
        </li>
        <li>
          <strong>Communication:</strong> messages, form submissions, email correspondence
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device information
        </li>
        <li>
          <strong>Usage data:</strong> pages visited, time spent on site, click patterns
        </li>
        <li>
          <strong>Cookies:</strong> small files stored on your device (see Cookie Policy below)
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide and improve our lead generation services</li>
        <li>Communicate with you about our services</li>
        <li>Send relevant business communications (which you can opt out of)</li>
        <li>Analyze website usage to improve user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do <strong>NOT</strong> sell your personal data. We share information only with:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> Zoho Mail (email delivery), Google Workspace
          (document storage), payment processors
        </li>
        <li>
          <strong>Legal requirements:</strong> when required by law or to protect our rights
        </li>
      </ul>
      <p>
        All service providers are bound by confidentiality agreements and data protection
        standards.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your location, you have the right to:</p>
      <ul>
        <li>
          <strong>Access:</strong> request a copy of your personal data
        </li>
        <li>
          <strong>Correction:</strong> request correction of inaccurate data
        </li>
        <li>
          <strong>Deletion:</strong> request deletion of your data
        </li>
        <li>
          <strong>Portability:</strong> receive your data in a portable format
        </li>
        <li>
          <strong>Opt-out:</strong> unsubscribe from marketing communications
        </li>
      </ul>
      <p>
        To exercise these rights, contact us at:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal data only as long as necessary to provide our services or comply
        with legal obligations. You can request deletion at any time.
      </p>

      <h2>International Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries outside your residence. We
        ensure appropriate safeguards are in place.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our services are not intended for individuals under 18. We do not knowingly collect
        data from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy periodically. Material changes will be communicated via
        email or website notice.
      </p>

      <h2>Contact Us</h2>
      <p>Questions about this policy? Contact:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
            dentalmeet.agency
          </a>
        </li>
      </ul>

      <hr />

      <p className="legal-note">
        <em>
          For California residents (CCPA): You have additional rights including knowing what
          data we collect, requesting deletion, and opting out of data sales (we do not sell
          data).
        </em>
      </p>
      <p className="legal-note">
        <em>
          For EU/UK residents (GDPR): Our legal basis for processing is contract performance
          and legitimate business interest. You may lodge a complaint with your local
          supervisory authority.
        </em>
      </p>
    </LegalPageLayout>
  );
}
