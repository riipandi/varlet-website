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
          <div className="max-w-5xl bg-white rounded-lg shadow-md mx-auto my-8 p-8">
              <Document components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }} />
          </div>
      </div>

    </Layout>
  )
}

export default Privacy
