"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PRIVACY_PAGE_URL, TERMS_PAGE_URL } from "@/lib/constants";

const STORAGE_KEY = "cookiesAccepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const accepted = localStorage.getItem(STORAGE_KEY);
    if (accepted) return;

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-gray-800 bg-gray-900 px-5 py-5 text-center text-sm leading-relaxed text-white shadow-[0_-2px_10px_rgba(0,0,0,0.2)] sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 sm:flex-row sm:text-left">
        <p className="text-gray-200">
          We use cookies to improve your experience on our site. By continuing to
          browse, you accept our{" "}
          <Link href={PRIVACY_PAGE_URL} className="text-accent underline-offset-2 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={TERMS_PAGE_URL} className="text-accent underline-offset-2 hover:underline">
            Terms of Service
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={acceptCookies}
          className="shrink-0 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
