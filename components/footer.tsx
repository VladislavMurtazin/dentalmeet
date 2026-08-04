export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:gap-6 sm:px-6 sm:py-10 sm:text-left lg:px-8">
        <p className="text-sm text-gray-500">
          © 2026 DentalMeet. Built for the dental niche.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="mailto:hello@dentalmeet.com"
            className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-accent"
          >
            hello@dentalmeet.com
          </a>
          <a
            href="https://linkedin.com/company/dentalmeet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DentalMeet on LinkedIn"
            className="text-gray-400 transition-all duration-200 hover:scale-110 hover:text-accent"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
