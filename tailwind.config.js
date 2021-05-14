const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        display: ["Oswald", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#20327a",
        secondary: "#ce2035",
        "ac-gray": {
          dark: "#4e4e4e",
          DEFAULT: "#757575",
          light: "#d4d4d4",
        },
        "almost-black": "#0a0a0a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
