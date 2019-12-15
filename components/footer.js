import Link from 'next/link'

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="container mx-auto px-6 py-10 text-white text-center">
      <p>
        Copyright &copy; 2019 {' - '}
        <span className="hidden md:inline">Varlet is{' '}</span>a project by <a href="//arisio.us" className="inline font-medium border-b border-dashed" target="_blank">Aris Ripandi</a>
      </p>
    </div>
    {/* <div className="container mx-auto px-6 py-10">
        <ul className="flex items-center justify-center lg:justify-between text-center lg:text-left max-w-4xl mx-auto md:px-0 text-sm text-white">
            <li>
                &copy; 2019 <a href="/" className="font-medium">Varlet Dev</a>{' - '}
                A project by <a href="//arisio.us" className="inline font-medium border-b border-dashed" target="_blank">Aris Ripandi</a>
            </li>
            <li className="hidden md:inline text-right">
                <Link href='/privacy'>
                    <a>Privacy Policy</a>
                </Link>{' - '}
                <Link href='/terms'>
                    <a>Site Terms</a>
                </Link>
            </li>
        </ul>
    </div> */}
  </footer>
)

export default Footer
