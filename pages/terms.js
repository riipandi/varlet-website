import Layout from "@components/layout";
import Head from '@components/head'

const Home = () => {
  return (
    <Layout>

      <Head title="Varlet - Minimalism web development stack" />

      <div className="lg:px-0 px-5">
          <div className="container mt-32 mb-20 bg-white rounded-lg shadow-md mx-auto py-10 px-12 text-justify">
              <h1 className="text-2xl font-bold tracking-normal font-sans">Terms of Service</h1>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">1. Terms</h2>
              <p className="font-medium text-gray-700 mb-4">By accessing the website at <a className="font-bold" href="https://varlet.dev">varlet.dev</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">2. Use License</h2>
              <ol className="list-none ml-6 my-2">
                <li className="-ml-6">
                  A. Permission is granted to temporarily download one copy of the materials (information or software) on Varlet Dev's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  <ol className="list-disc ml-6 my-2">
                      <li>modify or copy the materials;</li>
                      <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                      <li>attempt to decompile or reverse engineer any software contained on Varlet Dev's website;</li>
                      <li>remove any copyright or other proprietary notations from the materials; or</li>
                      <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                  </ol>
                </li>
                <li className="-ml-6">
                  B. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Varlet Dev at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </li>
              </ol>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">3. Disclaimer</h2>
              <p className="font-medium text-gray-700 mb-4">The materials on Varlet Dev's website are provided on an 'as is' basis. Varlet Dev makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p className="font-medium text-gray-700 mb-4">Further, Varlet Dev does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">4. Limitations</h2>
              <p className="font-medium text-gray-700 mb-4">In no event shall Varlet Dev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Varlet Dev's website, even if Varlet Dev or a Varlet Dev authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">5. Accuracy of materials</h2>
              <p className="font-medium text-gray-700 mb-4">The materials appearing on Varlet Dev's website could include technical, typographical, or photographic errors. Varlet Dev does not warrant that any of the materials on its website are accurate, complete or current. Varlet Dev may make changes to the materials contained on its website at any time without notice. However Varlet Dev does not make any commitment to update the materials.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">6. Links</h2>
              <p className="font-medium text-gray-700 mb-4">Varlet Dev has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Varlet Dev of the site. Use of any such linked website is at the user's own risk.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">7. Modifications</h2>
              <p className="font-medium text-gray-700 mb-4">Varlet Dev may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
              <h2 className="font-bold text-md mt-4 mb-2 tracking-tight">8. Governing Law</h2>
              <p className="font-medium text-gray-700 mb-4">These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </div>
      </div>

    </Layout>
  )
}

export default Home
