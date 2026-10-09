export default defineNuxtConfig({
  compatibilityDate: "2026-10-09",
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-cloudflare-analytics",
    "nuxt-microsoft-clarity",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      routes: ["/", "/resume"],
    },
  },
  routeRules: {
    // Older resume links that are still shared around
    "/files/Ashiqur-Rahman-Resume.pdf": {
      redirect: { to: "/files/Md_Ashiqur_Rahman_Resume_2026.pdf", statusCode: 301 },
    },
    "/files/Resume_Md_Ashiqur_Rahman_Backend_2025.pdf": {
      redirect: { to: "/files/Md_Ashiqur_Rahman_Resume_2026.pdf", statusCode: 301 },
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
          href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap",
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
