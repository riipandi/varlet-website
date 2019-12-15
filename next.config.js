const withCSS = require('@zeit/next-css')
// const sitemap = require('nextjs-sitemap-generator')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  // Hide x-powered-by
  poweredByHeader: false,

  // You may only need to add assetPrefix in the production.
  // assetPrefix: isProd ? '//assets.varlet.dev' : '',
})
