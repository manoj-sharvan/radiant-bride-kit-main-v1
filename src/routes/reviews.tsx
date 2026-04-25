import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { testimonials } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: buildMeta({
      title: "Bride Reviews & Testimonials | Divya Bridal Makeup Tiruvannamalai",
      description:
        "Read 5-star reviews from 100+ happy brides who chose Divya for their wedding day in Tiruvannamalai and across Tamil Nadu.",
      path: "/reviews",
    }),
    links: buildLinks("/reviews"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]),
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bride stories"
          title="Loved by 100+ South Indian brides"
          subtitle="Real words from real brides. Every wedding day, an unforgettable transformation."
        />

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="font-display text-3xl text-burgundy">5.0 / 5.0</p>
            <p className="text-sm text-muted-foreground">Based on 100+ verified bride reviews</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl bg-card border border-border p-7 hover:border-gold hover:shadow-luxe transition-all duration-500">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-gold opacity-40" />
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif-elegant italic text-charcoal/90 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-gold font-display text-burgundy-deep">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-display text-burgundy">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-serif-elegant italic text-lg text-muted-foreground mb-5">
              Ready to be our next happy bride?
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-cta px-7 py-4 text-base font-semibold text-primary-foreground shadow-luxe hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Book Your Bridal Date
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
