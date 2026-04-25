import { Reveal } from "./motion-helpers";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Optional id so parent <section> can use aria-labelledby */
  titleId?: string;
  /** Heading level. Defaults to h2; use "h1" once per page for the page's primary heading. */
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleId,
  as = "h2",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const Heading = as;
  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3 ornament">
          {eyebrow}
        </p>
      )}
      <Heading
        id={titleId}
        className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy text-balance"
      >
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-serif-elegant text-balance">
          {subtitle}
        </p>
      )}
      <div aria-hidden="true" className="mt-6 mx-auto h-px w-24 gold-divider" />
    </Reveal>
  );
}
