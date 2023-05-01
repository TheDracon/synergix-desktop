const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#171717",
      secondary: "#99f6e4",
      text: colors.teal[50],
      gray: colors.neutral,
      purple: colors.purple,
      white: colors.white,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      transparent: colors.transparent,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2160px',
    },
    extend: {},
  },
  plugins: [],
};
