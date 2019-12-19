import Nav from './Nav'
import Head from 'next/head'
import Link from 'next/link'
// import dedent from 'dedent-js'
import Mousetrap from 'mousetrap'
import { MDXProvider } from '@mdx-js/react'
// import TabbedCodeExamples from './TabbedCodeExamples'
import MarkdownComponents from './MarkdownComponents'
import React, { useState, useEffect, useRef } from 'react'

export default function Layout({ meta, children }) {
  const mobileNav = useRef(null)
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    // Algolia DocSearch
    docsearch({
      apiKey: 'b3d69556b1d51453168b9359bcc9da64',
      indexName: 'varletsite',
      inputSelector: '#docsearch',
      debug: false,
    })

    // Add shortcut to search input when pressing the "/" key
    Mousetrap.bind('/', function(e) {
      e.preventDefault()
      document.getElementById('docsearch').focus()
    })

    if (process.env.NODE_ENV === 'production') {
      // Carbon Ads
    //   var s = document.createElement('script')
    //   s.setAttribute('async', '')
    //   s.src = '//cdn.carbonads.com/carbon.js?serve=xxxxxxxx&placement=varletdev'
    //   s.id = '_carbonads_js'
    //   var adElement = document.getElementById('ad')
    //   adElement.innerHTML = ''
    //   adElement.appendChild(s)

      // Google Analytics
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', 'UA-146606706-7', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  }, [])

  return (
    <div
      onClick={e => setShowMobileNav(mobileNav.current.contains(e.target))}
      className="leading-none font-sans text-gray-800 antialiased"
    >
      <Head>
        <title>{meta.title ? `${meta.title} - Varlet` : `Varlet - Minimalism web development stack`}</title>
        {meta.description && <meta type="description" content={meta.description} />}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {meta.twitterCardImage && (
          <React.Fragment>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@riipandi" />
            <meta name="twitter:creator" content="@riipandi" />
            <meta name="twitter:title" content={`Varlet - ${meta.title ? meta.title : 'Minimalism web development stack'}`} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.twitterCardImage} />
          </React.Fragment>
        )}
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
        <script defer src="//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
        <script async src="//www.googletagmanager.com/gtag/js?id=UA-146606706-7"></script>
      </Head>
      {/* {meta.sponsor && (
        <div className="px-6 md:px-12 xl:px-0 py-4 text-md font-medium flex items-center justify-center bg-blue-300">
          <svg
            className="w-5 h-5 fill-current text-red-500 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
          </svg>
          <div className="mx-4">Support the ongoing development of Varlet.</div>
          <Link href="/sponsors">
            <a className="px-3 py-1 bg-teal-500 hover:bg-teal-600 rounded-full text-xs text-white leading-tight whitespace-no-wrap">
              Learn more
            </a>
          </Link>
        </div>
      )} */}
      <div className="text-white" css={{ background: 'linear-gradient(to right, #2c7a7b, #6b46c1)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0 relative">
          <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
            {/* <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/web_developer_p3e5.svg" className="w-auto" /> */}
            {/* <svg className="w-auto" css={{ height: '600px', fill: '#ffffff', opacity: '.08' }} viewBox="0 0 95 52.8">
              <path d="M27.3 0H0l26.4 26.4L0 52.8h27.3l26.4-26.4z" />
              <path d="M68.6 0H41.3l26.4 26.4-26.4 26.4h27.3L95 26.4z" />
            </svg> */}
          </div>
          <header className="py-12 relative flex items-center justify-between">
            <Link href="/">
              <a className="md:flex md:items-end">
                <img src="/img/site-logo-white.png" className="h-12 cursor-pointer" alt="Site logo"/>
              </a>
            </Link>
            <div className="relative hidden lg:inline-block w-1/2 ml-12">
              <input
                id="docsearch"
                placeholder="Search the docs…"
                className="py-2 pl-8 pr-2 w-56 lg:w-64 focus:outline-none block appearance-none bg-white rounded text-sm leading-normal font-medium text-gray-700"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                <svg className="fill-current pointer-events-none text-gray-500 w-4 h-4" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </div>
            <div ref={mobileNav} className="md:hidden relative z-10">
              <button className="block focus:outline-none" type="button">
                <svg
                  className="block fill-current text-white w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
              {showMobileNav && (
                <Nav className="absolute top-0 right-0 -mt-4 p-8 bg-white shadow-xl rounded z-50 whitespace-no-wrap" />
              )}
            </div>
            <div className="hidden md:flex items-center text-white">
              <Link href="/docs">
                <a className="block flex items-center mr-6 px-2 py-3 font-bold uppercase text-secondary hover:text-teal-400">Docs</a>
              </Link>
              <a className="block flex items-center hover:text-teal-400 mr-5" href="//github.com/varletdev" target="_blank" rel="noopener">
                <svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
                  <title>GitHub</title>
                  <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
                </svg>
              </a>
              <a className="block flex items-center hover:text-teal-400 mr-4" href="//twitter.com/riipandi" target="_blank" rel="noopener">
                <svg className="fill-current w-6 h-6" viewBox="0 0 20 20">
                  <title>Twitter</title>
                  <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84" />
                </svg>
              </a>
              <a className="block flex items-center mr-8 hover:text-teal-400" href="//spectrum.chat/varlet" target="_blank" rel="noopener">
                <svg className="fill-current w-6 h-6" viewBox="0 0 26 26">
                  <title>Join our community</title>
                  <path d="M6 14.5C6 15.3284 6.67157 16 7.5 16H9C12.866 16 16 19.134 16 23V24.5C16 25.3284 16.6716 26 17.5 26H24.5C25.3284 26 26 25.3284 26 24.5V23C26 13.6111 18.3889 6 9 6H7.5C6.67157 6 6 6.67157 6 7.5V14.5Z"/>
                </svg>
              </a>
              <a
                className="block flex items-center bg-teal-600 hover:bg-teal-700 text-white hover:text-white font-semibold py-3 px-8 rounded"
                href="//github.com/varletdev/varlet/releases" target="_blank" rel="noopener">
                Download
              </a>
            </div>
          </header>
          {meta.hero && (
            <div className="lg:mt-16 relative flex flex-wrap items-start">
              <div className="w-full lg:w-1/2 mt-6 lg:mt-2 mb-16 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl leading-tight font-semibold">
                    What is <strong>Varlet</strong>?
                </h1>
                <p className="mt-6 text-lg lg:text-xl leading-relaxed max-w-md pr-2">
                  Varlet is a web development environment for minimalists,{' '}
                  <strong className="font-bold" css={{ color: '#92eee2' }}>made for web developers</strong>{' '}
                  who like flexibility!
                </p>
                <p className="mt-6 text-sm leading-relaxed max-w-md pr-2 italic">
                  The Varlet package doesn't include any database engine,<br/> but you can try{' '}
                  <a className="font-bold text-teal-300 hover:text-teal-400 border-b border-dashed" href="//github.com/varletdev/addons" target="_blank" rel="noopener">our add-on</a>.
                </p>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-4 mt-8 lg:mt-0 mb-12 hidden lg:flex">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/annotation_7das.svg" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0 py-4 text-sm lg:text-lg font-medium flex items-center justify-center">
          <a className="text-gray-600 hover:text-gray-800" href="//github.com/varletdev/varlet/releases/latest" title="Current version">
            <strong>Version 1.2.0{' '}</strong>
          </a>
          <span className="text-gray-600 ml-1">
            is now available! Read about the changelog <a className="text-purple-600 hover:text-purple-800" href="#">here</a>.
          </span>
        </div>
      </div>

      {/* {meta.sponsor && (
        <div className="bg-gray-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0 py-4 text-md font-medium flex items-center justify-start">
            <div className="mr-6 text-gray-600">Our gold sponsors:</div>
            <a
              className="text-gray-600 hover:text-gray-800"
              href="//ploi.io"
              title="Ploi - Server Management Tool"
            >
              <svg className="w-auto h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253 93.3">
                <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z" />
              </svg>
            </a>
          </div>
        </div>
      )} */}

      <div className="max-w-6xl mx-auto md:px-12 xl:px-0 py-12 md:py-24 flex">
        <Nav className="hidden md:block md:w-48 lg:w-56 flex-shrink-0 border-r" />
        <div
          className="flex-1 overflow-hidden px-6 md:pl-12 md:pr-0 lg:pl-16 xl:pl-16 xl:pr-20 leading-relaxed text-lg"
          id="top"
        >
          <MDXProvider components={MarkdownComponents} children={children} />
        </div>
        <div className="hidden xl:block w-44 flex-shrink-0 relative -mt-8">
          <div className="pt-8 sticky top-0">
            {meta.links && (
              <div className="mb-12">
                <div className="text-xs font-bold uppercase text-gray-500 tracking-widest">On this page</div>
                <ul>
                  {meta.links.map((link, index) => (
                    <li className="mt-4" key={index}>
                      <Link href={link.url}>
                        <a className="hover:text-blue-700 hover:underline font-medium text-gray-700">{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div id="ad" />
          </div>
        </div>
      </div>
    <footer style={{ background: '#303f6d' }}>
        <div className="container mx-auto py-6 text-white text-center">
        <p>
            Copyright &copy; 2019 {' - '}
            <span className="hidden md:inline">Varlet is{' '}</span>a project by <a href="//arisio.us" className="inline font-medium border-b border-dashed" target="_blank" rel="noopener">Aris Ripandi</a>
        </p>
        </div>
    </footer>
    </div>
  )
}
