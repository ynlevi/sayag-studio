/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#75C2F6",
        secondary: "#FFD9B7",
        success: "#C8E4B2",
        danger: "#FE0000",
      },
    },
  },
  plugins: [],
};
