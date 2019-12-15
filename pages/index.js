import Layout from "@components/layout";
import Head from '@components/head'

const Home = () => {
  return (
    <Layout>
        <Head title="Varlet - Minimalism web development stack" />
        <div className="relative overflow-hidden px-6 pb-6">
            <img src="img/wave.svg" className="absolute top-0 left-2/5" />
            <div className="container mx-auto relative">
                <div className="flex flex-col md:flex-row items-center pt-32 pb-16 md:pb-0">
                    <div className="md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">
                        <h1 className="text-3xl font-bold text-secondary-600 mb-2">What is Varlet?</h1>
                        <h2 className="text-lg text-secondary leading-normal mb-6 md:mb-10">
                            Varlet is a a web development environment for minimalists, made for PHP developers who like to work in the terminal, like me!
                        </h2>
                        <a
                            href="//github.com/riipandi/varlet/releases/latest"
                            target="_blank"
                            className="bg-primary px-4 md:px-6 py-2 md:py-3 text-lg md:text-md text-secondary font-semibold rounded hover:bg-primary-400">
                            Download Current Version
                        </a>
                    </div>
                    <div className="mt-16 sm:mt-0 flex-1 flex justify-end">
                        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/annotation_7das.svg" />
                    </div>
                </div>
            </div>
        </div>

        <div id="our-process" className="relative mt-8">
            <img src="img/circle2.svg" className="hidden sm:block absolute top-0 left-0 -mx-32" />
            <div className="container mx-auto px-6 pt-6 pb-12 relative">
            <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">Setup process <span className="bg-primary h-1 w-20 block mt-4"></span></h3>
            <div className="flex flex-col md:flex-row xl:px-32">
                <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">1</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">Install</h4>
                <p className="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
                <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">2</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">Run</h4>
                <p className="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
                <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">3</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">Enjoy</h4>
                <p className="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
            </div>
            </div>
        </div>

        <div id="about-us" className="bg-blue-100 mt-32 py-12">
            <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 lg:pr-16">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/static_website_0107.svg" className="-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0" />
                </div>
                <div className="md:w-1/2">
                <h3 className="flex flex-col text-4xl text-secondary font-bold mb-6">About Varlet<span className="bg-primary h-1 w-20 block mt-4"></span></h3>
                <p className="text-lg text-secondary-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                <p className="text-lg text-secondary-700">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non.</p>
                </div>
            </div>
            </div>
        </div>

        <div id="services" className="relative">
            <img src="img/circle.svg" className="absolute top-0 right-0 mt-64 hidden md:block" />
            <div className="container mx-auto px-6 py-32 relative">
            <h3 className="flex flex-col items-center text-4xl text-secondary font-bold">Features <span className="bg-primary h-1 w-20 block mt-4"></span></h3>
            <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_everywhere_cd90.svg" className="md:w-1/3" />
                <div className="md:ml-16 xl:ml-32">
                <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Multiple PHP Version</h4>
                <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
                <div className="md:mr-16 xl:mr-32">
                <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Easy to Switch PHP Version</h4>
                <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
                </div>
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/apps_m7mh.svg" className="md:w-1/3" />
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_test_gba7.svg" className="md:w-1/3" />
                <div className="md:ml-16 xl:ml-32">
                <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Varlet Commandline</h4>
                <p className="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                <p className="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
                </div>
            </div>
            </div>
        </div>

        <div id="about-us" className="bg-blue-100 py-24">
            <div id="contact" className="container mx-auto px-6">
                <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">I need more info! <span className="bg-primary h-1 w-20 block mt-4"></span></h3>
                <div className="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
                    <input type="text" name="" placeholder="Insert your mail" className="h-16 text-secondary-700 w-64 flex-1 px-8 text-lg focus:outline-none" />
                    <button className="bg-primary w-32 uppercase font-bold text-secondary rounded-full">Send</button>
                </div>
            </div>
        </div>

        {/* <div id="testimonials" className="bg-blue-100">
            <div className="mt-16">
                <div className="bg-blue-500 pt-16 pb-16 md:pb-32 relative">
                    <img src="img/wave3.svg" className="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top" />
                    <div className="container px-6 mx-auto">
                        <div className="md:w-2/3 mx-auto relative">
                        <img src="img/quote.svg" className="absolute top-0 left-0 sm:-ml-16 -mt-4" />
                        <h3 className="text-white italic text-2xl text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.
                            <strong className="block not-italic mt-6 text-primary">FRANK</strong>
                        </h3>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center -mt-8 md:-mt-16 lg:-mt-24 relative">
                    <a href="#">
                    <img src="img/avatar1.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
                    </a>
                    <a href="#">
                    <img src="img/avatar2.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
                    </a>
                    <a href="#">
                    <img src="img/avatar3.jpg" className="w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
                    </a>
                    <a href="#">
                    <img src="img/avatar4.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
                    </a>
                    <a href="#">
                    <img src="img/avatar5.jpg" className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white" />
                    </a>
                </div>
            </div>
            <div id="contact" className="container mx-auto px-6 py-24">
                <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">I need more info! <span className="bg-primary h-1 w-20 block mt-4"></span></h3>
                <div className="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
                    <input type="text" name="" placeholder="Insert your mail" className="h-16 text-secondary-700 w-64 flex-1 px-8 text-lg focus:outline-none" />
                    <button className="bg-primary w-32 uppercase font-bold text-secondary rounded-full">Send</button>
                </div>
            </div>
        </div> */}
    </Layout>
  )
}

export default Home
