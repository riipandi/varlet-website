import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '//github.com/riipandi/varlet/releases', label: 'Download' },
  { href: '//spectrum.chat/varlet', label: 'Join Us' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header className="bg-white border-t-2 border-gray-800">

    <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto lg:px-0 px-6 lg:py-0 py-2">

      <div className="flex-1 flex justify-between items-center p-2">
          <Link href='/'>
              <a className=" h-12">
                  <img src="/img/site-logo.png" className="object-contain" alt="Site logo" height="20px" />
              </a>
          </Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden lg:flex lg:items-center lg:w-auto w-full text-center md:text-right" id="menu">
          <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                  {links.map(({ key, href, label }) => (
                      <li key={key}>
                          <Link href={href}>
                              <a className="lg:p-4 lg:px-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 tracking-tight">{label}</a>
                          </Link>
                      </li>
                  ))}
                  {/* <li>
                      <a className="lg:p-4 lg:px-3 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="//github.com/riipandi">Github</a>
                  </li> */}
              </ul>
          </nav>
          {/* <a className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor" href="javascript:;" >
              <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="//pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Ariss" />
          </a> */}
      </div>
    </div>

    <style jsx>{`
        #menu-toggle:checked + #menu {
            display: block;
        }
    `}</style>

  </header>

)

export default Nav
