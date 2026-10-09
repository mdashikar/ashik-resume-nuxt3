import { profile, site } from "~/data/profile";

export const usePageSeo = (opts: { title: string; description: string; path: string }) => {
  const url = `${site.url}${opts.path === "/" ? "" : opts.path}`;

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    author: profile.name,
    robots: "index, follow, max-image-preview:large",
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogType: "website",
    ogUrl: url,
    ogSiteName: profile.name,
    ogLocale: "en_US",
    ogImage: site.ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${profile.name} — ${profile.title}, ${profile.focus}`,
    twitterCard: "summary_large_image",
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: site.ogImage,
    themeColor: [
      { content: "#f0f3f6", media: "(prefers-color-scheme: light)" },
      { content: "#0a101c", media: "(prefers-color-scheme: dark)" },
    ],
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          alternateName: profile.shortName,
          url: site.url,
          image: site.ogImage,
          jobTitle: profile.currentRole,
          worksFor: { "@type": "Organization", name: profile.currentCompany, url: "https://dorik.com" },
          email: `mailto:${profile.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Sylhet", addressCountry: "BD" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Leading University" },
          sameAs: profile.links.map((link) => link.href),
          knowsAbout: ["Node.js", "TypeScript", "AWS", "Terraform", "MongoDB", "Redis", "BullMQ", "GraphQL", "Vue.js", "Nuxt"],
        }),
      },
    ],
  });
};
