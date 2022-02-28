const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   
    extend: {
      colors: {
        'bg-color': '#f5f0ec',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        bodoni: ['Bodoni Moda', ...defaultTheme.fontFamily.sans],
        baijam: ['Bai Jamjuree', ...defaultTheme.fontFamily.sans],
        syncopate: ['Syncopate', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
