import { SITE, absoluteUrl } from "./site";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

/**
 * Build a complete, route-specific meta tag array.
 * Returns title, description, canonical, OG and Twitter cards in one call.
 */
export function buildMeta(input: SeoInput) {
  const { title, description, path, image, type = "website", noindex } = input;
  const url = absoluteUrl(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push(
      { property: "og:image", content: image },
      { property: "og:image:alt", content: title },
      { name: "twitter:image", content: image }
    );
  }
  if (noindex) meta.push({ name: "robots", content: "noindex, nofollow" });
  return meta;
}

export function buildLinks(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    }),
  };
}
