const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Titillium Web',
        ...defaultTheme.fontFamily.sans
      ],
      serif: [
        'Source Serif Pro',
        ...defaultTheme.fontFamily.serif
      ]
    },
    extend: {
      width: {
        44: '11rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
