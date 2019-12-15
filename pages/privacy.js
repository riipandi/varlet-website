import Layout from "@components/layout";
import Head from '@components/head'
import Document from '@content/pages/privacy.md'

const H1 = props => <h1 style={{ color: 'tomato' }} {...props} />
const InlineCode = props => (
  <code id="codes" style={{ color: 'purple' }} {...props} />
)
const Code = props => <code id="codes" style={{ fontWeight: 600 }} {...props} />
const Pre = props => <pre id="codes" style={{ color: 'red' }} {...props} />

const Privacy = () => {
  return (
    <Layout>

      <Head title="Privacy Policy - Varlet" />

      <div className="lg:px-0 px-5">
          <div className="container mt-32 mb-20 bg-white rounded-lg shadow-md mx-auto py-10 px-12 text-justify">
              <Document components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }} />
          </div>
      </div>

    </Layout>
  )
}

export default Privacy
