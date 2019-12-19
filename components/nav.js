import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ className }) => {
  const router = useRouter()

  function linkClass(path) {
    return router.pathname === path
      ? `block -ml-3 pl-3 pr-2 py-2 font-medium border-l-4 rounded-r border-teal-400 bg-teal-200 text-teal-700`
      : `inline-block py-2 hover:text-blue-700 hover:underline font-medium text-gray-700`
  }

  return (
    <nav className={className}>
      <ul>
        <li className="md:pr-3">
          <Link href="/">
            <a className={linkClass('/')}>Introduction</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/features">
            <a className={linkClass('/features')}>Features</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/screenshots">
            <a className={linkClass('/screenshots')}>Screenshots</a>
          </Link>
        </li>
        {/* <li className="md:pr-3">
          <Link href="/sponsors">
            <a className={linkClass('/sponsors')}>Sponsors</a>
          </Link>
        </li> */}
      </ul>
      <div className="mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest">Getting started</div>
      <ul>
        <li className="md:pr-3">
          <Link href="/who-is-it-for">
            <a className={linkClass('/who-is-it-for')}>Who is it for</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/how-it-works">
            <a className={linkClass('/how-it-works')}>How it works</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/directory-structure">
            <a className={linkClass('/docs/directory-structure')}>Directory Structure</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/installation">
            <a className={linkClass('/docs/installation')}>Installation</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/upgrading">
            <a className={linkClass('/docs/upgrading')}>Upgrading</a>
          </Link>
        </li>
      </ul>
      <div className="mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest">Documentation</div>
      <ul>
        <li className="md:pr-3">
          <Link href="/docs/serving-site">
            <a className={linkClass('/docs/serving-site')}>Serving Site</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/pretty-url">
            <a className={linkClass('/docs/pretty-url')}>Pretty URLs</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/commandline">
            <a className={linkClass('/docs/commandline')}>Command Line</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/controlling-services">
            <a className={linkClass('/docs/controlling-services')}>Controlling Services</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/smtp-mail-catcher">
            <a className={linkClass('/docs/smtp-mail-catcher')}>SMTP Mail Catcher</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/extending-packages">
            <a className={linkClass('/docs/extending-packages')}>Extending Packages</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/docs/sharing-site">
            <a className={linkClass('/docs/sharing-site')}>Sharing Site</a>
          </Link>
        </li>
      </ul>
      <div className="mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest">Resources</div>
      <ul>
        <li className="md:pr-3">
          <Link href="/license">
            <a className={linkClass('/license')}>License</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/privacy-policy">
            <a className={linkClass('/privacy-policy')}>Privacy Policy</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/credits">
            <a className={linkClass('/credits')}>Credits</a>
          </Link>
        </li>
        <li className="md:pr-3">
          <Link href="/faq">
            <a className={linkClass('/faq')}>FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
