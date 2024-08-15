/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        pmColor : "#c44569",
        secColor : "#cf6a87"
      },
      fontFamily : {
        amsterdam : ["New Amsterdam", "sans-serif"]
      },
      screens: {
        'xs': {'max': '320px'},
      },
    },
  },
  plugins: [],
}

