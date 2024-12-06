/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amaRed: "#8e0404",
        amaYellow: "#efcb00",
      },

      margin: {
        "custom-margin": "5rem 20rem", // Customize as needed
      },
    },
  },
  plugins: [],
};
