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
      },
      colors: {
        'midnight': '#202020', 
        'cement': '#606060',
        'neutral': '#868686',
        'rose': '#fbeff2',
        'mulberry': '#79043c',
        'sangria': '#280114',
        'rasin': '#14010a',
      },
    },
  },
  plugins: [],
}
