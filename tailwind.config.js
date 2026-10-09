/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./data/**/*.ts"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        ok: token("ok"),
      },
      fontFamily: {
        sans: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Martian Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};
