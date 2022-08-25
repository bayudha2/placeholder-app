const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        main: '#72FFFF',
        'main-20': '#00D7FF',
        'main-30': '#0096FF',
        'main-40': '#5800FF'
      }
    }
  }
};
