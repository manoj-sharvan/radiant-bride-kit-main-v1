import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set to true ONLY for the LCP image (one per page). */
  priority?: boolean;
  /** Wrapper aspect ratio class — e.g. "aspect-[4/5]" — to reserve space and prevent CLS. */
  aspectClass?: string;
  wrapperClassName?: string;
}

/**
 * Image with built-in CLS-safe placeholder, lazy-loading, async decoding and
 * fade-in on load. Always pass width/height to lock the intrinsic ratio.
 */
export function LazyImage({
  src,
  alt,
  width,
  height,
  priority = false,
  aspectClass,
  wrapperClassName,
  className,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted/40", aspectClass, wrapperClassName)}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/70 via-muted/40 to-muted/70"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error - fetchpriority is a valid HTML attribute not yet in React types
        fetchpriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        {...rest}
      />
    </div>
  );
}
