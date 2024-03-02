/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      originPrimary: "#FA4A0C",
      white: { DEFAULT: "#FFF", 100: "#F2F2F2" },
    },
    extend: {},
  },
  plugins: [],
};
