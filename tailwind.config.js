/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: token("bg"),
        surface: token("surface"),
        sunken: token("sunken"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "on-accent": token("on-accent"),
        band: token("band"),
        "on-band": token("on-band"),
        ok: token("ok"),
      },
      fontFamily: {
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};
