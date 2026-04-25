import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StickyCTAs } from "@/components/StickyCTAs";
import { RouteProgress } from "@/components/RouteProgress";
import { SITE, absoluteUrl } from "@/lib/site";
import heroBride from "@/assets/hero-bride.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-burgundy">404</h1>
        <h2 className="mt-4 text-xl font-serif-elegant text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-luxe"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-burgundy/30 px-6 py-3 text-sm font-medium text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Divya — Premium Bridal Makeup Artist in Tiruvannamalai" },
      {
        name: "description",
        content:
          "Expert HD bridal makeup, saree draping & hairstyling in Tiruvannamalai. 100+ happy brides. Book on WhatsApp.",
      },
      { name: "author", content: SITE.name },
      {
        name: "keywords",
        content:
          "bridal makeup Tiruvannamalai, HD makeup Tamil Nadu, wedding makeup artist, saree draping, mehendi, airbrush makeup",
      },
      { name: "format-detection", content: "telephone=yes" },
      { name: "theme-color", content: "#8B1538" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: `@${SITE.instagram}` },
      { property: "og:title", content: "Divya — Premium Bridal Makeup Artist in Tiruvannamalai" },
      { name: "twitter:title", content: "Divya — Premium Bridal Makeup Artist in Tiruvannamalai" },
      {
        name: "description",
        content:
          "A premium bridal makeup artist website in Tiruvannamalai, India, designed to convert visitors into WhatsApp bookings.",
      },
      {
        property: "og:description",
        content:
          "A premium bridal makeup artist website in Tiruvannamalai, India, designed to convert visitors into WhatsApp bookings.",
      },
      {
        name: "twitter:description",
        content:
          "A premium bridal makeup artist website in Tiruvannamalai, India, designed to convert visitors into WhatsApp bookings.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92b621e7-fed3-4faf-8b48-83def1276c24/id-preview-db8696f7--98d6295f-62a1-4cc5-a853-96f320acb76f.lovable.app-1777105463859.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92b621e7-fed3-4faf-8b48-83def1276c24/id-preview-db8696f7--98d6295f-62a1-4cc5-a853-96f320acb76f.lovable.app-1777105463859.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // Preload LCP hero image so it starts downloading before JS parses.
      { rel: "preload", as: "image", href: heroBride, fetchpriority: "high" } as never,
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      // Site-wide LocalBusiness JSON-LD (full schema lives at the root for crawlers).
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "@id": absoluteUrl("/#business"),
          name: SITE.name,
          image: absoluteUrl("/og-image.jpg"),
          url: SITE.url,
          telephone: `+91${SITE.phonePrimary}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruvannamalai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: { "@type": "State", name: "Tamil Nadu" },
          priceRange: "₹₹",
          sameAs: [SITE.instagramUrl],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "100",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "06:00",
            closes: "22:00",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadContent />
      {children}
      <Scripts />
    </>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Skip link for keyboard & screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-md focus:bg-burgundy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ivory"
      >
        Skip to content
      </a>
      <RouteProgress />
      <Navigation />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTAs />
    </div>
  );
}
