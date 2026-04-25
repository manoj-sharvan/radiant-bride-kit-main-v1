import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Crown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { packages } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: buildMeta({
      title: "Bridal Makeup Packages & Pricing | Divya Tiruvannamalai",
      description:
        "Engagement, Classic, Royal & Complete Wedding bridal packages. Transparent pricing starting ₹4,500. Book on WhatsApp.",
      path: "/packages",
    }),
    links: buildLinks("/packages"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Packages", path: "/packages" },
      ]),
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bridal packages"
          title="Curated for every bride, every budget"
          subtitle="Transparent pricing with no hidden costs. Customise any package to suit your wedding vision."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                  p.highlight
                    ? "bg-gradient-to-b from-burgundy to-burgundy-deep text-ivory shadow-luxe scale-[1.02] border border-gold/40"
                    : "bg-card border border-border hover:border-gold hover:-translate-y-1 hover:shadow-luxe"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-burgundy-deep flex items-center gap-1">
                    <Crown className="h-3 w-3" /> Most Loved
                  </div>
                )}

                <p className={`text-xs uppercase tracking-[0.25em] font-medium ${p.highlight ? "text-gold-light" : "text-gold"}`}>
                  {p.tag}
                </p>
                <h3 className={`mt-3 font-display text-2xl ${p.highlight ? "text-ivory" : "text-burgundy"}`}>
                  {p.name}
                </h3>
                <p className={`mt-4 font-display text-4xl ${p.highlight ? "text-ivory" : "text-burgundy"}`}>
                  {p.price}
                </p>
                <div className={`mt-5 h-px w-full ${p.highlight ? "bg-gold/30" : "gold-divider"}`} />

                <ul className="mt-5 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${p.highlight ? "text-gold-light" : "text-gold"}`} />
                      <span className={p.highlight ? "text-ivory/90" : "text-charcoal/80"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Hi Divya, I'm interested in the ${p.name} package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    p.highlight
                      ? "bg-ivory text-burgundy hover:bg-gold-light"
                      : "gradient-cta text-primary-foreground hover:scale-[1.02]"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" /> Book Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-gold/30 bg-card p-8 text-center">
            <h3 className="font-display text-2xl text-burgundy">Need something custom?</h3>
            <p className="mt-3 text-sm text-muted-foreground font-serif-elegant text-lg">
              We tailor packages for destination weddings, family bookings, and multi-day ceremonies.
            </p>
            <a
              href={whatsappLink("Hi Divya, I'd like a custom bridal package quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-burgundy px-6 py-3 text-sm font-semibold text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Request a Custom Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
