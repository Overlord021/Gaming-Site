/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        mdd: "0 5px 20px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    screens: {
      xxs: { min: "450px", max: "575px" },
      sm: { min: "576px", max: "767px" },
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },
  plugins: [],
};
