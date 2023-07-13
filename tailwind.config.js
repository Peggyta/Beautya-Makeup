/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
        '750': '750px',
        '640': '640px',
        '600': '600px',
        '500': '400px',
      },
      spacing: {
        '85': '85px',
        '18': '75px',
        '19': '78px',
        '30': '118px',
        '34': '135px',
      },
      colors: {
        'midnight': '#202020', 
        'cement': '#606060',
        'neutral': '#868686',
        'rose': '#fbeff2',
        'mulberry': '#79043c',
        'sangria': '#280114',
        'rasin': '#14010a',
        'neon': '#fa58a6',
        'ash': '#cbcbcb',
      },
    },
  },
  plugins: [],
}
