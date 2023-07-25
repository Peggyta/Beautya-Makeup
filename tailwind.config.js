/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': '32px',
      },
      maxWidth: {
        '8xl': '1440px',
        '1224': '1224px',
        '1016': '1016px',
        '750': '750px',
        '640': '640px',
        '600': '600px',
        '500': '400px',
      },
      width: {
        '450': '450px',
        '464': '464px',
        '520': '520px',
      },
      height: {
        '800': '800px',
        '705': '705px',
        '630': '460px',
        '439': '439px',
      },
      spacing: {
        '2.5': '9px',
        '85': '85px',
        '11': '38px',
        '14': '50px',
        '18': '75px',
        '19': '78px',
        '30': '118px',
        '34': '135px',
      },
      colors: {
        'midnight': '#202020',
        'raven': '#0c0c0c', 
        'cement': '#606060',
        'neutral': '#868686',
        'rose': '#fbeff2',
        'mulberry': '#79043c',
        'sangria': '#280114',
        'rasin': '#14010a',
        'neon': '#fa58a6',
        'ash': '#cbcbcb',
        'jam': '#510228',
        'cherry': '#b70f5a',
        'eggplant': '#0c0002',
        'cloud': '#dfdfdf',
        'berry': '#a10550',
        'dust': '#faf9f5',
      },
    },
  },
  plugins: [],
}
