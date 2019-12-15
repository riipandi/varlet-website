const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Quicksand',
        ...defaultTheme.fontFamily.sans
      ],
      serif: [
        'Playfair Display',
        ...defaultTheme.fontFamily.serif
      ]
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
