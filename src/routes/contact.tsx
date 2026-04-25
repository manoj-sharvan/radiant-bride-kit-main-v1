import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { SITE, whatsappLink, telLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Contact Divya — Book Your Bridal Makeup in Tiruvannamalai",
      description:
        "Book bridal makeup with Divya in Tiruvannamalai. WhatsApp 8838114951 or call 8667671121.",
      path: "/contact",
    }),
    links: buildLinks("/contact"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp (Fastest)",
      desc: `+91 ${SITE.phonePrimary}`,
      cta: "Message on WhatsApp",
      href: whatsappLink(),
      featured: true,
    },
    {
      icon: Phone,
      title: "Call Primary",
      desc: `+91 ${SITE.phonePrimary}`,
      cta: "Call now",
      href: telLink(SITE.phonePrimary),
    },
    {
      icon: Phone,
      title: "Call Secondary",
      desc: `+91 ${SITE.phoneSecondary}`,
      cta: "Call now",
      href: telLink(SITE.phoneSecondary),
    },
    {
      icon: Instagram,
      title: "Instagram DM",
      desc: `@${SITE.instagram}`,
      cta: "Open Instagram",
      href: SITE.instagramUrl,
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's connect"
          title="Reserve your bridal date"
          subtitle="Choose any way that suits you — WhatsApp gets you the fastest response."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block h-full rounded-2xl p-7 transition-all duration-500 ${
                  c.featured
                    ? "bg-gradient-to-br from-burgundy to-burgundy-deep text-ivory shadow-luxe border border-gold/30 hover:scale-[1.02]"
                    : "bg-card border border-border hover:border-gold hover:-translate-y-1 hover:shadow-luxe"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
                      c.featured ? "bg-ivory text-burgundy" : "gradient-gold text-burgundy-deep"
                    }`}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-display text-xl ${c.featured ? "text-ivory" : "text-burgundy"}`}
                    >
                      {c.title}
                    </h3>
                    <p
                      className={`mt-1 font-serif-elegant text-lg ${c.featured ? "text-ivory/90" : "text-charcoal"}`}
                    >
                      {c.desc}
                    </p>
                    <p
                      className={`mt-4 text-xs uppercase tracking-[0.2em] font-semibold ${c.featured ? "text-gold-light" : "text-gold"}`}
                    >
                      {c.cta} →
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 text-center h-full">
              <MapPin className="mx-auto h-6 w-6 text-gold" />
              <h4 className="mt-3 font-display text-lg text-burgundy">Service Area</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {SITE.location} & all of Tamil Nadu
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-6 text-center h-full">
              <Clock className="mx-auto h-6 w-6 text-gold" />
              <h4 className="mt-3 font-display text-lg text-burgundy">Availability</h4>
              <p className="mt-2 text-sm text-muted-foreground">Mon–Sun · 6 AM – 10 PM</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl gradient-cta p-10 sm:p-14 text-center text-ivory shadow-luxe">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Quick booking</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Tap below for an instant chat
            </h2>
            <p className="mt-3 font-serif-elegant text-ivory/85">
              Tell us your wedding date and venue — we'll reply with availability.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 text-base font-semibold text-burgundy hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Open WhatsApp Chat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
