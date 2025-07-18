export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-cloudflare-analytics",
    "nuxt-microsoft-clarity",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  nitro: {
    preset: "cloudflare-pages",
  },
  ssr: false,
  cloudflareAnalytics: {
    token: "7dcb1956090c4f469b5770c335a0cd50",
  },
  clarity: {
    id: "mcfflssd39",
  },
  app: {
    head: {
      script: [
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
