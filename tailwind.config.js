/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1536px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1736px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "light-blue": "#edf6ff",
        "dark-blue": "#103d7b",
        "medium-blue": "#748cae",
        "light-purple": "#f6f4ff",
        "dark-purple": "#5946ad",
        "medium-purple": "#887fb8",
        "light-orange": "#ffece7",
        "dark-orange": "#d46635",
        "medium-orange": "#ea7d4b",
        "light-green": "#fffbef",
        "dark-green": "#48711b",
        "medium-green": "#c3cead",
        "light-gray": "#f5f7f9",
        "main-dark": "#030303",
        content: "#b9b8bd",
      },
    },
  },
  plugins: [],
};
