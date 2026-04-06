/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6366f1",
          light: "#a5b4fc",
          dark: "#4338ca",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          light: "#c4b5fd",
          dark: "#6d28d9",
        },
        success: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        dark: {
          DEFAULT: "#020617",
          lighter: "#0f172a",
          border: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
