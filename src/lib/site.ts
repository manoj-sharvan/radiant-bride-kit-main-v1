export const SITE = {
  name: "Divya Bridal Makeup Artist",
  tagline: "Premium Bridal Makeup Artist in Tiruvannamalai",
  location: "Tiruvannamalai, Tamil Nadu",
  phonePrimary: "8838114951",
  phoneSecondary: "8667671121",
  whatsappNumber: "918838114951",
  instagram: "divya_bridalmakeupartist",
  instagramUrl: "https://instagram.com/divya_bridalmakeupartist",
  email: "bookings@divyabridal.in",
  url: "https://divyabridal.in",
} as const;

/** Sanitise free-text before piping it into a wa.me URL. Strips control chars and clamps length. */
const MAX_WA_MSG = 500;
function sanitiseMessage(msg: string): string {
  return msg
    .replace(/[\u0000-\u001F\u007F]/g, "") // strip control chars
    .trim()
    .slice(0, MAX_WA_MSG);
}

export const whatsappLink = (
  message = "Hello Divya! I'd like to book your bridal makeup services."
) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    sanitiseMessage(message)
  )}`;

export const telLink = (phone: string = SITE.phonePrimary) => `tel:+91${phone}`;

/** Build absolute URL for canonical/og tags. */
export const absoluteUrl = (path: string = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
