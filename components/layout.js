import { Component } from 'react'
import { initGA, logPageView } from '@components/analytics'
import Nav from '@components/nav'
import Footer from '@components/footer'
import '@styles/index.css'

export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return (
      <div className="flex flex-col min-h-screen">

        <Nav />

        <main className="flex-1 max-w-4xl mx-auto px-4 md:px-0 md:py-4 w-full">
          {this.props.children}
        </main>

        <Footer />

      </div>
    )
  }
}
