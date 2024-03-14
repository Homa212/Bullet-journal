/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      cormont:["Cormorant", "serif"],
      amatic:["Amatic SC", "sans-serif"],
      source: ["Source Serif 4", "serif"],
      josefin:["Josefin Sans", "sans-serif"]
    },
  },
  plugins: [],
};

