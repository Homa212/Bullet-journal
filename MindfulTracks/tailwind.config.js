/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      amatic:["Amatic SC", "sans-serif"],
      josefin:["Josefin Slab", "serif"]
    },
  },
  plugins: [],
};

