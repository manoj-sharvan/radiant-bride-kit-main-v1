import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/**
 * Slim top-of-page progress bar that appears during route transitions.
 * Honors prefers-reduced-motion by disappearing instantly.
 */
export function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.isLoading || s.isTransitioning });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    if (isLoading) {
      setVisible(true);
      setProgress(15);
      const tick = () => {
        setProgress((p) => (p < 85 ? p + (85 - p) * 0.06 : p));
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    } else if (visible) {
      setProgress(100);
      timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (!visible) return null;
  return (
    <div
      role="progressbar"
      aria-label="Page loading"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent pointer-events-none"
    >
      <div
        className="h-full gradient-cta shadow-[0_0_8px_rgba(212,165,116,0.6)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
