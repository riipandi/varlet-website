import Layout from "@components/layout";
import Head from '@components/head'

const Blog = () => {
  return (
    <Layout>

      <Head title="Blog - Varlet" />

      <div className="relative overflow-hidden px-6 lg:px-0">
        <div id="about-us" className="bg-blue-100 mt-32 py-12">
            <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 lg:pr-16">
                <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/online_everywhere_cd90.svg" className="-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0" />
                </div>
                <div className="md:w-1/2">
                <h3 className="flex flex-col text-4xl text-secondary font-bold mb-6">Blog Posts<span className="bg-primary h-1 w-20 block mt-4"></span></h3>
                <p className="text-lg text-secondary-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                <p className="text-lg text-secondary-700">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non.</p>
                </div>
            </div>
            </div>
        </div>

        <div id="about-us" className="bg-blue-100 py-24">
            <div id="contact" className="container mx-auto px-6">
                <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-6">I need more info! <span className="bg-primary h-1 w-20 block mt-4"></span></h3>
                <h2 className="text-center text-xl mb-12">Subscribe to our newsletter for updates and more thoughts.</h2>
                <div className="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
                    <input type="text" name="" placeholder="Insert your mail" className="h-16 text-secondary-700 w-64 flex-1 px-8 text-lg focus:outline-none" />
                    <button className="bg-primary w-32 uppercase font-bold text-secondary rounded-full">Send</button>
                </div>
            </div>
        </div>
      </div>

    </Layout>
  )
}

export default Blog
