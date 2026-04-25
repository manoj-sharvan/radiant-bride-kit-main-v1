import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { LazyImage } from "@/components/LazyImage";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

// Lightbox is non-critical: lazy-loaded only when a user opens an image.
const Lightbox = lazy(() => import("@/components/Lightbox"));

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: buildMeta({
      title: "Bridal Makeup Portfolio | Divya Tiruvannamalai",
      description:
        "Browse our portfolio of stunning South Indian brides — HD makeup, hairstyling, and saree draping by Divya in Tiruvannamalai.",
      path: "/portfolio",
      image: g1,
    }),
    links: buildLinks("/portfolio"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
      ]),
    ],
  }),
  component: Portfolio,
});

const items = [
  { src: g1, alt: "Traditional red bridal look with gold temple jewellery", aspect: "aspect-[3/4]" },
  { src: g2, alt: "HD glam bridal makeup close-up", aspect: "aspect-[4/5]" },
  { src: g3, alt: "Floral hairstyling with jasmine", aspect: "aspect-[3/5]" },
  { src: g4, alt: "Reception bride airbrush makeup", aspect: "aspect-[3/4]" },
  { src: g5, alt: "Engagement soft glam look", aspect: "aspect-[4/5]" },
  { src: g6, alt: "Royal South Indian bride portrait", aspect: "aspect-[3/5]" },
  { src: g2, alt: "Classic bridal portrait", aspect: "aspect-[3/4]" },
  { src: g4, alt: "Airbrush finish reception look", aspect: "aspect-[4/5]" },
  { src: g3, alt: "Mehendi day soft makeup", aspect: "aspect-[3/5]" },
];

function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section aria-labelledby="portfolio-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our portfolio"
          title="Real brides. Real radiance."
          subtitle="A curated selection of recent bridal looks crafted with love in Tiruvannamalai and across Tamil Nadu."
          titleId="portfolio-title"
        />

        <ul className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance] list-none">
          {items.map((it, i) => (
            <li key={i} className="mb-5 break-inside-avoid">
              <Reveal delay={(i % 6) * 0.05}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${it.alt}`}
                  className="group relative block w-full overflow-hidden rounded-xl shadow-card-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <LazyImage
                    src={it.src}
                    alt={it.alt}
                    width={1024}
                    height={1280}
                    aspectClass={it.aspect}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-burgundy-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <p className="font-display text-ivory text-lg">{it.alt}</p>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-16 text-center">
            <a
              href={whatsappLink("Hi Divya, I love your portfolio. I'd like to discuss my bridal look.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full gradient-cta px-7 py-4 text-base font-semibold text-primary-foreground shadow-luxe hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Book your bridal trial
            </a>
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <Suspense fallback={null}>
          <Lightbox
            images={items}
            index={active}
            onClose={() => setActive(null)}
            onPrev={() => setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length))}
            onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % items.length))}
          />
        </Suspense>
      )}
    </section>
  );
}
