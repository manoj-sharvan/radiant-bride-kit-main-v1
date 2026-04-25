import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Users, MessageCircle } from "lucide-react";
import aboutImg from "@/assets/about-artist.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { whatsappLink } from "@/lib/site";
import { buildLinks, buildMeta, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMeta({
      title: "About Divya — Bridal Makeup Artist in Tiruvannamalai",
      description:
        "Meet Divya, a passionate bridal makeup artist in Tiruvannamalai with 100+ happy brides. Trained in HD, airbrush & traditional South Indian bridal looks.",
      path: "/about",
      image: aboutImg,
      type: "profile",
    }),
    links: buildLinks("/about"),
    scripts: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Award, title: "Trained Professional", desc: "Certified in HD makeup, airbrush technique, and South Indian bridal styling." },
    { icon: Heart, title: "Personal Attention", desc: "Every bride gets a dedicated trial and a one-on-one experience on the wedding day." },
    { icon: Sparkles, title: "Premium Products", desc: "Only luxury international brands — MAC, Huda, Charlotte Tilbury, Bobbi Brown." },
    { icon: Users, title: "100+ Happy Brides", desc: "Trusted by brides across Tiruvannamalai and Tamil Nadu since the very beginning." },
  ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl border-2 border-gold/40" />
                <img
                  src={aboutImg}
                  alt="Divya at work applying bridal makeup"
                  loading="eager"
                  width={1024}
                  height={1280}
                  className="relative rounded-3xl shadow-luxe object-cover w-full aspect-[4/5]"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3 ornament">Meet the artist</p>
              <h1 className="font-display text-4xl sm:text-5xl text-burgundy text-balance">
                Hi, I'm Divya — your bridal beauty companion
              </h1>
              <div className="mt-6 space-y-4 font-serif-elegant text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Born and based in Tiruvannamalai, I've spent years honing my craft to bring out the most beautiful version of every bride who sits in my chair.
                </p>
                <p>
                  My approach blends traditional South Indian bridal artistry with modern HD and airbrush techniques — so you look timeless in person and flawless in every photograph.
                </p>
                <p>
                  Beyond makeup, I see myself as a calming presence on your big day. From the trial to the final touch-up before you walk down the aisle, I'm here so you can simply enjoy the moment.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi Divya, I'd love to know more about your bridal services!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold-glow hover:scale-105 transition-transform"
                >
                  <MessageCircle className="h-4 w-4" /> Let's chat
                </a>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center rounded-full border border-burgundy/30 px-6 py-3 text-sm font-medium text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
                >
                  See my work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What sets us apart" title="The Divya promise" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card p-7 border border-border hover:border-gold hover:-translate-y-1 hover:shadow-luxe transition-all duration-500">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-burgundy-deep">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-burgundy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
