import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: buildMeta({
      title: "Bridal Makeup FAQ | Divya Tiruvannamalai",
      description:
        "Answers to common questions about bridal makeup booking, trials, products, & pricing in Tiruvannamalai.",
      path: "/faq",
    }),
    links: buildLinks("/faq"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common questions"
          title="Everything you'd like to know"
          subtitle="If you don't find your answer, message us on WhatsApp — we usually reply within an hour."
        />

        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="mt-12 rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
                <AccordionTrigger className="font-display text-lg text-burgundy hover:no-underline py-6 text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/80 font-serif-elegant text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="mt-12 rounded-2xl gradient-cta p-8 text-center text-ivory shadow-luxe">
            <h3 className="font-display text-2xl">Still have questions?</h3>
            <p className="mt-2 text-ivory/85 font-serif-elegant">
              We're here to help. Message us anytime.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-burgundy hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
