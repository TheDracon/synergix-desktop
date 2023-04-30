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
      secondary: "#60a5fa",
      gray: colors.neutral,
      purple: colors.purple,
      white: colors.white,
      blue: colors.blue,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
    },
    extend: {},
  },
  plugins: [],
};
