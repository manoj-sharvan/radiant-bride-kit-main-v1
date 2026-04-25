import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink, telLink } from "@/lib/site";

/**
 * Mobile: floating WhatsApp + Call buttons (left/right).
 * Desktop: single WhatsApp button bottom-right.
 * Positioned with safe-area insets so they don't collide with iOS home indicator.
 */
export function StickyCTAs() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        style={{
          bottom: "max(1rem, env(safe-area-inset-bottom))",
          right: "max(1rem, env(safe-area-inset-right))",
        }}
        className="fixed z-50 flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-luxe animate-pulse-soft hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href={telLink(SITE.phonePrimary)}
        aria-label="Call now"
        style={{
          bottom: "max(1rem, env(safe-area-inset-bottom))",
          left: "max(1rem, env(safe-area-inset-left))",
        }}
        className="fixed z-50 flex h-12 w-12 items-center justify-center rounded-full gradient-cta text-primary-foreground shadow-luxe sm:hidden animate-pulse-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </>
  );
}
