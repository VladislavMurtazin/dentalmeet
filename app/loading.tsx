export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="h-6 w-32 animate-pulse rounded-lg bg-gray-200" />
          <div className="hidden gap-8 md:flex">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="hidden h-10 w-28 animate-pulse rounded-full bg-gray-200 md:block" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-36 text-center lg:px-8">
        <div className="mx-auto h-4 w-64 animate-pulse rounded-full bg-gray-200" />
        <div className="mx-auto mt-8 h-12 w-full max-w-2xl animate-pulse rounded-xl bg-gray-200" />
        <div className="mx-auto mt-4 h-12 w-full max-w-xl animate-pulse rounded-xl bg-gray-200" />
        <div className="mx-auto mt-8 h-5 w-full max-w-lg animate-pulse rounded-lg bg-gray-100" />
        <div className="mx-auto mt-3 h-5 w-full max-w-md animate-pulse rounded-lg bg-gray-100" />
        <div className="mx-auto mt-10 flex max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
          <div className="h-14 flex-1 animate-pulse rounded-full bg-gray-200" />
          <div className="h-14 flex-1 animate-pulse rounded-full bg-gray-100" />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-8 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-sm text-gray-500">Loading DentalMeet…</span>
        </div>
      </div>
    </div>
  );
}
