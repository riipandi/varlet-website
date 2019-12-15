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
      <div className="min-h-screen font-sans">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
