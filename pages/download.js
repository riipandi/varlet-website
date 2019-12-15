import { useEffect, useState } from 'react'
import Layout from "@components/layout";
import Head from '@components/head'

const Download = () => {
  const [release, setRelease] = useState(null);
  useEffect(() => {
    async function getRelease() {
      const res = await fetch('/api/release');
      const newRelease = await res.json();
      setRelease(newRelease);
    }
    getRelease();
  }, []);
  return (
    <Layout>

      <Head title="Download - Varlet" />

      <div className="lg:px-0 px-5">
          <div className="max-w-5xl bg-white rounded-lg shadow-md mx-auto my-8 p-8">
              <h1 className="text-2xl font-bold tracking-normal font-sans">Coming soon!</h1>
              <h2 className="font-medium text-md text-gray-600 mt-3 tracking-tight">Our website under development.</h2>

              <p className="font-medium text-xl text-gray-700 mt-8 mb-2 tracking-wide">
                Current version is {release ? <span><b>v{release.version}</b></span> : <span className="loading"></span>}{', '}
                you can download at <a target="_blank" href="//github.com/riipandi/varlet/releases" className="font-medium border-b-2 border-dashed text-indigo-500">Github</a>.
              </p>
          </div>
      </div>

    </Layout>
  )
}

export default Download
