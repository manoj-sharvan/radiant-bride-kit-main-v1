import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Accessible image lightbox: ESC to close, arrow keys to navigate,
 * focus trap-friendly via the close button. Lazy-loaded on demand.
 */
export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${current.alt}`}
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-burgundy-deep/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory hover:text-burgundy transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory hover:text-burgundy transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      <figure onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full">
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] max-w-full rounded-xl shadow-luxe object-contain"
          width={1024}
          height={1280}
        />
        <figcaption className="mt-3 text-center text-sm text-ivory/80">
          {index + 1} / {images.length} — {current.alt}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory hover:text-burgundy transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
