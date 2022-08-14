/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "460px" },
      md: { min: "460px", max: "1150px" },
      lg: { min: "1150px", max: "2000px" },
    },
    extend: {
      colors: {
        black: "#141414",
        purple: "#BF5AF2",
      },
      fontFamily: {
        default: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
