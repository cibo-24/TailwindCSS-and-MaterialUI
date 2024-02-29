/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
     center: true,
    },
    extend: {
      colors : {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-grey": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
    },
  },
  
  plugins: [],
}

