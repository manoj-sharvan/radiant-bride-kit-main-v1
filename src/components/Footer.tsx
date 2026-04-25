import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-burgundy-deep text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full gradient-gold text-burgundy-deep">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="font-display text-2xl">Divya</p>
            </div>
            <p className="mt-3 text-sm text-ivory/70 leading-relaxed">
              Premium bridal makeup artist crafting unforgettable looks for South Indian brides.
            </p>
          </div>

          <div>
            <h4 className="font-display text-gold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-gold transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={`tel:+91${SITE.phonePrimary}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> +91 {SITE.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${SITE.phoneSecondary}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> +91 {SITE.phoneSecondary}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold text-lg mb-4">Follow & Book</h4>
            <div className="flex gap-3">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 hover:bg-gold hover:text-burgundy-deep transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white hover:opacity-90"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-ivory/60">@{SITE.instagram}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Divya Bridal Makeup Artist. All rights reserved.</p>
          <p>Crafted with love for South Indian brides ✦</p>
        </div>
      </div>
    </footer>
  );
}
