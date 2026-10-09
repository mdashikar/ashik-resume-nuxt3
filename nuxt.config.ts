export default defineNuxtConfig({
  compatibilityDate: "2026-10-09",
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-cloudflare-analytics",
    "nuxt-microsoft-clarity",
  ],
  tailwindcss: {
    // Our stylesheet already holds the @tailwind directives; without this the module injects a second copy
    cssPath: "~/assets/css/main.css",
  },
  prerender: {
    routes: ["/", "/resume"],
  },
  hooks: {
    // Nitro options that Nuxt's config types don't describe yet
    "nitro:config"(config) {
      // Fully static output, whether Cloudflare runs `nuxt build` or `nuxt generate`
      Object.assign(config, { preset: "cloudflare-pages-static" });

      // Write /resume.html rather than /resume/index.html so Cloudflare serves /resume without a redirect
      Object.assign((config.prerender ??= {}), { autoSubfolderIndex: false });

      // Older resume links that are still shared around (Nitro 2 reads `statusCode`)
      const resume = { to: "/files/Md_Ashiqur_Rahman_Resume_2026.pdf", statusCode: 301 };
      Object.assign((config.routeRules ??= {}), {
        "/files/Ashiqur-Rahman-Resume.pdf": { redirect: resume },
        "/files/Resume_Md_Ashiqur_Rahman_Backend_2025.pdf": { redirect: resume },
      });
    },
  },
  cloudflareAnalytics: {
    token: "7dcb1956090c4f469b5770c335a0cd50",
  },
  clarity: {
    id: "mcfflssd39",
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&family=Instrument+Sans:wght@400..600&family=IBM+Plex+Mono:wght@400&display=swap",
        },
      ],
      script: [
        {
          // Apply the saved / system theme before first paint to avoid a flash
          innerHTML: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`,
          tagPosition: "head",
        },
        {
          id: "reb2b",
          innerHTML: `!function () {
            var reb2b = window.reb2b = window.reb2b || [];
            if (reb2b.invoked) return;
            reb2b.invoked = true;
            reb2b.methods = ["identify", "collect"];
            reb2b.factory = function (method) {
              return function () {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(method);
                reb2b.push(args);
                return reb2b;
              };
            };
            for (var i = 0; i < reb2b.methods.length; i++) {
              var key = reb2b.methods[i];
              reb2b[key] = reb2b.factory(key);
            }
            reb2b.load = function (key) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = true;
              script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/LNKLDHPEM2OJ.js.gz";
              var first = document.getElementsByTagName("script")[0];
              first.parentNode.insertBefore(script, first);
            };
            reb2b.SNIPPET_VERSION = "1.0.1";
            reb2b.load("LNKLDHPEM2OJ");
          }();`,
          type: "text/javascript",
          tagPosition: "bodyClose",
        },
      ]
    }
  },
});
