const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: { "hero-img-hotel": "url('./asset/heroHotel.png')" },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        Poppins: ["poppins", "sans-serif"],
      },
    },
    colors: {
      c1: "#141416",
      c2: "#222529",
      c3: "#3B3E44",
      c4v: "#4A4E54",
      c4: "#84878B",
      c5: "#B1B5C3",
      c6: "#E7ECF3",
      c7: "#F4F5F6",
      c8: "#FCFCFD",
      c9: "#FFFFFF",
      red: "#FF543D",
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
};
