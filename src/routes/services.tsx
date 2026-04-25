import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { services } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: buildMeta({
      title: "Bridal Makeup Services & Pricing | Divya Tiruvannamalai",
      description:
        "HD bridal makeup, hairstyling, saree draping, mehendi & more. Transparent pricing. Premium products.",
      path: "/services",
    }),
    links: buildLinks("/services"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Our services"
          title="Beauty for every moment of your wedding"
          subtitle="From engagement to reception, every service is delivered with luxury products and personalised care."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl bg-card border border-border p-7 transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:shadow-luxe">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-2xl text-burgundy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
                  <span className="font-serif-elegant text-lg text-burgundy font-medium">
                    {s.price}
                  </span>
                  <a
                    href={whatsappLink(`Hi Divya, I'd like to book ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.15em] text-gold font-semibold hover:text-burgundy transition-colors"
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-gold/30 bg-secondary/30 p-8 text-center">
            <p className="font-serif-elegant text-lg text-charcoal">
              Need a custom combination? Most brides prefer our curated packages.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Get a personalised quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
