const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gellix', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: defaultColor.coolGray,
        primary: defaultColor.purple,
        secondary: {
          50: '#f2f7f7',
          100: '#e6efef',
          200: '#bfd8d8',
          300: '#99c1c0',
          400: '#4d9290',
          500: '#006361',
          600: '#005957',
          700: '#004a49',
          800: '#003b3a',
          900: '#003130'
        },
        accent: defaultColor.green
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
