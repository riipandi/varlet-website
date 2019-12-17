import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = 'Minimalism web development stack.'
const defaultOGURL = 'https://varlet.dev/'
const defaultOGImage = 'https://varlet.dev/img/bg-default-1.jpg'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{`${props.title}` || 'Varlet'}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {/* <link rel="manifest" href="/manifest.json"/> */}
    {/* <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" /> */}
    <link rel="icon" sizes="192x192" href="/img/favicon-touch.png" />
    <link rel="apple-touch-icon" href="/img/favicon-touch.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700|Titillium+Web:400,600,700&display=swap" />
    <script src="//cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0/dist/smooth-scroll.polyfills.min.js"></script>
    {/* <script
      data-name="BMC-Widget"
      src="//cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="ars"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#2bb79d"
      data-position="right"
      data-x_margin="18"
      data-y_margin="18">
    </script> */}
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
