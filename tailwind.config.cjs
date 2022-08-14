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
      backgroundImage:{
        gradientOne: 'linear-gradient(0deg, rgba(46, 0, 63, 0.28) 0%, rgba(76, 0, 83, 0.43) 100%)',
      }
    },
  },
  plugins: [],
};
