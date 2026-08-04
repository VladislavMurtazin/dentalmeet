import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
            DentalMeet
          </Link>
          <Link href={CALENDLY_URL} className="btn-primary px-5 py-2.5 text-sm">
            Book a call
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn-primary px-8 py-4 text-base">
            Back to home
          </Link>
          <Link href="/#how-it-works" className="btn-secondary px-8 py-4 text-base">
            See how it works
          </Link>
        </div>
      </main>
    </div>
  );
}
