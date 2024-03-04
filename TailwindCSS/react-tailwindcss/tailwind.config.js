/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
          twitter: "#1DA1F2"
        },
        spacing: {
          "15": "3.75rem"
        }
    },
  },
  plugins: [],
}

