/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#141414",
        purple: "#BF5AF2",
      },
    },
  },
  plugins: [],
};
