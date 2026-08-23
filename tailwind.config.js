/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#f59e0b", strong: "#d97706" },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
