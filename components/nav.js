import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '//github.com/riipandi/varlet/releases', target: '_blank', label: 'Download' },
  { href: '//github.com/riipandi/varlet-addons', target: '_blank', label: 'Add-Ons' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header className="py-4 px-6 absolute top-0 left-0 right-0 z-10">
    <div className="container mx-auto">
      <div className="flex items-center">
        <div className="flex-1">
          <Link href='/'>
            <img src="/img/site-logo-md.png" className="h-16 cursor-pointer" />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg className="fill-current text-gray-900 lg:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full text-center md:text-right" id="menu">
          <nav className="hidden lg:flex items-center">
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              {/* {links.map(({ key, href, target, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a className="px-4 py-3 font-bold uppercase text-secondary hover:text-primary" target={target ? {target} : '_self'}>{label}</a>
                  </Link>
                </li>
              ))} */}
              <li>
                <a href="#about-us" data-scroll className="px-4 py-3 font-bold uppercase text-secondary hover:text-primary">About</a>
              </li>
              <li>
                <a href="//github.com/riipandi/varlet/releases" target="_blank" className="px-4 py-3 font-bold uppercase text-secondary hover:text-primary">Download</a>
              </li>
              <li>
                <a href="//github.com/riipandi/varlet-addons" target="_blank" className="px-4 py-3 font-bold uppercase text-secondary hover:text-primary">Add-Ons</a>
              </li>
              <li>
                <a href="//spectrum.chat/varlet" target="_blank" className="ml-4 px-4 py-2 font-bold uppercase bg-primary hover:bg-primary-400 text-secondary rounded">Join The Community</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <style jsx>{`#menu-toggle:checked + #menu { display: block; }`}</style>
  </header>
)

export default Nav
