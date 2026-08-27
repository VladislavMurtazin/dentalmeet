import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal-page-layout";
import {
  BRIEF_FORM_URL,
  CONTACT_EMAIL_MAILTO,
  LEGAL_LAST_UPDATED,
  SITE_NAME,
  SITE_URL,
  WORKSPACE_INFO_PAGE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `Google Workspace Access | ${SITE_NAME}`,
  description:
    "What DentalMeet accesses when you connect Google Workspace, what we never touch, how to revoke access, and Plan B alternatives.",
  alternates: {
    canonical: `${SITE_URL}${WORKSPACE_INFO_PAGE_URL}`,
  },
};

const OAUTH_SCOPES = [
  {
    label: "Send email on your behalf",
    scope: "gmail.send",
    description: "Send outreach emails from your domain with your signature.",
    required: true,
  },
  {
    label: "Read email",
    scope: "gmail.readonly",
    description:
      "Read replies to campaign emails so we can track responses and forward them to you.",
    required: true,
  },
  {
    label: "View calendars",
    scope: "calendar",
    description:
      "Optional — only if you connect Google Calendar for meeting tracking (most clients use Calendly instead).",
    required: false,
  },
];

export default function WorkspaceInfoPage() {
  return (
    <LegalPageLayout
      title="Google Workspace Access — What We Need & Why"
      lastUpdated={LEGAL_LAST_UPDATED}
    >
      <p>
        DentalMeet sends outreach to dental practices on your behalf. The recommended
        setup connects your Google Workspace so emails go out from <strong>your domain</strong>{" "}
        with <strong>your signature</strong> — better deliverability and a more personal touch.
        This page explains exactly what access we request and how you stay in control.
      </p>

      <h2>What we access</h2>
      <p>
        When you click &quot;Allow&quot; on Google&apos;s consent screen, you grant DentalMeet
        only these permissions:
      </p>

      <div
        className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm"
        role="figure"
        aria-label="Example Google OAuth consent screen showing requested scopes"
      >
        <div className="border-b border-gray-200 bg-white px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Google consent screen (example)
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-900">
            DentalMeet wants to access your Google Account
          </p>
        </div>
        <ul className="divide-y divide-gray-200 px-5 py-2">
          {OAUTH_SCOPES.map((item) => (
            <li key={item.scope} className="flex gap-3 py-4">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-700"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <p className="font-medium text-gray-900">
                  {item.label}
                  {!item.required && (
                    <span className="ml-2 text-xs font-normal text-gray-500">(optional)</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                <p className="mt-1 font-mono text-xs text-gray-400">{item.scope}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 bg-white px-5 py-3 text-xs text-gray-500">
          You can review or revoke this access anytime in Google Account settings.
        </div>
      </div>

      <h2>What we never access</h2>
      <ul>
        <li>Google Drive files, Docs, Sheets, or Slides</li>
        <li>Your personal contacts (unless you separately opt in)</li>
        <li>Your password — Google handles authentication; we never see it</li>
        <li>Emails outside the campaign threads we send on your behalf</li>
        <li>Account settings, billing, or admin controls</li>
      </ul>

      <h2>Your control</h2>
      <ul>
        <li>All sent emails appear in <strong>your</strong> Sent folder</li>
        <li>Replies arrive directly in <strong>your</strong> inbox</li>
        <li>You can revoke access at any time (see below)</li>
        <li>You can switch to Plan B anytime — no Workspace connection required</li>
      </ul>

      <h2>How to revoke access</h2>
      <ol>
        <li>
          Go to{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>
        </li>
        <li>Sign in with your Google Workspace account</li>
        <li>Find <strong>DentalMeet</strong> in the list of third-party apps</li>
        <li>Click <strong>Remove Access</strong></li>
        <li>
          Confirm — we will no longer be able to send or read email on your behalf. Your
          campaign can continue on Plan B if you prefer.
        </li>
      </ol>
      <p>
        Alternatively: Google Account → <strong>Security</strong> →{" "}
        <strong>Third-party apps with account access</strong> → select DentalMeet → Remove.
      </p>

      <h2>Plan B — no Workspace connection</h2>
      <p>
        Prefer not to connect Google Workspace? No problem. We can send emails from our
        DentalMeet accounts, signed with <strong>your name and company</strong>:
      </p>
      <ul>
        <li>Emails include: &quot;I&apos;m reaching out on behalf of [Your Company]…&quot;</li>
        <li>Signature shows your name, title, and company</li>
        <li>Replies are forwarded to your inbox with a [DentalMeet] prefix</li>
        <li>No Google access required — select this option in the onboarding form</li>
      </ul>
      <p>
        Plan A (Workspace) generally has higher deliverability. Plan B works well if you want
        zero account access. You can reply &quot;Plan B&quot; to any email or choose it in the{" "}
        <Link href={BRIEF_FORM_URL} className="text-accent underline-offset-2 hover:underline">
          onboarding form
        </Link>
        .
      </p>

      <h2>Security FAQ</h2>

      <h3>Do you store my Google password?</h3>
      <p>
        No. Authentication uses Google&apos;s OAuth 2.0 standard. You sign in on Google&apos;s
        site; we receive a limited access token, not your password.
      </p>

      <h3>Can you read all my emails?</h3>
      <p>
        We use Gmail API access to send campaign emails and read replies to those threads.
        We do not browse your personal inbox or unrelated messages.
      </p>

      <h3>What if I only want to send, not read?</h3>
      <p>
        Reply tracking requires read access to campaign replies. Without it, we cannot
        detect when a dental practice responds or forward replies to you automatically.
      </p>

      <h3>Is Plan B less secure for me?</h3>
      <p>
        Plan B requires no account access at all — we send from our infrastructure and
        forward replies. It is a good choice if you prefer not to grant any permissions.
      </p>

      <h3>How long do you keep access?</h3>
      <p>
        For the duration of your active campaign engagement. Revoke anytime; we will pause
        sending from your domain until you reconnect or switch to Plan B.
      </p>

      <h2>Questions?</h2>
      <p>
        Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL_MAILTO}`}>{CONTACT_EMAIL_MAILTO}</a> or reply to
        any DentalMeet message. We are happy to walk through the consent screen on a quick
        call if helpful.
      </p>
    </LegalPageLayout>
  );
}
