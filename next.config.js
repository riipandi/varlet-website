// const sitemap = require('nextjs-sitemap-generator')
const withCSS = require('@zeit/next-css')
const images = require('remark-images')
const emoji = require('remark-emoji')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    mdPlugins: [images, emoji],
  },
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withMDX(withCSS({
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: isProd ? '//varlet.dev' : ''
}))
