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
    ogImageAlt: `${profile.name}: backend engineer, now building Feevox and Erestro. Available for senior and lead backend roles.`,
    twitterCard: "summary_large_image",
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: site.ogImage,
    twitterSite: "@mdashikar",
    twitterCreator: "@mdashikar",
    themeColor: [
      { content: "#fcfcfa", media: "(prefers-color-scheme: light)" },
      { content: "#141513", media: "(prefers-color-scheme: dark)" },
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
          jobTitle: profile.title,
          description: profile.summary,
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
