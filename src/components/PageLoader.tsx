import { Skeleton } from "@/components/ui/skeleton";

/** Generic route-level pending UI. Avoids blank screens during chunk/data loads. */
export function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <Skeleton className="mx-auto h-3 w-40" />
        <Skeleton className="mx-auto h-12 w-full max-w-lg" />
        <Skeleton className="mx-auto h-4 w-72" />
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-border bg-card p-6">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export function GalleryLoader() {
  return (
    <div role="status" aria-live="polite" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5] w-full rounded-xl" />
        ))}
      </div>
      <span className="sr-only">Loading gallery…</span>
    </div>
  );
}
