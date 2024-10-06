/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        ssm: "320px",
        xxl: "1930px",
      },
    },
  },
  plugins: [],
};
