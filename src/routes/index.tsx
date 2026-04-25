import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Crown,
  MessageCircle,
  Star,
  Instagram,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroBride from "@/assets/hero-bride.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { CountUp, Reveal } from "@/components/motion-helpers";
import { SectionHeading } from "@/components/SectionHeading";
import { LazyImage } from "@/components/LazyImage";
import { whatsappLink, SITE } from "@/lib/site";
import { buildLinks, buildMeta } from "@/lib/seo";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Divya Bridal Makeup Artist in Tiruvannamalai | HD Bridal Makeup",
      description:
        "Premium HD bridal makeup, saree draping & hairstyling in Tiruvannamalai. 100+ happy brides. Book on WhatsApp now.",
      path: "/",
      image: heroBride,
    }),
    links: buildLinks("/"),
  }),
  component: Home,
});

const galleryImages = [
  { src: g1, alt: "South Indian bride in red silk with traditional gold jewellery" },
  { src: g2, alt: "HD bridal makeup close-up with bold red lips and smokey eyes" },
  { src: g3, alt: "Floral hairstyling with jasmine flowers on a Tamil bride" },
  { src: g4, alt: "Reception bride in pastel saree with airbrush glam makeup" },
  { src: g5, alt: "Engagement soft glam look with subtle gold eye makeup" },
  { src: g6, alt: "Royal South Indian bridal portrait with ornate temple jewellery" },
];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChoose />
      <FeaturedGallery />
      <TestimonialsCarousel />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="South Indian bride in red silk saree with HD bridal makeup by Divya"
          // LCP image: load eagerly with high fetch priority.
          loading="eager"
          decoding="async"
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority="high"
          className="h-full w-full object-cover object-[center_20%] animate-ken-burns"
          width={1080}
          height={1920}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,10,20,0.55) 0%, rgba(40,10,20,0.35) 40%, rgba(40,10,20,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-28 pt-32 md:justify-center md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-ivory"
        >
          <p className="text-[11px] sm:text-sm uppercase tracking-[0.4em] text-gold mb-4 sm:mb-5 ornament">
            Tiruvannamalai · Tamil Nadu
          </p>
          <h1
            id="hero-title"
            className="font-display text-[2.25rem] xs:text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance text-ivory"
          >
            Premium Bridal Makeup Artist in Tiruvannamalai
          </h1>
          <p className="mt-5 text-base sm:text-xl font-serif-elegant text-ivory/85 italic max-w-xl">
            HD Makeup · Saree Draping · Hairstyling
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full gradient-cta px-7 py-4 text-base font-semibold text-primary-foreground shadow-luxe hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <Link
              to="/portfolio"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/40 backdrop-blur-sm bg-ivory/10 px-7 py-4 text-base font-medium text-ivory hover:bg-ivory hover:text-burgundy transition-colors"
            >
              View Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px gold-divider z-10" />
    </section>
  );
}

function TrustBar() {
  const stats = [
    { num: 100, suffix: "+", label: "Happy Brides" },
    { num: 12, suffix: "+", label: "Premium Brands" },
    { num: 50, suffix: "+", label: "Venues Covered" },
    { num: 5, suffix: "★", label: "Avg. Rating" },
  ];
  return (
    <section
      aria-label="Key statistics"
      className="bg-ivory py-14 sm:py-20 border-y border-gold/20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl sm:text-5xl text-burgundy">
                <CountUp end={s.num} suffix={s.suffix} />
              </dd>
              <p
                aria-hidden="true"
                className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground"
              >
                {s.label}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function WhyChoose() {
  const cards = [
    {
      icon: Crown,
      title: "Expert Bridal Makeup",
      desc: "Years of experience crafting timeless South Indian bridal looks.",
    },
    {
      icon: Sparkles,
      title: "HD & Airbrush",
      desc: "Camera-ready finish using professional HD and airbrush techniques.",
    },
    {
      icon: Heart,
      title: "Complete Package",
      desc: "Makeup, hair, draping & mehendi — one artist, total peace of mind.",
    },
  ];
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why brides choose Divya"
          title="Crafted with care, finished to perfection"
          subtitle="Every bride deserves an experience as beautiful as her wedding day."
          titleId="why-title"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
          {cards.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:shadow-luxe">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-burgundy-deep group-hover:scale-110 transition-transform">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-burgundy">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedGallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured looks"
          title="A glimpse of recent brides"
          subtitle="Each look custom-crafted to celebrate your individuality."
          titleId="gallery-title"
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <LazyImage
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1280}
                aspectClass={i === 0 || i === 5 ? "md:row-span-2 aspect-[3/5]" : "aspect-[4/5]"}
                wrapperClassName="rounded-xl shadow-card-soft"
                className="hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-burgundy font-medium border-b-2 border-gold pb-1 hover:gap-3 transition-all"
          >
            View Full Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[idx];

  return (
    <section
      aria-labelledby="testi-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-burgundy/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Words from our brides"
          title="Loved by real South Indian brides"
          titleId="testi-title"
        />
        <Reveal delay={0.15}>
          <motion.figure
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-live="polite"
            aria-atomic="true"
            className="mt-12 rounded-3xl border border-gold/30 bg-card p-8 sm:p-12 shadow-luxe text-center"
          >
            <div
              aria-label={`${t.rating} star rating`}
              className="flex justify-center gap-1 text-gold"
            >
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-6 font-serif-elegant italic text-lg sm:text-2xl text-charcoal leading-relaxed text-balance">
              <p>&ldquo;{t.text}&rdquo;</p>
            </blockquote>
            <div aria-hidden="true" className="mt-6 gold-divider mx-auto w-16" />
            <figcaption>
              <p className="mt-4 font-display text-burgundy text-lg">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
            </figcaption>
          </motion.figure>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === idx}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-burgundy/20"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section aria-labelledby="ig-title" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`@${SITE.instagram}`}
          title="Follow our latest work on Instagram"
          titleId="ig-title"
        />
        <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 list-none">
          {galleryImages.map((img, i) => (
            <li key={i}>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Divya's Instagram – ${img.alt}`}
                className="relative block aspect-square overflow-hidden rounded-lg group"
              >
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  aspectClass="aspect-square"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-burgundy-deep/0 group-hover:bg-burgundy-deep/60 flex items-center justify-center transition-colors">
                  <Instagram
                    className="h-6 w-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl gradient-cta p-10 sm:p-16 text-center text-ivory shadow-luxe relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <p className="relative text-xs uppercase tracking-[0.3em] text-gold-light mb-4">
              Limited Availability
            </p>
            <h2
              id="cta-title"
              className="relative font-display text-3xl sm:text-5xl text-ivory text-balance"
            >
              Peak Bridal Dates Are Filling Fast
            </h2>
            <p className="relative mt-4 text-ivory/85 max-w-xl mx-auto font-serif-elegant text-lg">
              Reserve your wedding date today and let's begin crafting the look you've always
              dreamed of.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ivory px-8 py-4 text-base font-semibold text-burgundy shadow-luxe hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Book Your Bridal Date Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
