import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <article className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-8">
          <header className="mb-10 border-b border-gray-200 pb-8">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </header>
          <div className="legal-prose">{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
