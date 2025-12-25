/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        "ink-light": "#0a0a0a",
        "tech-white": "#f0f0f0",
        "grid-line": "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
