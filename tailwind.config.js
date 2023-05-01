/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //grays
        'colors-gray600':'#E6E8EB',

        //blues
        'colors-blue600': '#0072f5',

        //purples
        'colors-purple600': '#7828c8',

        //greens
        'colors-green600': '#17C964',

        //yellows
        'colors-yellow600': '#F5A524',

        //red
        'colors-red600':'#F31260'


      },
      fontSize:{
        'xs': '0.6rem',
        'sm': '0.8rem',
        'md': '1.25rem',
        'lg': '1.563rem',
        'xl': '1.953rem',
      }
    },
  },
  plugins: [],
}

